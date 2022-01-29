import { Request, Response } from "express";

export interface IStationController {
  register: (request: Request, response: Response) => void;
  findAll: (request: Request, response: Response) => void;
}
