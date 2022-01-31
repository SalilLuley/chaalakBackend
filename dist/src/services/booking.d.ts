import { IBookingRepo, IBookingService } from "../interface/export";
import { CreateBooking } from "../model/export";
export declare class BookingService implements IBookingService {
    repo: IBookingRepo;
    constructor(repo: IBookingRepo);
    delete<T>(stationId: string): Promise<T>;
    update<T>(station: CreateBooking): Promise<T>;
    findOne<T>(stationId: string): Promise<T>;
    findAll<T>(): Promise<T>;
    insert<T>(user: CreateBooking): Promise<T>;
}
