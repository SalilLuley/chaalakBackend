import { AddStation } from "../../model/export";

export interface IStationService {
  delete<T>(stationId: string): Promise<T>;
  update<T>(station: AddStation): Promise<T>;
  insert<T>(station: AddStation): Promise<T>;
  findAll<T>(): Promise<T>;
  findOne<T>(stationId: string): Promise<T>;
}
