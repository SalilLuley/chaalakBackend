import { InsertStation } from "../../model/export";

export interface IBookingService {
  delete<T>(stationId: string): Promise<T>;
  update<T>(station: InsertStation): Promise<T>;
  insert<T>(station: InsertStation): Promise<T>;
  findAll<T>(): Promise<T>;
  findOne<T>(stationId: string): Promise<T>;
}
