import mongoose from "mongoose";
import getEnv from "./getEnv";

const connectDb = () => {
  try {
    mongoose.connect(getEnv("DB_URL")).then(() => {
      console.log("CONNECTED WITH DB___");
    });
  } catch (error) {
    console.log("FAILED TO CONNECT WITH DB___", JSON.stringify(error));
  }
};

export default connectDb;
