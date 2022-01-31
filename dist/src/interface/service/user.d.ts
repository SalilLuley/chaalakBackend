import { InsertUser } from "../../model/export";
export interface IUserService {
    insert<T>(user: InsertUser): Promise<T>;
    findOne<T>(userId: string): Promise<T>;
    findAll<T>(): Promise<T>;
}
