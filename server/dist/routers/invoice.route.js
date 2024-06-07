"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.invoiceRouter = void 0;
const express_1 = require("express");
const ROUTES_1 = __importDefault(require("../constants/ROUTES"));
const generateInvoice_controller_1 = __importDefault(require("../controller/invoice/generateInvoice.controller"));
const getValidationMiddlewere_1 = __importDefault(require("../utils/getValidationMiddlewere"));
const generateInvoiceJoiValidationSchema_1 = __importDefault(require("../validationSchema/generateInvoiceJoiValidationSchema"));
const router = (0, express_1.Router)();
router.post(ROUTES_1.default.GENERATE, (0, getValidationMiddlewere_1.default)(generateInvoiceJoiValidationSchema_1.default), generateInvoice_controller_1.default);
exports.invoiceRouter = router;
