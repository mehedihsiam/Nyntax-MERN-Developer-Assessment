import path from "path";

const generateHeader = (doc: PDFKit.PDFDocument) => {
  const logoPath = path.resolve(__dirname, "../assets/logo.png");
  doc
    .image(logoPath, 50, 45, { width: 70 })
    .fillColor("#444444")
    .font("Helvetica-Bold")
    .fontSize(16)
    .text("Nyntax", 200, 50, { align: "right" })
    .font("Helvetica")
    .fontSize(12)
    .text("Dhaka, Bangladesh", 200, 70, { align: "right" })
    .moveDown();
};
export default generateHeader;
