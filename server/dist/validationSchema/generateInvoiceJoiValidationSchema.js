"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const generateInvoiceJoiSchema = joi_1.default.object({
    firstName: joi_1.default.string().required(),
    lastName: joi_1.default.string().required(),
    email: joi_1.default.string().email().required(),
    phone: joi_1.default.string().required(),
    pickupDate: joi_1.default.string().required(),
    returnDate: joi_1.default.string().required(),
    carId: joi_1.default.string().required(),
    reservationCode: joi_1.default.string().required(),
    rentForHours: joi_1.default.number().required(),
});
exports.default = generateInvoiceJoiSchema;
