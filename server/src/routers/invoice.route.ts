import { Router } from "express";
import ROUTES from "../constants/ROUTES";
import generateInvoiceController from "../controller/invoice/generateInvoice.controller";
import getValidationMiddleware from "../utils/getValidationMiddlewere";
import generateInvoiceJoiSchema from "../validationSchema/generateInvoiceJoiValidationSchema";

const router = Router();

router.post(
  ROUTES.GENERATE,
  getValidationMiddleware(generateInvoiceJoiSchema),
  generateInvoiceController
);

export const invoiceRouter = router;
