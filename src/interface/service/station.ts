import { AddStation } from "../../model/export";

export interface IStationService {
  register<T>(station: AddStation): Promise<T>;
  findAll<T>(): Promise<T>;
}
