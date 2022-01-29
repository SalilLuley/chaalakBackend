import { AddStation } from "../../model/export";

export interface IStationRepo {
  register<T>(station: AddStation): Promise<T>;
}
