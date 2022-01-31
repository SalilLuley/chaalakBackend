import { Request, Response } from "express";
export interface IBookingController {
    delete: (request: Request, response: Response) => void;
    findOne: (request: Request, response: Response) => void;
    create: (request: Request, response: Response) => void;
    findAll: (request: Request, response: Response) => void;
    update: (request: Request, response: Response) => void;
}
