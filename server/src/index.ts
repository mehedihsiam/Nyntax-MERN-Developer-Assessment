import express, { json } from "express";
import dotenv from "dotenv";
import getEnv from "./utils/getEnv";
import cors from "cors";
import handleError from "./middlewares/error.middlewere";
import ROUTES from "./constants/ROUTES";
import { carRouter } from "./routers/car.route";

dotenv.config();
const app = express();
app.use(json());
app.use(cors());
// connectDb();

const port = getEnv("PORT", 3000);

app.use(`${ROUTES.BASES.API_V1}${ROUTES.BASES.CAR}`, carRouter);

app.use("/", (_req, res) => {
  res.send("Welcome to api");
});

app.use(handleError);

app.listen(port, () => {
  console.log(`App is running at PORT:${port}`);
});
