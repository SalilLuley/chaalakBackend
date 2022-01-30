import { InsertUser } from "../../model/export";

export interface IUserRepo {
  insert<T>(user: InsertUser): Promise<T>;
}
