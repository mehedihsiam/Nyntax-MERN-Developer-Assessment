"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const getEnv_1 = __importDefault(require("./getEnv"));
const connectDb = () => {
    try {
        mongoose_1.default.connect((0, getEnv_1.default)("DB_URL")).then(() => {
            console.log("CONNECTED WITH DB___");
        });
    }
    catch (error) {
        console.log("FAILED TO CONNECT WITH DB___", JSON.stringify(error));
    }
};
exports.default = connectDb;
