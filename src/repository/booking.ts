import { inject, injectable } from "inversify";
import shortUuid from "short-uuid";
import { MetaDataFirestore, SERVICE_IDENTIFIER } from "../constants/export";
import { IDatabaseRepo, IBookingRepo } from "../interface/export";
import { CreateBooking } from "../model/export";

@injectable()
export class BookingRepo implements IBookingRepo {
  databaseRepo: IDatabaseRepo;
  constructor(
    @inject(SERVICE_IDENTIFIER.IDatabaseRepo) databaseRepo: IDatabaseRepo
  ) {
    this.databaseRepo = databaseRepo;
  }
  async delete<T>(stationId: string): Promise<T> {
    await this.databaseRepo
      .getDb()
      .collection(MetaDataFirestore.bookings)
      .doc(stationId)
      .update({ isDeleted: true });
    return this.findOne(stationId);
  }

  async update<T>(station: CreateBooking): Promise<T> {
    await this.databaseRepo
      .getDb()
      .collection(MetaDataFirestore.bookings)
      .doc(station.stationId)
      .update(station);
    return this.findOne(station.stationId);
  }
  async findOne<T>(stationId: string): Promise<T> {
    const snapshot = await this.databaseRepo
      .getDb()
      .collection(MetaDataFirestore.bookings)
      .doc(stationId)
      .get();
    return snapshot.data();
  }
  async findAll<T>(): Promise<T> {
    const snapshot = await this.databaseRepo
      .getDb()
      .collection(MetaDataFirestore.bookings)
      .get();
    return snapshot.docs.map((doc) => doc.data());
  }
  insert<T>(user: CreateBooking): Promise<T> {
    const uuid = shortUuid.generate();
    return this.databaseRepo
      .getDb()
      .collection(MetaDataFirestore.bookings)
      .doc(uuid)
      .set({ ...user, stationId: uuid });
  }
}
