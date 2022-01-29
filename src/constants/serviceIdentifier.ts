export const SERVICE_IDENTIFIER = {
  //General
  IDatabaseService: Symbol.for("IDatabaseService"),

  //User
  IUserController: Symbol.for("IUserController"),
  IUserService: Symbol.for("IUserService"),
  IUserRepo: Symbol.for("IUserRepo"),
  UserValidator: Symbol.for("UserValidator"),

  //stations
  StationValidator: Symbol.for("StationValidator"),

  IDatabaseRepo: Symbol.for("IDatabaseRepo"),
};
