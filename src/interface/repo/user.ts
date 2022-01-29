import { AddUser } from "../../model/export";

export interface IUserRepo {
  register<T>(user: AddUser): Promise<T>;
}
