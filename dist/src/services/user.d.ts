import { IUserRepo, IUserService } from "../interface/export";
import { InsertUser } from "../model/export";
export declare class UserService implements IUserService {
    repo: IUserRepo;
    constructor(repo: IUserRepo);
    findOne<T>(userId: string): Promise<T>;
    findAll<T>(): Promise<T>;
    insert<T>(user: InsertUser): Promise<T>;
}
