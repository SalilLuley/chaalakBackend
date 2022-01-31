import { InsertStation } from "../../model/export";
export interface IStationRepo {
    delete<T>(stationId: string): Promise<T>;
    findOne<T>(stationId: string): Promise<T>;
    insert<T>(station: InsertStation): Promise<T>;
    findAll<T>(): Promise<T>;
    update<T>(station: InsertStation): Promise<T>;
}
