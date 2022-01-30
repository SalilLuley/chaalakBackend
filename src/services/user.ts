import { inject, injectable } from "inversify";
import { SERVICE_IDENTIFIER } from "../constants/export";
import { IUserRepo, IUserService } from "../interface/export";
import { InsertUser } from "../model/export";

@injectable()
export class UserService implements IUserService {
  repo: IUserRepo;
  constructor(@inject(SERVICE_IDENTIFIER.IUserRepo) repo: IUserRepo) {
    this.repo = repo;
  }

  insert<T>(user: InsertUser): Promise<T> {
    return this.repo.insert(user);
  }
}
