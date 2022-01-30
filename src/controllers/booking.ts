import { Request, Response } from "express";
import httpStatus from "http-status";
import { inject } from "inversify";
import { injectable } from "inversify/lib/annotation/injectable";
import { SERVICE_IDENTIFIER } from "../constants/export";
import { IBookingService, IBookingController } from "../interface/export";
import { InsertStation } from "../model/export";

@injectable()
export class BookingController implements IBookingController {
  service: IBookingService;
  constructor(
    @inject(SERVICE_IDENTIFIER.IBookingService) service: IBookingService
  ) {
    this.service = service;
  }
  delete = async (request: Request, response: Response) => {
    try {
      const data = await this.service.delete<InsertStation>(
        request.query.stationId?.toString()!
      );
      response.status(httpStatus.OK).send(data);
    } catch (error) {
      response
        .status(httpStatus.BAD_REQUEST)
        .send({ message: "Failed", error: error });
    }
  };

  findOne = async (request: Request, response: Response) => {
    try {
      const data = await this.service.findOne<InsertStation>(
        request.query.stationId?.toString()!
      );
      response.status(httpStatus.OK).send(data);
    } catch (error) {
      response
        .status(httpStatus.BAD_REQUEST)
        .send({ message: "Failed", error: error });
    }
  };
  update = async (request: Request, response: Response) => {
    try {
      const data = await this.service.update<InsertStation>({
        ...request.query,
        ...request.body,
      });
      response.status(httpStatus.OK).send(data);
    } catch (error) {
      response
        .status(httpStatus.BAD_REQUEST)
        .send({ message: "Failed", error: error });
    }
  };
  findAll = async (request: Request, response: Response) => {
    try {
      const data = await this.service.findAll<[InsertStation]>();
      response.status(httpStatus.OK).send(data);
    } catch (error) {
      response
        .status(httpStatus.BAD_REQUEST)
        .send({ message: "Failed", error: error });
    }
  };

  create = async (request: Request, response: Response) => {
    try {
      await this.service.insert(request.body);
      response.status(httpStatus.OK).send({ message: "Added item" });
    } catch (error) {
      response
        .status(httpStatus.BAD_REQUEST)
        .send({ message: "Failed", error: error });
    }
  };
}
