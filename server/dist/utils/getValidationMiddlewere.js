"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const responseGenerator_1 = __importDefault(require("./responseGenerator"));
const formatJoiError_1 = __importDefault(require("./formatJoiError"));
const getValidationMiddleware = (schema) => {
    return (req, res, next) => {
        const validation = schema.validate(req.body);
        if (validation.error) {
            const formattedError = (0, formatJoiError_1.default)(validation.error);
            const response = new responseGenerator_1.default(400, "Bad Request", null, formattedError);
            res.status(response.status).send(response);
        }
        else {
            next();
        }
    };
};
exports.default = getValidationMiddleware;
