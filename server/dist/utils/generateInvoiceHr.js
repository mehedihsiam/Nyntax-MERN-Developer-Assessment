"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generateHr = (doc, y) => {
    doc.strokeColor("#aaaaaa").lineWidth(1).moveTo(50, y).lineTo(550, y).stroke();
};
exports.default = generateHr;
