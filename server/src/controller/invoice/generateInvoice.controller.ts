import { NextFunction, Request, Response } from "express";
import generateInvoice from "../../utils/generateInvoice";
import { Invoice } from "../../types/invoice";
import fetchCars from "../../utils/fetchCars";
import { TCar } from "../../types/car";
import ResponseData from "../../utils/responseGenerator";
import calculateRent from "../../utils/calculateRent";

const generateInvoiceController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const body = req.body;
  const cars = await fetchCars();

  const foundCar = cars?.data?.find((car: TCar) => car.id === body.carId);
  if (!foundCar) {
    const response = new ResponseData(404, "Car not found");
    res.status(response.status).send(response);
  } else {
    const invoice: Invoice = {
      contact: {
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        phone: body.phone,
      },
      car: {
        pickupDate: body.pickupDate,
        returnDate: body.returnDate,
        vehicleName: foundCar.make,
        vehicleType: foundCar.type,
        model: foundCar.model,
        rent: calculateRent(body.rentForHours, foundCar.rates),
      },
      subtotal: calculateRent(body.rentForHours, foundCar.rates),
      invoiceNumber: `#inv-${body.reservationCode}`,
    };

    const invoiceRes = await generateInvoice(invoice);

    if (invoiceRes) {
      const response = new ResponseData(200, "Success", { url: invoiceRes });
      res.status(response.status).send(response);
    } else {
      next("Internal Server error");
    }
  }
};

export default generateInvoiceController;
