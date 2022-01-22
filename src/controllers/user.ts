import { Request, Response } from "express";
import httpStatus from "http-status";
import { IUserController } from "../interface/export";

export class UserController implements IUserController {
  register = (request: Request, response: Response) => {
    response.status(httpStatus.OK).send("Pong");
  };
}
