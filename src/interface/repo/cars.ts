import { InsertCar } from "../../model/export";

export interface ICarsRepo {
  delete<T>(stationId: string): Promise<T>;
  findOne<T>(stationId: string): Promise<T>;
  insert<T>(station: InsertCar): Promise<T>;
  findAll<T>(): Promise<T>;
  update<T>(station: InsertCar): Promise<T>;
}
