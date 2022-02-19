import { Router } from "express";
import { SERVICE_IDENTIFIER } from "../constants/serviceIdentifier";
import { container } from "../config/export";
import { validate } from "../middleware/export";
import { CarsValidator } from "../validator/export";
import { ICarsController } from "../interface/export";

const carsRoute = Router();

const controller = container.get<ICarsController>(
  SERVICE_IDENTIFIER.ICarsController
);

const validator = container.get<CarsValidator>(
  SERVICE_IDENTIFIER.CarsValidator
);

carsRoute.get("/all", validate(validator.findAll), controller.findAll);
carsRoute.get("/", validate(validator.findOne), controller.findOne);
carsRoute.put("/", validate(validator.findOne), controller.update);
// carsRoute.delete("/", validate(validator.delete), controller.delete);
// carsRoute.post("/", validate(validator.create), controller.create);

export default carsRoute;
