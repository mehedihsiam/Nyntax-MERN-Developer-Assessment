"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pdfkit_1 = __importDefault(require("pdfkit"));
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const generateInvoiceHeader_1 = __importDefault(require("./generateInvoiceHeader"));
const generateInvoiceCustomerInfo_1 = __importDefault(require("./generateInvoiceCustomerInfo"));
const generateInvoiceTable_1 = __importDefault(require("./generateInvoiceTable"));
const generateInvoiceFooter_1 = __importDefault(require("./generateInvoiceFooter"));
const getEnv_1 = __importDefault(require("./getEnv"));
const generateInvoice = (invoice) => __awaiter(void 0, void 0, void 0, function* () {
    const bucket = firebase_admin_1.default.storage().bucket((0, getEnv_1.default)("BUCKET_URL"));
    return new Promise((resolve, _reject) => {
        const doc = new pdfkit_1.default({ margin: 50 });
        const buffers = [];
        doc.on("data", buffers.push.bind(buffers));
        doc.on("end", () => __awaiter(void 0, void 0, void 0, function* () {
            const pdfData = Buffer.concat(buffers);
            const file = bucket.file(`invoices/invoice_${invoice.invoiceNumber}_${Date.now()}.pdf`);
            yield file.save(pdfData, {
                metadata: { contentType: "application/pdf" },
                resumable: false,
                public: true,
            });
            console.log(file.name);
            resolve(file.publicUrl());
        }));
        (0, generateInvoiceHeader_1.default)(doc);
        (0, generateInvoiceCustomerInfo_1.default)(doc, invoice);
        (0, generateInvoiceTable_1.default)(doc, invoice);
        (0, generateInvoiceFooter_1.default)(doc);
        doc.end();
    });
});
exports.default = generateInvoice;
