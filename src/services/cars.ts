import { inject, injectable } from "inversify";
import { SERVICE_IDENTIFIER } from "../constants/export";
import { ICarsRepo, ICarsService } from "../interface/export";
import { InsertCar } from "../model/export";

@injectable()
export class CarsService implements ICarsService {
  repo: ICarsRepo;
  constructor(@inject(SERVICE_IDENTIFIER.ICarsRepo) repo: ICarsRepo) {
    this.repo = repo;
  }
  delete<T>(carId: string): Promise<T> {
    return this.repo.delete(carId);
  }
  update<T>(car: InsertCar): Promise<T> {
    return this.repo.update(car);
  }
  findOne<T>(carId: string): Promise<T> {
    return this.repo.findOne(carId);
  }

  findAll<T>(): Promise<T> {
    return this.repo.findAll<T>();
  }

  insert<T>(car: InsertCar): Promise<T> {
    return this.repo.insert<T>(car);
  }
}
