"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ResponseData {
    constructor(status, message, data, error, othersInfo) {
        this.status = status;
        this.message = message;
        this.data = data;
        this.error = error;
        this.details = othersInfo;
    }
}
exports.default = ResponseData;
