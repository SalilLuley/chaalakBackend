"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const booking_1 = __importDefault(require("./booking"));
const station_1 = __importDefault(require("./station"));
const user_1 = __importDefault(require("./user"));
exports.routes = (0, express_1.Router)();
exports.routes.use("/user", user_1.default);
exports.routes.use("/station", station_1.default);
exports.routes.use("/booking", booking_1.default);
