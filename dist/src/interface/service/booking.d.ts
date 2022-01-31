import { CreateBooking } from "../../model/export";
export interface IBookingService {
    delete<T>(stationId: string): Promise<T>;
    update<T>(station: CreateBooking): Promise<T>;
    insert<T>(station: CreateBooking): Promise<T>;
    findAll<T>(): Promise<T>;
    findOne<T>(stationId: string): Promise<T>;
}
