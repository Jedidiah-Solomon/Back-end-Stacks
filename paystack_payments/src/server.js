import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { adminFirestore } from "../config/firebase-admin.js";
import fetch from "node-fetch";
import morgan from "morgan";
import crypto from "crypto";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use morgan to log requests
app.use(morgan("dev"));

// Serve static files from the public folder
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile("index.htm", { root: "public" });
});

// Payment Initialization route
app.post("/initialize-payment", async (req, res) => {
  const { email, phone, amount, product_name } = req.body;

  try {
    const response = await fetch(
      "https://api.paystack.co/transaction/initialize",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          amount: amount * 100, // Convert to kobo for NGN (NGN, USD, GHS, KES, ZAR)
          callback_url: `http://localhost:${PORT}/verify-transaction`,
          metadata: {
            cancel_action: `http://localhost:${PORT}/cancel-payment`,
            custom_fields: [
              {
                display_name: "Phone Number",
                variable_name: "phone_number",
                value: phone,
              },
              {
                display_name: "Product Name",
                variable_name: "product_name",
                value: product_name,
              },
            ],
          },
        }),
      }
    );

    const data = await response.json();
    console.log(`data received from payment initialized is: `, data);
    if (data.status) {
      // Save the transaction data to Firestore
      await adminFirestore.collection("payments-demo").add({
        email,
        phone,
        amount,
        product_name,
        access_code: data.data.access_code,
        reference: data.data.reference,
        status: "pending",
        createdAt: new Date(),
      });

      res.json({ authorization_url: data.data.authorization_url });
    } else {
      res.status(400).json({ message: data.message });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// Payment Verification route
app.get("/verify-transaction", async (req, res) => {
  const { reference } = req.query;

  try {
    const response = await fetch(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        },
      }
    );
    const data = await response.json();

    if (data.status && data.data.status === "success") {
      const paymentRef = await adminFirestore
        .collection("payments-demo")
        .where("reference", "==", reference)
        .get();

      if (!paymentRef.empty) {
        await paymentRef.docs[0].ref.update({ status: "success" });

        await adminFirestore.collection("payment-verifications").add({
          ...data.data,
          reference,
          verifiedAt: new Date(),
        });

        res.redirect("/success");
      } else {
        res.status(404).json({ message: "Payment record not found" });
      }
    } else {
      res.status(400).json({ message: "Payment verification failed" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// Route to serve success page
app.get("/success", (req, res) => {
  res.send("<h1>Payment Successful!</h1><p>Thank you for your payment.</p>");
});

// Initialize Payment page route
app.get("/initialize-payment-page", (req, res) => {
  res.sendFile("initialize-payment.html", { root: "public" });
});

// Verify Payment page route
app.get("/verify-payment-page", (req, res) => {
  res.sendFile("verify-payment.html", { root: "public" });
});

// Refund Payment page route
app.get("/refund", (req, res) => {
  res.sendFile("refund.html", { root: "public" });
});

// Get refunds list
app.get("/refunds-list", (req, res) => {
  res.sendFile("refunds-list.html", { root: "public" });
});

// Webhook events
app.post("/webhook", (req, res) => {
  const hash = crypto
    .createHmac("sha512", process.env.PAYSTACK_SECRET_KEY)
    .update(JSON.stringify(req.body))
    .digest("hex");

  // Verify the signature
  if (hash === req.headers["x-paystack-signature"]) {
    const event = req.body;

    // Log the webhook event in the "webhook-events" Firestore collection
    adminFirestore
      .collection("webhook-events")
      .add({
        event: event.event,
        data: event.data,
        receivedAt: new Date(),
      })
      .then(() => {
        console.log("Webhook event logged successfully");

        // Use a switch statement to handle each event type
        switch (event.event) {
          case "charge.success":
            handleChargeSuccess(event.data);
            break;

          case "charge.dispute.create":
          case "charge.dispute.remind":
          case "charge.dispute.resolve":
            handleDispute(event.event, event.data);
            break;

          case "customeridentification.success":
          case "customeridentification.failed":
            handleCustomerIdentification(event.event, event.data);
            break;

          case "refund.processed":
          case "refund.failed":
          case "refund.pending":
            handleRefund(event.event, event.data);
            break;

          case "subscription.create":
          case "subscription.disable":
          case "subscription.expiring_cards":
          case "subscription.not_renew":
            handleSubscription(event.event, event.data);
            break;

          case "transfer.success":
          case "transfer.failed":
          case "transfer.reversed":
            handleTransfer(event.event, event.data);
            break;

          // Add more cases for other events if needed

          default:
            console.log(`Unhandled event type: ${event.event}`);
        }

        res.sendStatus(200);
      })
      .catch((error) => {
        console.error("Error saving webhook event:", error);
        res.status(500).json({ message: "Error saving webhook event", error });
      });
  } else {
    // If the hash does not match, reject the request
    res.sendStatus(400);
  }
});

// Helper function to handle "charge.success" event
const handleChargeSuccess = (data) => {
  const reference = data.reference;
  adminFirestore
    .collection("payments-demo")
    .where("reference", "==", reference)
    .get()
    .then((snapshot) => {
      if (!snapshot.empty) {
        snapshot.docs[0].ref.update({ status: "success" });
        console.log(`Payment ${reference} marked as success`);
      }
    });
};

// Helper function to handle dispute events
const handleDispute = (eventType, data) => {
  console.log(
    `Handling dispute event: ${eventType} for reference ${data.reference}`
  );
};

// Helper function to handle customer identification events
const handleCustomerIdentification = (eventType, data) => {
  console.log(`Handling customer identification: ${eventType}`);
};

// Helper function to handle refund events
const handleRefund = (eventType, data) => {
  console.log(
    `Handling refund event: ${eventType} for reference ${data.reference}`
  );
};

// Helper function to handle subscription events
const handleSubscription = (eventType, data) => {
  console.log(`Handling subscription event: ${eventType}`);
};

// Helper function to handle transfer events
const handleTransfer = (eventType, data) => {
  console.log(
    `Handling transfer event: ${eventType} for reference ${data.reference}`
  );
};

// Create a refund route
app.post("/refund-payment", async (req, res) => {
  const { transaction, amount, reason } = req.body; // Get transaction ID, optional amount, and reason from the request body

  if (!transaction) {
    return res.status(400).json({ message: "Transaction ID is required" });
  }

  try {
    // Step 1: Validate the transaction ID by fetching its details
    const transactionResponse = await fetch(
      `https://api.paystack.co/transaction/verify/${transaction}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const transactionData = await transactionResponse.json();

    // Step 2: Check the transaction status
    if (!transactionData.status) {
      return res
        .status(400)
        .json({ message: "Transaction not found or invalid" });
    }

    if (transactionData.data.status !== "success") {
      console.log(transactionData);
      return res.status(400).json({
        message: "Refund can only be processed for successful transactions",
      });
    }

    const refundData = {
      transaction,
      reason,
    };

    if (amount) {
      // Ensure the amount is valid (not more than the transaction amount)
      if (amount > transactionData.data.amount) {
        return res.status(400).json({
          message: "Refund amount cannot exceed the transaction amount",
        });
      }
      refundData.amount = amount; // Include for a partial refund
    }

    // Step 3: Save the refund request to Firestore
    await adminFirestore.collection("refunds").add(refundData);

    // Step 4: Initiate the refund
    const response = await fetch("https://api.paystack.co/refund", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ transaction, amount }), // We then send necessary data for the refund
    });

    const data = await response.json();

    if (data.status) {
      return res
        .status(200)
        .json({ message: "Refund initiated successfully", data });
    } else {
      return res
        .status(400)
        .json({ message: "Failed to initiate refund", error: data.message });
    }
  } catch (error) {
    return res.status(500).json({ message: "Server error", error });
  }
});

// List refunds route
app.get("/refunds", async (req, res) => {
  try {
    const response = await fetch("https://api.paystack.co/refund", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (data.status) {
      res.status(200).json(data.data); // Return the list of refunds
    } else {
      res
        .status(400)
        .json({ message: "Failed to retrieve refunds", error: data.message });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
