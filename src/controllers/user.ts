import { Request, Response } from "express";
import httpStatus from "http-status";
import { inject } from "inversify";
import { injectable } from "inversify/lib/annotation/injectable";
import { SERVICE_IDENTIFIER } from "../constants/export";
import { IUserService, IUserController } from "../interface/export";
import { CreateBooking } from "../model/export";

@injectable()
export class UserController implements IUserController {
  service: IUserService;
  constructor(@inject(SERVICE_IDENTIFIER.IUserService) service: IUserService) {
    this.service = service;
  }
  findOne = async (request: Request, response: Response) => {
    try {
      const result = await this.service.findOne<CreateBooking>(
        request.query.userId!.toString()
      );
      response.status(httpStatus.OK).send(result);
    } catch (error) {
      response
        .status(httpStatus.BAD_REQUEST)
        .send({ message: "Failed", error: error });
    }
  };
  findAll = async (request: Request, response: Response) => {
    try {
      const result = await this.service.findAll();
      response.status(httpStatus.OK).send(result);
    } catch (error) {
      response
        .status(httpStatus.BAD_REQUEST)
        .send({ message: "Failed", error: error });
    }
  };

  insert = async (request: Request, response: Response) => {
    try {
      const result = await this.service.insert(request.body);
      response.status(httpStatus.OK).send(result);
    } catch (error) {
      response
        .status(httpStatus.BAD_REQUEST)
        .send({ message: "Failed", error: error });
    }
  };
}
