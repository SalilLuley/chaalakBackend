import "reflect-metadata";
import { Container } from "inversify";
import {
  IDatabaseService,
  IDatabaseRepo,
  IUserController,
  IUserService,
  IUserRepo,
} from "../interface/export";
import { SERVICE_IDENTIFIER } from "../constants/export";
import { UserController } from "../controllers/export";
import { UserValidator } from "../validator/export";
import { FirebaseRepo, databaseRepo, UserRepo } from "../repository/export";
import { UserService } from "../services/export";

export const container = new Container({
  skipBaseClassChecks: true,
});

container
  .bind<IUserController>(SERVICE_IDENTIFIER.IUserController)
  .to(UserController);

container
  .bind<UserValidator>(SERVICE_IDENTIFIER.UserValidator)
  .to(UserValidator);

container.bind<IUserService>(SERVICE_IDENTIFIER.IUserService).to(UserService);
container.bind<IUserRepo>(SERVICE_IDENTIFIER.IUserRepo).to(UserRepo);

// container
//   .bind<IDatabaseRepo>(SERVICE_IDENTIFIER.IDatabaseRepo)
//   .to(databaseRepo)
//   .inSingletonScope();

container
  .bind<IDatabaseRepo>(SERVICE_IDENTIFIER.IDatabaseRepo)
  .to(FirebaseRepo)
  .inSingletonScope();
