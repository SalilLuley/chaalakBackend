import { inject, injectable } from "inversify";
import shortUuid from "short-uuid";
import { MetaDataFirestore, SERVICE_IDENTIFIER } from "../constants/export";
import { IDatabaseRepo, IUserRepo } from "../interface/export";
import { InsertUser } from "../model/export";

@injectable()
export class UserRepo implements IUserRepo {
  databaseRepo: IDatabaseRepo;
  constructor(
    @inject(SERVICE_IDENTIFIER.IDatabaseRepo) databaseRepo: IDatabaseRepo
  ) {
    this.databaseRepo = databaseRepo;
  }
  insert<T>(user: InsertUser): Promise<T> {
    const uuid = shortUuid.generate();
    return this.databaseRepo
      .getDb()
      .collection(MetaDataFirestore.users)
      .doc(uuid)
      .set(user);
  }
}
