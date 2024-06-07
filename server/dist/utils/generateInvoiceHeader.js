"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const generateHeader = (doc) => {
    const logoPath = path_1.default.resolve(__dirname, "../assets/logo.png");
    doc
        .image(logoPath, 50, 45, { width: 70 })
        .fillColor("#444444")
        .font("Helvetica-Bold")
        .fontSize(16)
        .text("Nyntax", 200, 50, { align: "right" })
        .font("Helvetica")
        .fontSize(12)
        .text("Dhaka, Bangladesh", 200, 70, { align: "right" })
        .moveDown();
};
exports.default = generateHeader;
