import "reflect-metadata";
import { Container } from "inversify";
import {
  IDatabaseService,
  IDatabaseRepo,
  IUserController,
  IUserService,
  IUserRepo,
  IStationRepo,
  IStationService,
  IStationController,
  IBookingController,
  IBookingRepo,
  IBookingService,
  ICarsService,
  ICarsRepo,
  ICarsController,
} from "../interface/export";
import { SERVICE_IDENTIFIER } from "../constants/export";
import {
  BookingController,
  CarsController,
  StationController,
  UserController,
} from "../controllers/export";
import {
  BookingValidator,
  CarsValidator,
  StationValidator,
  UserValidator,
} from "../validator/export";
import {
  FirebaseRepo,
  DatabaseRepo,
  UserRepo,
  StationRepo,
  BookingRepo,
  CarRepo,
} from "../repository/export";
import {
  BookingService,
  CarsService,
  StationService,
  UserService,
} from "../services/export";

export const container = new Container({
  skipBaseClassChecks: true,
});

//User
container
  .bind<IUserController>(SERVICE_IDENTIFIER.IUserController)
  .to(UserController);
container
  .bind<UserValidator>(SERVICE_IDENTIFIER.UserValidator)
  .to(UserValidator);
container.bind<IUserService>(SERVICE_IDENTIFIER.IUserService).to(UserService);
container.bind<IUserRepo>(SERVICE_IDENTIFIER.IUserRepo).to(UserRepo);

//Station
container
  .bind<IStationController>(SERVICE_IDENTIFIER.IStationController)
  .to(StationController);
container
  .bind<StationValidator>(SERVICE_IDENTIFIER.StationValidator)
  .to(StationValidator);
container
  .bind<IStationService>(SERVICE_IDENTIFIER.IStationService)
  .to(StationService);
container.bind<IStationRepo>(SERVICE_IDENTIFIER.IStationRepo).to(StationRepo);

//Booking
container
  .bind<BookingValidator>(SERVICE_IDENTIFIER.BookingValidator)
  .to(BookingValidator);
container
  .bind<IBookingController>(SERVICE_IDENTIFIER.IBookingController)
  .to(BookingController);
container.bind<IBookingRepo>(SERVICE_IDENTIFIER.IBookingRepo).to(BookingRepo);
container
  .bind<IBookingService>(SERVICE_IDENTIFIER.IBookingService)
  .to(BookingService);

//Cars
container
  .bind<CarsValidator>(SERVICE_IDENTIFIER.CarsValidator)
  .to(CarsValidator);
container.bind<ICarsService>(SERVICE_IDENTIFIER.ICarsService).to(CarsService);
container.bind<ICarsRepo>(SERVICE_IDENTIFIER.ICarsRepo).to(CarRepo);
container
  .bind<ICarsController>(SERVICE_IDENTIFIER.ICarsController)
  .to(CarsController);

// container
//   .bind<IDatabaseRepo>(SERVICE_IDENTIFIER.IDatabaseRepo)
//   .to(databaseRepo)
//   .inSingletonScope();

container
  .bind<IDatabaseRepo>(SERVICE_IDENTIFIER.IDatabaseRepo)
  .to(FirebaseRepo)
  .inSingletonScope();
