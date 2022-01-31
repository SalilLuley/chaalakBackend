import { Request, Response } from "express";
import { IStationService, IStationController } from "../interface/export";
export declare class StationController implements IStationController {
    service: IStationService;
    constructor(service: IStationService);
    delete: (request: Request, response: Response) => Promise<void>;
    findOne: (request: Request, response: Response) => Promise<void>;
    update: (request: Request, response: Response) => Promise<void>;
    findAll: (request: Request, response: Response) => Promise<void>;
    insert: (request: Request, response: Response) => Promise<void>;
}
