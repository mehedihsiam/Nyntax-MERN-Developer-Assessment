"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generateTableRow = (doc, y, item, description, unitCost, quantity, lineTotal) => {
    doc
        .fontSize(10)
        .text(item, 50, y)
        .text(description, 150, y)
        .text(unitCost, 280, y, { width: 90, align: "right" })
        .text(quantity, 370, y, { width: 90, align: "right" })
        .text(lineTotal, 0, y, { align: "right" });
};
exports.default = generateTableRow;
