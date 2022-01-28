export interface IUserService {
  register<T>(user: AddUser): Promise<T>;
}
