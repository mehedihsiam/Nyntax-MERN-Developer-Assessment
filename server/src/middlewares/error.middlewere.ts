import { NextFunction, Request, Response } from "express";
import ResponseData from "../utils/responseGenerator";

const handleError = (
  err: string,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  const response = new ResponseData(500, err, null, {
    message: "See the error message",
  });
  res.status(response.status).send(response);
};

export default handleError;
