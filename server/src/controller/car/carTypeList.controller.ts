import { NextFunction, Request, Response } from "express";
import fetchCars from "../../utils/fetchCars";
import ResponseData from "../../utils/responseGenerator";
import { TCar } from "../../types/car";

const getCarTypes = (cars: TCar[]) => {
  const types: string[] = [];
  cars.forEach((car) => {
    if (!types.includes(car.type)) {
      types.push(car.type);
    }
  });
  return types;
};

const carTypeListController = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  const cars = await fetchCars();

  if (cars) {
    const types = getCarTypes(cars.data);
    const response = new ResponseData(200, "Success", { types });
    res.status(response.status).send(response);
  } else {
    next("Internal server error");
  }
};

export default carTypeListController;
