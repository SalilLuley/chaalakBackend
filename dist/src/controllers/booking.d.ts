import { Request, Response } from "express";
import { IBookingService, IBookingController } from "../interface/export";
export declare class BookingController implements IBookingController {
    service: IBookingService;
    constructor(service: IBookingService);
    delete: (request: Request, response: Response) => Promise<void>;
    findOne: (request: Request, response: Response) => Promise<void>;
    update: (request: Request, response: Response) => Promise<void>;
    findAll: (request: Request, response: Response) => Promise<void>;
    create: (request: Request, response: Response) => Promise<void>;
}
