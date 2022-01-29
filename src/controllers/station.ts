import { Request, Response } from "express";
import httpStatus from "http-status";
import { inject } from "inversify";
import { injectable } from "inversify/lib/annotation/injectable";
import { SERVICE_IDENTIFIER } from "../constants/export";
import { IStationService, IStationController } from "../interface/export";

@injectable()
export class StationController implements IStationController {
  service: IStationService;
  constructor(
    @inject(SERVICE_IDENTIFIER.IStationService) service: IStationService
  ) {
    this.service = service;
  }

  register = async (request: Request, response: Response) => {
    try {
      await this.service.register(request.body);
      response.status(httpStatus.OK).send({ message: "Added item" });
    } catch (error) {
      console.log(error);
      response
        .status(httpStatus.BAD_REQUEST)
        .send({ message: "Failed to add item" });
    }
  };
}
