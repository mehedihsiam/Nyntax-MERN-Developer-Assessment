"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formatJoiError = (error) => {
    const details = (error === null || error === void 0 ? void 0 : error.details) || [];
    const errorObject = {};
    details.forEach((detail) => {
        errorObject[detail.path[0]] = detail.message;
    });
    return errorObject;
};
exports.default = formatJoiError;
