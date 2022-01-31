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
  async insert<T>(user: InsertUser): Promise<T> {
    const uuid = shortUuid.generate();
    await this.databaseRepo
      .getDb()
      .collection(MetaDataFirestore.users)
      .doc(uuid)
      .set({ ...user, userId: uuid });
    return this.findOne(uuid);
  }
  async findOne<T>(userId: string): Promise<T> {
    const snapshot = await this.databaseRepo
      .getDb()
      .collection(MetaDataFirestore.users)
      .doc(userId)
      .get();
    return snapshot.data();
  }
  async findAll<T>(): Promise<T> {
    const snapshot = await this.databaseRepo
      .getDb()
      .collection(MetaDataFirestore.users)
      .get();
    return snapshot.docs.map((doc) => doc.data());
  }
}
