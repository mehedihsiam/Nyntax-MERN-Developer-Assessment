"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fetchCars_1 = __importDefault(require("../../utils/fetchCars"));
const responseGenerator_1 = __importDefault(require("../../utils/responseGenerator"));
const carListController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const type = req.query.type;
    const cars = yield (0, fetchCars_1.default)();
    if (cars) {
        const data = type
            ? cars.data.filter((car) => car.type.toLowerCase() === type.toLowerCase())
            : cars.data;
        const response = new responseGenerator_1.default(200, "Success", { cars: data });
        res.status(response.status).send(response);
    }
    else {
        next("Internal server error");
    }
});
exports.default = carListController;
