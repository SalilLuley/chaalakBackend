import { CreateBooking } from "../../model/export";

export interface IBookingRepo {
  delete<T>(stationId: string): Promise<T>;
  findOne<T>(stationId: string): Promise<T>;
  insert<T>(station: CreateBooking): Promise<T>;
  findAll<T>(): Promise<T>;
  update<T>(station: CreateBooking): Promise<T>;
}
