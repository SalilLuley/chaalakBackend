"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const serviceIdentifier_1 = require("../constants/serviceIdentifier");
const export_1 = require("../config/export");
const export_2 = require("../middleware/export");
const userRoute = (0, express_1.Router)();
const controller = export_1.container.get(serviceIdentifier_1.SERVICE_IDENTIFIER.IUserController);
const validator = export_1.container.get(serviceIdentifier_1.SERVICE_IDENTIFIER.UserValidator);
userRoute.post("/register", (0, export_2.validate)(validator.insert), controller.insert);
userRoute.get("/all", (0, export_2.validate)(validator.findAll), controller.findAll);
userRoute.get("/", (0, export_2.validate)(validator.findOne), controller.findOne);
exports.default = userRoute;
