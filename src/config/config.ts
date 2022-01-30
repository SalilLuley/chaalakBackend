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
} from "../interface/export";
import { SERVICE_IDENTIFIER } from "../constants/export";
import { StationController, UserController } from "../controllers/export";
import {
  BookingValidator,
  StationValidator,
  UserValidator,
} from "../validator/export";
import {
  FirebaseRepo,
  databaseRepo,
  UserRepo,
  StationRepo,
} from "../repository/export";
import { StationService, UserService } from "../services/export";

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

// container
//   .bind<IDatabaseRepo>(SERVICE_IDENTIFIER.IDatabaseRepo)
//   .to(databaseRepo)
//   .inSingletonScope();

container
  .bind<IDatabaseRepo>(SERVICE_IDENTIFIER.IDatabaseRepo)
  .to(FirebaseRepo)
  .inSingletonScope();
