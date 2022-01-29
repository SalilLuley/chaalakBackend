import { Request, Response } from "express";
import { getFirestore } from "firebase-admin/firestore";
import httpStatus from "http-status";
import { inject } from "inversify";
import { injectable } from "inversify/lib/annotation/injectable";
import { SERVICE_IDENTIFIER } from "../constants/export";
import { IUserService, IUserController } from "../interface/export";
import * as shortUuid from "short-uuid";

@injectable()
export class UserController implements IUserController {
  service: IUserService;
  constructor(@inject(SERVICE_IDENTIFIER.IUserService) service: IUserService) {
    this.service = service;
  }

  register = async (request: Request, response: Response) => {
    try {
      await this.service.register(request.body);
      response.status(httpStatus.OK).send({ message: "Added item" });
    } catch (error) {
      console.log(error);
      response.status(httpStatus.BAD_REQUEST).send({ message: "Failed" });
    }
  };
}
