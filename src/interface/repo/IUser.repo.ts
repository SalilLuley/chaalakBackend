export interface IUserRepo {
  register<T>(user: AddUser): Promise<T>;
}
