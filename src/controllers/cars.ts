import { Request, Response } from "express";
import httpStatus from "http-status";
import { inject } from "inversify";
import { injectable } from "inversify/lib/annotation/injectable";
import _ from "lodash";
import { SERVICE_IDENTIFIER } from "../constants/export";
import { ICarsService, ICarsController } from "../interface/export";
import { Car, InsertCar } from "../model/export";

@injectable()
export class CarsController implements ICarsController {
  service: ICarsService;
  constructor(@inject(SERVICE_IDENTIFIER.ICarsService) service: ICarsService) {
    this.service = service;
  }
  delete = async (request: Request, response: Response) => {
    try {
      const findOneCar = await this.service.findOne<InsertCar>(
        _.toString(request.query.carDocumentId)
      );

      if (_.isEmpty(findOneCar)) {
        response.status(httpStatus.OK).send({ message: "Car not found" });
        return;
      }

      const car = _.find(findOneCar.cars, {
        carId: request.query.carId,
      }) as Car;
      car.isDeleted = true;

      const data = await this.service.update<InsertCar>(findOneCar);
      response.status(httpStatus.OK).send(data);
    } catch (error) {
      response
        .status(httpStatus.BAD_REQUEST)
        .send({ message: "Failed", error: error });
    }
  };

  findOne = async (request: Request, response: Response) => {
    try {
      const data = await this.service.findOne<InsertCar>(
        _.toString(request.query.carId)
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
      const data = await this.service.update<InsertCar>({
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
      const data = await this.service.findAll<[InsertCar]>();
      response.status(httpStatus.OK).send(data);
    } catch (error) {
      response
        .status(httpStatus.BAD_REQUEST)
        .send({ message: "Failed", error: error });
    }
  };

  create = async (request: Request, response: Response) => {
    try {
      const body: InsertCar = {
        ...request.body,
        ...request.query,
      };
      const result = await this.service.insert(body);
      response.status(httpStatus.OK).send(result);
    } catch (error) {
      response
        .status(httpStatus.BAD_REQUEST)
        .send({ message: "Failed", error: error });
    }
  };
}
