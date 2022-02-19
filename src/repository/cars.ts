import { inject, injectable } from "inversify";
import shortUuid from "short-uuid";
import { MetaDataFirestore, SERVICE_IDENTIFIER } from "../constants/export";
import { IDatabaseRepo, ICarsRepo } from "../interface/export";
import { InsertCar } from "../model/export";

@injectable()
export class CarRepo implements ICarsRepo {
  databaseRepo: IDatabaseRepo;

  constructor(
    @inject(SERVICE_IDENTIFIER.IDatabaseRepo) databaseRepo: IDatabaseRepo
  ) {
    this.databaseRepo = databaseRepo;
  }

  async delete<T>(carId: string): Promise<T> {
    await this.databaseRepo
      .getDb()
      .collection(MetaDataFirestore.cars)
      .doc(carId)
      .update({ isDeleted: true });
    return this.findOne(carId);
  }

  async update<T>(car: InsertCar): Promise<T> {
    await this.databaseRepo
      .getDb()
      .collection(MetaDataFirestore.cars)
      .doc(car.carId)
      .update(car);
    return this.findOne(car.carId);
  }
  async findOne<T>(carId: string): Promise<T> {
    const snapshot = await this.databaseRepo
      .getDb()
      .collection(MetaDataFirestore.cars)
      .doc(carId)
      .get();
    return snapshot.data();
  }

  async findAll<T>(): Promise<T> {
    const snapshot = await this.databaseRepo
      .getDb()
      .collection(MetaDataFirestore.cars)
      .get();
    return snapshot.docs.map((doc) => doc.data());
  }

  async insert<T>(car: InsertCar): Promise<T> {
    const uuid = shortUuid.generate();
    await this.databaseRepo
      .getDb()
      .collection(MetaDataFirestore.cars)
      .doc(uuid)
      .set({ ...car, carId: uuid });
    return this.findOne(uuid);
  }
}
