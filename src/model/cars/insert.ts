import { EntityStatus } from "../../utils/export";

export interface Car {
  isDeleted: boolean;
  color: string;
  entityStatus: EntityStatus;
  name: string;
  carId: string;
  plateNumber: string;
}

export interface InsertCar {
  userId: string;
  cars: Car[];
  carDocumentId: string;
}
