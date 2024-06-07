"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const getEnv_1 = __importDefault(require("./utils/getEnv"));
const cors_1 = __importDefault(require("cors"));
const error_middlewere_1 = __importDefault(require("./middlewares/error.middlewere"));
const ROUTES_1 = __importDefault(require("./constants/ROUTES"));
const car_route_1 = require("./routers/car.route");
const invoice_route_1 = require("./routers/invoice.route");
const initializeFirebase_1 = __importDefault(require("./utils/initializeFirebase"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, express_1.json)());
app.use((0, cors_1.default)());
(0, initializeFirebase_1.default)();
const port = (0, getEnv_1.default)("PORT", 3000);
app.use(`${ROUTES_1.default.BASES.API_V1}${ROUTES_1.default.BASES.CAR}`, car_route_1.carRouter);
app.use(`${ROUTES_1.default.BASES.API_V1}${ROUTES_1.default.BASES.INVOICE}`, invoice_route_1.invoiceRouter);
app.use("/", (_req, res) => {
    res.send("Welcome to api");
});
app.use(error_middlewere_1.default);
app.listen(port, () => {
    console.log(`App is running at PORT:${port}`);
});
