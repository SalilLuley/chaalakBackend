import { inject } from "inversify";
import shortUuid from "short-uuid";
import { SERVICE_IDENTIFIER } from "../constants/export";
import { IDatabaseRepo, IUserRepo } from "../interface/export";

export class UserRepo implements IUserRepo {
  databaseRepo: IDatabaseRepo;
  constructor(
    @inject(SERVICE_IDENTIFIER.IDatabaseRepo) databaseRepo: IDatabaseRepo
  ) {
    this.databaseRepo = databaseRepo;
  }
  register<T>(user: AddUser): Promise<T> {
    const uuid = shortUuid.generate();
    return this.databaseRepo.getDb().collection("users").doc(uuid);
  }
}
