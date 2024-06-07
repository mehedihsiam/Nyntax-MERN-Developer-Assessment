"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const generateInvoiceHr_1 = __importDefault(require("./generateInvoiceHr"));
const generateCustomerInformation = (doc, invoice) => {
    const customerInformationTop = 160;
    doc
        .fillColor("#444444")
        .fontSize(20)
        .text("Invoice", 50, customerInformationTop - 40);
    (0, generateInvoiceHr_1.default)(doc, customerInformationTop - 10);
    const secondLineTop = 15;
    const thirdLineTop = 30;
    doc
        .fontSize(10)
        .text("Invoice Number:", 50, customerInformationTop)
        .font("Helvetica-Bold")
        .text(`${invoice.invoiceNumber}`, 150, customerInformationTop)
        .font("Helvetica")
        .text("Invoice Date:", 50, customerInformationTop + secondLineTop)
        .text(new Date().toLocaleDateString(), 150, customerInformationTop + secondLineTop)
        .font("Helvetica-Bold")
        .text(`${invoice.contact.firstName} ${invoice.contact.lastName}`, 300, customerInformationTop)
        .font("Helvetica")
        .text(`Email: ${invoice.contact.email}`, 300, customerInformationTop + secondLineTop)
        .font("Helvetica")
        .text(`Phone: ${invoice.contact.phone}`, 300, customerInformationTop + thirdLineTop)
        .moveDown();
};
exports.default = generateCustomerInformation;
