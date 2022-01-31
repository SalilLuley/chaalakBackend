import { IDatabaseRepo, IStationRepo } from "../interface/export";
import { InsertStation } from "../model/export";
export declare class StationRepo implements IStationRepo {
    databaseRepo: IDatabaseRepo;
    constructor(databaseRepo: IDatabaseRepo);
    delete<T>(stationId: string): Promise<T>;
    update<T>(station: InsertStation): Promise<T>;
    findOne<T>(stationId: string): Promise<T>;
    findAll<T>(): Promise<T>;
    insert<T>(user: InsertStation): Promise<T>;
}
