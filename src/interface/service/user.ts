import { InsertUser } from "../../model/export";

export interface IUserService {
  insert<T>(user: InsertUser): Promise<T>;
}
