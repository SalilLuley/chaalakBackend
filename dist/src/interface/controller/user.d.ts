import { Request, Response } from "express";
export interface IUserController {
    insert: (request: Request, response: Response) => void;
    findOne: (request: Request, response: Response) => void;
    findAll: (request: Request, response: Response) => void;
}
