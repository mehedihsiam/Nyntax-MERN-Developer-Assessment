"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formatCurrency = (cents) => {
    return "$" + (cents / 100).toFixed(2);
};
exports.default = formatCurrency;
