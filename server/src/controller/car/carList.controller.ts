import { NextFunction, Request, Response } from "express";
import fetchCars from "../../utils/fetchCars";
import ResponseData from "../../utils/responseGenerator";
import { TCar } from "../../types/car";

const carListController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const type = req.query.type as string;
  const cars = await fetchCars();
  if (cars) {
    const data = type
      ? cars.data.filter(
          (car: TCar) => car.type.toLowerCase() === type.toLowerCase()
        )
      : cars.data;
    const response = new ResponseData(200, "Success", { cars: data });
    res.status(response.status).send(response);
  } else {
    next("Internal server error");
  }
};

export default carListController;
