import { inject } from "inversify";
import { SERVICE_IDENTIFIER } from "../constants/export";
import { IUserRepo, IUserService } from "../interface/export";

export class UserService implements IUserService {
  repo: IUserRepo;
  constructor(@inject(SERVICE_IDENTIFIER.IUserRepo) repo: IUserRepo) {
    this.repo = repo;
  }

  register<T>(user: AddUser): Promise<T> {
    return this.repo.register(user);
  }
}
