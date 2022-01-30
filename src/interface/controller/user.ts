import { Request, Response } from "express";

export interface IUserController {
  insert: (request: Request, response: Response) => void;
}
