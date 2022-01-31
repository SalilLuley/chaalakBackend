import { Request, Response } from "express";

export interface IStationController {
  delete: (request: Request, response: Response) => void;
  findOne: (request: Request, response: Response) => void;
  insert: (request: Request, response: Response) => void;
  findAll: (request: Request, response: Response) => void;
  update: (request: Request, response: Response) => void;
}
