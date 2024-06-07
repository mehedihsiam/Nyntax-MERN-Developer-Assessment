import express, { json } from "express";
import dotenv from "dotenv";
import getEnv from "./utils/getEnv";
import cors from "cors";
import connectDb from "./utils/connectDb";
import handleError from "./middlewares/error.middlewere";

dotenv.config();
const app = express();
app.use(json());
app.use(cors());
connectDb();

const port = getEnv("PORT", 3000);

app.use("/", (_req, res) => {
  res.send("Welcome to api");
});

app.use(handleError);

app.listen(port, () => {
  console.log(`App is running at PORT:${port}`);
});
