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
const generateInvoice_1 = __importDefault(require("../../utils/generateInvoice"));
const fetchCars_1 = __importDefault(require("../../utils/fetchCars"));
const responseGenerator_1 = __importDefault(require("../../utils/responseGenerator"));
const calculateRent_1 = __importDefault(require("../../utils/calculateRent"));
const generateInvoiceController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const body = req.body;
    const cars = yield (0, fetchCars_1.default)();
    const foundCar = (_a = cars === null || cars === void 0 ? void 0 : cars.data) === null || _a === void 0 ? void 0 : _a.find((car) => car.id === body.carId);
    if (!foundCar) {
        const response = new responseGenerator_1.default(404, "Car not found");
        res.status(response.status).send(response);
    }
    else {
        const invoice = {
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
                rent: (0, calculateRent_1.default)(body.rentForHours, foundCar.rates),
            },
            subtotal: (0, calculateRent_1.default)(body.rentForHours, foundCar.rates),
            invoiceNumber: `#inv-${body.reservationCode}`,
        };
        const invoiceRes = yield (0, generateInvoice_1.default)(invoice);
        if (invoiceRes) {
            const response = new responseGenerator_1.default(200, "Success", { url: invoiceRes });
            res.status(response.status).send(response);
        }
        else {
            next("Internal Server error");
        }
    }
});
exports.default = generateInvoiceController;
