const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();

const MONGODB_ATLAS_PUBLIC_KEY = process.env.MONGODB_ATLAS_PUBLIC_KEY;
const MONGODB_ATLAS_PRIVATE_KEY = process.env.MONGODB_ATLAS_PRIVATE_KEY;
const MONGODB_ATLAS_PROJECT_ID = process.env.MONGODB_ATLAS_PROJECT_ID;

const addCurrentIPToWhitelist = async () => {
    try {
        // Get current IP address
        const response = await axios.get("https://api.ipify.org?format=json");
        const currentIP = response.data.ip;
        console.log(`Current IP Address: ${currentIP}`);

        // Encode the public and private keys for basic auth
        const auth = Buffer.from(
            `${MONGODB_ATLAS_PUBLIC_KEY}:${MONGODB_ATLAS_PRIVATE_KEY}`
        ).toString("base64");

        // Add current IP to MongoDB Atlas whitelist
        await axios.post(
            `https://cloud.mongodb.com/api/atlas/v1.0/groups/${MONGODB_ATLAS_PROJECT_ID}/accessList`,
            [
                {
                    ipAddress: currentIP,
                    comment: "Current IP Address",
                },
            ],
            {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: `Basic ${auth}`,
                },
            }
        );

        console.log("IP address added to whitelist successfully.");
    } catch (error) {
        console.error(
            "Error adding IP address to whitelist:",
            error.response.data
        );
    }
};

addCurrentIPToWhitelist();
