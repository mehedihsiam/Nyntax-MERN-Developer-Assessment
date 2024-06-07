import admin from "firebase-admin";

const initializeFirebase = () => {
  admin.initializeApp({
    credential: admin.credential.cert(require("../assets/admin-sdk.json")),
  });
  console.log("FIREBASE_INIT");
};

export default initializeFirebase;
