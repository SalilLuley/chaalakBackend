import { Router } from "express";
import stationRoute from "./station";
import userRoute from "./user";

export const routes = Router();

routes.use("/user", userRoute);
routes.use("/station", stationRoute);
