import PDFDocument from "pdfkit";
import fs from "fs";
import generateHeader from "./generateInvoiceHeader";
import generateCustomerInformation from "./generateInvoiceCustomerInfo";
import generateInvoiceTable from "./generateInvoiceTable";
import generateFooter from "./generateInvoiceFooter";
import { Invoice } from "../types/invoice";

function generateInvoice(invoice: Invoice, path: string): void {
  let doc = new PDFDocument({ margin: 50, size: "A4" });

  generateHeader(doc);
  generateCustomerInformation(doc, invoice);
  generateInvoiceTable(doc, invoice);
  generateFooter(doc);

  doc.end();
  doc.pipe(fs.createWriteStream(path));
}

export default generateInvoice;
