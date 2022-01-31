import { IStationRepo, IStationService } from "../interface/export";
import { InsertStation } from "../model/export";
export declare class StationService implements IStationService {
    repo: IStationRepo;
    constructor(repo: IStationRepo);
    delete<T>(stationId: string): Promise<T>;
    update<T>(station: InsertStation): Promise<T>;
    findOne<T>(stationId: string): Promise<T>;
    findAll<T>(): Promise<T>;
    insert<T>(user: InsertStation): Promise<T>;
}
