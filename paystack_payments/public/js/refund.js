document.getElementById("refundForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const transactionId = document.getElementById("transactionId").value;
  const amount = document.getElementById("amount").value;
  const refundReason = document.getElementById("refundReason").value;
  const otherReasonInput = document.getElementById("otherReasonInput").value;

  const refundData = {
    transaction: transactionId,
    amount: amount ? parseInt(amount) * 100 : undefined,
    reason: refundReason === "other" ? otherReasonInput : refundReason,
  };

  const response = await fetch("/refund-payment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(refundData),
  });

  const result = await response.json();
  const messageDiv = document.getElementById("message");

  messageDiv.innerHTML = "";

  if (response.ok) {
    messageDiv.innerHTML = `<p style="color: green;">${result.message}</p>`;
  } else {
    messageDiv.innerHTML = `<p style="color: red;">${result.message}</p>`;
  }
});
