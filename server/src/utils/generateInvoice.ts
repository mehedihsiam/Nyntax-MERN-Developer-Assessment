import PDFDocument from "pdfkit";
import admin from "firebase-admin";
import generateHeader from "./generateInvoiceHeader";
import generateCustomerInformation from "./generateInvoiceCustomerInfo";
import generateInvoiceTable from "./generateInvoiceTable";
import generateFooter from "./generateInvoiceFooter";
import { Invoice } from "../types/invoice";
import getEnv from "./getEnv";

const generateInvoice = async (invoice: Invoice) => {
  const bucket = admin.storage().bucket(getEnv("BUCKET_URL"));
  return new Promise((resolve, _reject) => {
    const doc = new PDFDocument({ margin: 50 });
    const buffers: Buffer[] = [];

    doc.on("data", buffers.push.bind(buffers));
    doc.on("end", async () => {
      const pdfData = Buffer.concat(buffers);
      const file = bucket.file(
        `invoices/invoice_${invoice.invoiceNumber}_${Date.now()}.pdf`
      );
      await file.save(pdfData, {
        metadata: { contentType: "application/pdf" },
        resumable: false,
        public: true,
      });
      console.log(file.name);
      resolve(file.publicUrl());
    });

    generateHeader(doc);
    generateCustomerInformation(doc, invoice);
    generateInvoiceTable(doc, invoice);
    generateFooter(doc);

    doc.end();
  });
};

export default generateInvoice;
