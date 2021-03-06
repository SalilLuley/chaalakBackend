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

stationRoute.get("/all", validate(validator.findAll), controller.findAll);
stationRoute.get("/", validate(validator.findOne), controller.findOne);
stationRoute.put("/", validate(validator.findOne), controller.update);
stationRoute.delete("/", validate(validator.delete), controller.delete);
stationRoute.post("/", validate(validator.insert), controller.insert);

export default stationRoute;
