import { AddStation } from "../../model/export";

export interface IStationRepo {
  delete<T>(stationId: string): Promise<T>;
  findOne<T>(stationId: string): Promise<T>;
  register<T>(station: AddStation): Promise<T>;
  findAll<T>(): Promise<T>;
  update<T>(station: AddStation): Promise<T>;
}
