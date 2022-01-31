import { IDatabaseRepo, IBookingRepo } from "../interface/export";
import { CreateBooking } from "../model/export";
export declare class BookingRepo implements IBookingRepo {
    databaseRepo: IDatabaseRepo;
    constructor(databaseRepo: IDatabaseRepo);
    delete<T>(bookingId: string): Promise<T>;
    update<T>(booking: CreateBooking): Promise<T>;
    findOne<T>(bookingId: string): Promise<T>;
    findAll<T>(): Promise<T>;
    insert<T>(booking: CreateBooking): Promise<T>;
}
