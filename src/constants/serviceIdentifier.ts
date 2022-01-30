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
  IStationRepo: Symbol.for("IStationRepo"),
  IStationService: Symbol.for("IStationService"),
  IStationController: Symbol.for("IStationController"),

  //Booking
  BookingValidator: Symbol.for("BookingValidator"),
  IBookingController: Symbol.for("IBookingController"),
  IBookingRepo: Symbol.for("IBookingRepo"),
  IBookingService: Symbol.for("IBookingService"),

  IDatabaseRepo: Symbol.for("IDatabaseRepo"),
};
