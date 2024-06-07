const generateHr = (doc: PDFKit.PDFDocument, y: number) => {
  doc.strokeColor("#aaaaaa").lineWidth(1).moveTo(50, y).lineTo(550, y).stroke();
};
export default generateHr;
