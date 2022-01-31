"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.container = void 0;
require("reflect-metadata");
const inversify_1 = require("inversify");
const export_1 = require("../constants/export");
const export_2 = require("../controllers/export");
const export_3 = require("../validator/export");
const export_4 = require("../repository/export");
const export_5 = require("../services/export");
exports.container = new inversify_1.Container({
    skipBaseClassChecks: true,
});
//User
exports.container
    .bind(export_1.SERVICE_IDENTIFIER.IUserController)
    .to(export_2.UserController);
exports.container
    .bind(export_1.SERVICE_IDENTIFIER.UserValidator)
    .to(export_3.UserValidator);
exports.container.bind(export_1.SERVICE_IDENTIFIER.IUserService).to(export_5.UserService);
exports.container.bind(export_1.SERVICE_IDENTIFIER.IUserRepo).to(export_4.UserRepo);
//Station
exports.container
    .bind(export_1.SERVICE_IDENTIFIER.IStationController)
    .to(export_2.StationController);
exports.container
    .bind(export_1.SERVICE_IDENTIFIER.StationValidator)
    .to(export_3.StationValidator);
exports.container
    .bind(export_1.SERVICE_IDENTIFIER.IStationService)
    .to(export_5.StationService);
exports.container.bind(export_1.SERVICE_IDENTIFIER.IStationRepo).to(export_4.StationRepo);
//Booking
exports.container
    .bind(export_1.SERVICE_IDENTIFIER.BookingValidator)
    .to(export_3.BookingValidator);
exports.container
    .bind(export_1.SERVICE_IDENTIFIER.IBookingController)
    .to(export_2.BookingController);
exports.container.bind(export_1.SERVICE_IDENTIFIER.IBookingRepo).to(export_4.BookingRepo);
exports.container
    .bind(export_1.SERVICE_IDENTIFIER.IBookingService)
    .to(export_5.BookingService);
// container
//   .bind<IDatabaseRepo>(SERVICE_IDENTIFIER.IDatabaseRepo)
//   .to(databaseRepo)
//   .inSingletonScope();
exports.container
    .bind(export_1.SERVICE_IDENTIFIER.IDatabaseRepo)
    .to(export_4.FirebaseRepo)
    .inSingletonScope();
