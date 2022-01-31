import { Request, Response } from "express";
import { IUserService, IUserController } from "../interface/export";
export declare class UserController implements IUserController {
    service: IUserService;
    constructor(service: IUserService);
    findOne: (request: Request, response: Response) => Promise<void>;
    findAll: (request: Request, response: Response) => Promise<void>;
    insert: (request: Request, response: Response) => Promise<void>;
}
