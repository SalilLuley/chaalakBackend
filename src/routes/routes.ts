import { Router } from "express";
import bookingRoute from "./booking";
import carsRoute from "./cars";
import stationRoute from "./station";
import userRoute from "./user";

export const routes = Router();

routes.use("/user", userRoute);
routes.use("/station", stationRoute);
routes.use("/booking", bookingRoute);
routes.use("/cars", carsRoute);
