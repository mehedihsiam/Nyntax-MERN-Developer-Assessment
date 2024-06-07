"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generateFooter = (doc) => {
    doc
        .fontSize(18)
        .font("Helvetica-Bold")
        .text("Thank you for your business.", 50, 700, {
        align: "center",
        width: 500,
    });
};
exports.default = generateFooter;
