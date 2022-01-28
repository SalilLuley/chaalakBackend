import { inject, injectable } from "inversify";
import shortUuid from "short-uuid";
import { SERVICE_IDENTIFIER } from "../constants/export";
import { IDatabaseRepo, IUserRepo } from "../interface/export";
import { AddUser } from "../model/export";

@injectable()
export class UserRepo implements IUserRepo {
  databaseRepo: IDatabaseRepo;
  constructor(
    @inject(SERVICE_IDENTIFIER.IDatabaseRepo) databaseRepo: IDatabaseRepo
  ) {
    this.databaseRepo = databaseRepo;
  }
  register<T>(user: AddUser): Promise<T> {
    const uuid = shortUuid.generate();
    return this.databaseRepo.getDb().collection("users").doc(uuid).set(user);
  }
}
