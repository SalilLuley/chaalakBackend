import { InsertCar } from "../../model/export";

export interface ICarsService {
  delete<T>(carId: string): Promise<T>;
  update<T>(cars: InsertCar): Promise<T>;
  insert<T>(cars: InsertCar): Promise<T>;
  findAll<T>(): Promise<T>;
  findOne<T>(carId: string): Promise<T>;
}
