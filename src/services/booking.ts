import { inject, injectable } from "inversify";
import { SERVICE_IDENTIFIER } from "../constants/export";
import { IBookingRepo, IBookingService } from "../interface/export";
import { InsertStation } from "../model/export";

@injectable()
export class BookingService implements IBookingService {
  repo: IBookingRepo;
  constructor(@inject(SERVICE_IDENTIFIER.IBookingRepo) repo: IBookingRepo) {
    this.repo = repo;
  }
  delete<T>(stationId: string): Promise<T> {
    return this.repo.delete(stationId);
  }
  update<T>(station: InsertStation): Promise<T> {
    return this.repo.update(station);
  }
  findOne<T>(stationId: string): Promise<T> {
    return this.repo.findOne(stationId);
  }

  findAll<T>(): Promise<T> {
    return this.repo.findAll<T>();
  }

  insert<T>(user: InsertStation): Promise<T> {
    return this.repo.insert<T>(user);
  }
}
