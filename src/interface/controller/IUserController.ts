import { Request, Response } from "express";

export interface IUserController {
  register: (request: Request, response: Response) => void;
}
