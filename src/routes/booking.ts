import { Router } from "express";
import { SERVICE_IDENTIFIER } from "../constants/serviceIdentifier";
import { container } from "../config/export";
import { validate } from "../middleware/export";
import { BookingValidator } from "../validator/export";
import { IBookingController } from "../interface/export";

const bookingRoute = Router();

const controller = container.get<IBookingController>(
  SERVICE_IDENTIFIER.IBookingController
);

const validator = container.get<BookingValidator>(
  SERVICE_IDENTIFIER.BookingValidator
);

bookingRoute.get("/all", validate(validator.findAll), controller.findAll);
bookingRoute.get("/", validate(validator.findOne), controller.findOne);
bookingRoute.put("/", validate(validator.findOne), controller.update);
bookingRoute.delete("/", validate(validator.delete), controller.delete);
bookingRoute.post("/", validate(validator.create), controller.create);

export default bookingRoute;
