import "reflect-metadata";
import { Container } from "inversify";
import { IDataStoreContract, IUserController } from "../interface/export";
import { SERVICE_IDENTIFIER } from "../constants/export";
import { UserController } from "../controllers/export";
import { UserValidator } from "../validator/export";

export const container = new Container({
  skipBaseClassChecks: true,
});

container
  .bind<IUserController>(SERVICE_IDENTIFIER.IUserController)
  .to(UserController);

container
  .bind<UserValidator>(SERVICE_IDENTIFIER.UserValidator)
  .to(UserValidator);
