import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import httpStatus from "http-status";
import { inject } from "inversify";
import { injectable } from "inversify/lib/annotation/injectable";
import { ParsedQs } from "qs";
import { SERVICE_IDENTIFIER } from "../constants/export";
import { IStationService, IStationController } from "../interface/export";
import { AddStation } from "../model/export";

@injectable()
export class StationController implements IStationController {
  service: IStationService;
  constructor(
    @inject(SERVICE_IDENTIFIER.IStationService) service: IStationService
  ) {
    this.service = service;
  }
  delete = async (request: Request, response: Response) => {
    try {
      const data = await this.service.findOne<AddStation>(
        request.query.stationId?.toString()!
      );
      response.status(httpStatus.OK).send(data);
    } catch (error) {
      console.log(error);

      response
        .status(httpStatus.BAD_REQUEST)
        .send({ message: "Failed", error: error });
    }
  };

  findOne = async (request: Request, response: Response) => {
    try {
      const data = await this.service.findOne<AddStation>(
        request.query.stationId?.toString()!
      );
      response.status(httpStatus.OK).send(data);
    } catch (error) {
      console.log(error);

      response
        .status(httpStatus.BAD_REQUEST)
        .send({ message: "Failed", error: error });
    }
  };
  update = async (request: Request, response: Response) => {
    try {
      const data = await this.service.update<AddStation>({
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
      const data = await this.service.findAll<[AddStation]>();
      response.status(httpStatus.OK).send(data);
    } catch (error) {
      response
        .status(httpStatus.BAD_REQUEST)
        .send({ message: "Failed", error: error });
    }
  };

  register = async (request: Request, response: Response) => {
    try {
      await this.service.register(request.body);
      response.status(httpStatus.OK).send({ message: "Added item" });
    } catch (error) {
      response
        .status(httpStatus.BAD_REQUEST)
        .send({ message: "Failed", error: error });
    }
  };
}
