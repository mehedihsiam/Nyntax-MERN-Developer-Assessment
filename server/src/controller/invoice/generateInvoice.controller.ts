import { NextFunction, Request, Response } from "express";
import generateInvoice from "../../utils/generateInvoice";
import path from "path";
import { Invoice } from "../../types/invoice";

const generateInvoiceController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const invoice: Invoice = {
    contact: {
      firstName: "Mehedi Hasan",
      lastName: "Siam",
      email: "email@siam.com",
      phone: "+8801953387415",
    },
    car: {
      pickupDate: "12/12/12",
      returnDate: "12/12/12",
      vehicleName: "New Vehicle",
      vehicleType: "SUV",
      model: "Car Model",
      rent: 100,
    },
    subtotal: 8000,
    invoiceNumber: "1234",
  };
  const dir = path.join(__dirname, "../..");
  console.log(dir);
  generateInvoice(invoice, `${dir}/assets/invoice.pdf`);
  res.send("Invoice generated");
};

export default generateInvoiceController;
