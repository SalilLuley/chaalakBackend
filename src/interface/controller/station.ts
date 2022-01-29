import { Request, Response } from "express";

export interface IStationController {
  delete: (request: Request, response: Response) => void;
  findOne: (request: Request, response: Response) => void;
  register: (request: Request, response: Response) => void;
  findAll: (request: Request, response: Response) => void;
  update: (request: Request, response: Response) => void;
}
