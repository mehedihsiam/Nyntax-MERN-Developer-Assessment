import { Router } from "express";
import ROUTES from "../constants/ROUTES";
import generateInvoiceController from "../controller/invoice/generateInvoice.controller";

const router = Router();

router.post(ROUTES.GENERATE, generateInvoiceController);

export const invoiceRouter = router;
