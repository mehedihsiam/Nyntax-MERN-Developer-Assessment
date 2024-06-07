"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.carRouter = void 0;
const express_1 = require("express");
const ROUTES_1 = __importDefault(require("../constants/ROUTES"));
const carList_controller_1 = __importDefault(require("../controller/car/carList.controller"));
const carTypeList_controller_1 = __importDefault(require("../controller/car/carTypeList.controller"));
const router = (0, express_1.Router)();
router.get(ROUTES_1.default.LIST, carList_controller_1.default);
router.get(ROUTES_1.default.CAR_TYPE_LIST, carTypeList_controller_1.default);
exports.carRouter = router;
