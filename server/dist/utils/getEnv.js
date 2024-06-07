"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getEnv = (key, defaultValue) => {
    return (process.env[key] || defaultValue);
};
exports.default = getEnv;
