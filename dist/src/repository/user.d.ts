import { IDatabaseRepo, IUserRepo } from "../interface/export";
import { InsertUser } from "../model/export";
export declare class UserRepo implements IUserRepo {
    databaseRepo: IDatabaseRepo;
    constructor(databaseRepo: IDatabaseRepo);
    insert<T>(user: InsertUser): Promise<T>;
    findOne<T>(userId: string): Promise<T>;
    findAll<T>(): Promise<T>;
}
