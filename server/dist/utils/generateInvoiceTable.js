"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const generateInvoiceHr_1 = __importDefault(require("./generateInvoiceHr"));
//@ts-ignore
const generateInvoiceTable = (doc, invoice) => {
    const tableTop = 280;
    const lineGap = 20;
    const secondTextXValue = 130;
    doc
        .fillColor("#444444")
        .fontSize(20)
        .text("Reservation Details", 50, tableTop - 40);
    (0, generateInvoiceHr_1.default)(doc, tableTop - 10);
    doc
        .fontSize(12)
        .text(`Car Name:`, 50, tableTop)
        .text(`${invoice.car.vehicleName}`, secondTextXValue, tableTop)
        .text("Type:", 50, tableTop + lineGap)
        .text(`${invoice.car.vehicleType}`, secondTextXValue, tableTop + lineGap)
        .text("Model:", 50, tableTop + lineGap * 2)
        .text(`${invoice.car.model}`, secondTextXValue, tableTop + lineGap * 2)
        .text("Pickup Date:", 50, tableTop + lineGap * 3)
        .text(`${invoice.car.pickupDate}`, secondTextXValue, tableTop + lineGap * 3)
        .text("Return Date:", 50, tableTop + lineGap * 4)
        .text(`${invoice.car.returnDate}`, secondTextXValue, tableTop + lineGap * 4)
        .text("Payable:", 50, tableTop + lineGap * 5)
        .text(`$${invoice.car.rent.toFixed(2)}`, secondTextXValue, tableTop + lineGap * 5);
};
exports.default = generateInvoiceTable;
