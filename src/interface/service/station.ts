import { AddStation } from "../../model/export";

export interface IStationService {
  update<T>(station: AddStation): Promise<T>;
  register<T>(station: AddStation): Promise<T>;
  findAll<T>(): Promise<T>;
  findOne<T>(stationId: string): Promise<T>;
}
