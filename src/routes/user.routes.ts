import { Router } from "express";
import { SERVICE_IDENTIFIER } from "../constants/serviceIdentifier";
import { container } from "../config/export";
import { validate } from "../middleware/export";
import { UserValidator } from "../validator/export";
import { IUserController } from "../interface/export";

const userRoute = Router();

const controller = container.get<IUserController>(
  SERVICE_IDENTIFIER.IUserController
);

const validator = container.get<UserValidator>(
  SERVICE_IDENTIFIER.IUserValidator
);

userRoute.post("/register", validate(validator.register), controller.register);

export default userRoute;
