import { Container } from "inversify";
import { IDataStoreContract, IUserController } from "../interface/export";
import { SERVICE_IDENTIFIER } from "../constants/export";
import { UserController } from "../controllers/export";

export const container = new Container({
  skipBaseClassChecks: true,
});

container
  .bind<IUserController>(SERVICE_IDENTIFIER.IUserController)
  .to(UserController);
