import { inject, injectable } from "inversify";
import { SERVICE_IDENTIFIER } from "../constants/export";
import { IStationRepo, IStationService } from "../interface/export";
import { AddStation } from "../model/export";

@injectable()
export class StationService implements IStationService {
  repo: IStationRepo;
  constructor(@inject(SERVICE_IDENTIFIER.IStationRepo) repo: IStationRepo) {
    this.repo = repo;
  }
  findAll<T>(): Promise<T> {
    return this.repo.findAll<T>();
  }

  register<T>(user: AddStation): Promise<T> {
    return this.repo.register<T>(user);
  }
}