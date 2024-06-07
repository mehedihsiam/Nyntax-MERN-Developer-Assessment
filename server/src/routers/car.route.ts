import { Router } from "express";
import ROUTES from "../constants/ROUTES";
import carListController from "../controller/car/carList.controller";
import carTypeListController from "../controller/car/carTypeList.controller";

const router = Router();

router.get(ROUTES.LIST, carListController);

router.get(ROUTES.CAR_TYPE_LIST, carTypeListController);

export const carRouter = router;
