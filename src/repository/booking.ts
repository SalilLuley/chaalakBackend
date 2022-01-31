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

  async delete<T>(bookingId: string): Promise<T> {
    await this.databaseRepo
      .getDb()
      .collection(MetaDataFirestore.bookings)
      .doc(bookingId)
      .update({ isDeleted: true });
    return this.findOne(bookingId);
  }

  async update<T>(booking: CreateBooking): Promise<T> {
    await this.databaseRepo
      .getDb()
      .collection(MetaDataFirestore.bookings)
      .doc(booking.bookingId)
      .update(booking);
    return this.findOne(booking.bookingId);
  }
  async findOne<T>(bookingId: string): Promise<T> {
    const snapshot = await this.databaseRepo
      .getDb()
      .collection(MetaDataFirestore.bookings)
      .doc(bookingId)
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

  async insert<T>(booking: CreateBooking): Promise<T> {
    const uuid = shortUuid.generate();
    await this.databaseRepo
      .getDb()
      .collection(MetaDataFirestore.bookings)
      .doc(uuid)
      .set({ ...booking, bookingId: uuid });
    return this.findOne(uuid);
  }
}
