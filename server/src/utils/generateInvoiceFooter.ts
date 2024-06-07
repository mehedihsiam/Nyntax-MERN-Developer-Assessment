const generateFooter = (doc: PDFKit.PDFDocument) => {
  doc
    .fontSize(18)
    .font("Helvetica-Bold")
    .text("Thank you for your business.", 50, 700, {
      align: "center",
      width: 500,
    });
};

export default generateFooter;
