import { inject, injectable } from "inversify";
import shortUuid from "short-uuid";
import { MetaDataFirestore, SERVICE_IDENTIFIER } from "../constants/export";
import { IDatabaseRepo, IStationRepo } from "../interface/export";
import { AddStation } from "../model/export";

@injectable()
export class StationRepo implements IStationRepo {
  databaseRepo: IDatabaseRepo;
  constructor(
    @inject(SERVICE_IDENTIFIER.IDatabaseRepo) databaseRepo: IDatabaseRepo
  ) {
    this.databaseRepo = databaseRepo;
  }
  async delete<T>(stationId: string): Promise<T> {
    await this.databaseRepo
      .getDb()
      .collection(MetaDataFirestore.station)
      .doc(stationId)
      .update({ isDeleted: true });
    return this.findOne(stationId);
  }

  async update<T>(station: AddStation): Promise<T> {
    await this.databaseRepo
      .getDb()
      .collection("station")
      .doc(station.stationId)
      .update(station);
    return this.findOne(station.stationId);
  }
  async findOne<T>(stationId: string): Promise<T> {
    const snapshot = await this.databaseRepo
      .getDb()
      .collection(MetaDataFirestore.station)
      .doc(stationId)
      .get();
    return snapshot.data();
  }
  async findAll<T>(): Promise<T> {
    const snapshot = await this.databaseRepo
      .getDb()
      .collection(MetaDataFirestore.station)
      .get();
    return snapshot.docs.map((doc) => doc.data());
  }
  register<T>(user: AddStation): Promise<T> {
    const uuid = shortUuid.generate();
    return this.databaseRepo
      .getDb()
      .collection(MetaDataFirestore.station)
      .doc(uuid)
      .set({ ...user, stationId: uuid });
  }
}
