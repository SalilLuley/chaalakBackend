import { Router } from "express";
import { SERVICE_IDENTIFIER } from "../constants/serviceIdentifier";
import { container } from "../config/export";
import { validate } from "../middleware/export";
import { StationValidator } from "../validator/export";
import { IStationController } from "../interface/export";

const stationRoute = Router();

const controller = container.get<IStationController>(
  SERVICE_IDENTIFIER.IStationController
);

const validator = container.get<StationValidator>(
  SERVICE_IDENTIFIER.StationValidator
);

stationRoute.get("/all", controller.findAll);
stationRoute.post("/", validate(validator.register), controller.register);

export default stationRoute;
