import { InsertCar } from "../../model/export";

export interface ICarsService {
  delete<T>(stationId: string): Promise<T>;
  update<T>(station: InsertCar): Promise<T>;
  insert<T>(station: InsertCar): Promise<T>;
  findAll<T>(): Promise<T>;
  findOne<T>(stationId: string): Promise<T>;
}
