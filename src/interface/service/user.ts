import { AddUser } from "../../model/export";

export interface IUserService {
  register<T>(user: AddUser): Promise<T>;
}
