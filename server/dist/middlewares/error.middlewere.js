"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const responseGenerator_1 = __importDefault(require("../utils/responseGenerator"));
const handleError = (err, _req, res, _next) => {
    const response = new responseGenerator_1.default(500, err, null, {
        message: "See the error message",
    });
    res.status(response.status).send(response);
};
exports.default = handleError;
