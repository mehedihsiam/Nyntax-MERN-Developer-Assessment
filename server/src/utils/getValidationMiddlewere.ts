import { NextFunction, Response } from "express";
import { TRequestCustomType } from "../types/customRequest";

import ResponseData from "./responseGenerator";
import Joi from "joi";
import formatJoiError from "./formatJoiError";

const getValidationMiddleware = (schema: Joi.ObjectSchema<any>) => {
  return (req: TRequestCustomType, res: Response, next: NextFunction) => {
    const validation = schema.validate(req.body);
    if (validation.error) {
      const formattedError = formatJoiError(validation.error);
      const response = new ResponseData(
        400,
        "Bad Request",
        null,
        formattedError
      );
      res.status(response.status).send(response);
    } else {
      next();
    }
  };
};

export default getValidationMiddleware;
