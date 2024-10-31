import admin from "firebase-admin";
import fs from "fs";
import path from "path";

const serviceAccountPath = path.resolve("config/serviceAccountKey.json");

const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, "utf8"));

// Initialize Firebase Admin SDK for the backend (server-side)
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://hds-paystack-stage-default-rtdb.firebaseio.com", // Real-time DB URL
  storageBucket: "gs://hds-paystack-stage.appspot.com", // Storage URL
});

// Define Firebase Admin services
const adminFirestore = admin.firestore();
const adminAuth = admin.auth();
const adminStorage = admin.storage();

// Export all Firebase Admin services
export { adminFirestore, adminAuth, adminStorage };
