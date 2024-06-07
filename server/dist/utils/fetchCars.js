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
const getEnv_1 = __importDefault(require("./getEnv"));
const fetchCars = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const url = (0, getEnv_1.default)("CAR_LIST_API_URL");
        const response = yield fetch(url);
        const data = yield response.json();
        return data;
    }
    catch (error) {
        console.log("REMOTE CAR FETCHING ERROR__", error);
        return null;
    }
});
exports.default = fetchCars;
