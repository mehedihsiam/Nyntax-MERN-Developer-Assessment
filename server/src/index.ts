import express, { json } from "express";
import dotenv from "dotenv";
import getEnv from "./utils/getEnv";
import cors from "cors";
import handleError from "./middlewares/error.middlewere";
import ROUTES from "./constants/ROUTES";
import { carRouter } from "./routers/car.route";
import { invoiceRouter } from "./routers/invoice.route";
import initializeFirebase from "./utils/initializeFirebase";

dotenv.config();
const app = express();
app.use(json());
app.use(cors());
initializeFirebase();

const port = getEnv("PORT", 3000);

app.use(`${ROUTES.BASES.API_V1}${ROUTES.BASES.CAR}`, carRouter);
app.use(`${ROUTES.BASES.API_V1}${ROUTES.BASES.INVOICE}`, invoiceRouter);

app.use("/", (_req, res) => {
  res.send("Welcome to api");
});

app.use(handleError);

app.listen(port, () => {
  console.log(`App is running at PORT:${port}`);
});
