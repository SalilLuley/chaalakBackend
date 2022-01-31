"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingRepo = exports.StationRepo = exports.UserRepo = exports.FirebaseRepo = exports.DatabaseRepo = void 0;
var googleCloud_repo_1 = require("./db/googleCloud.repo");
Object.defineProperty(exports, "DatabaseRepo", { enumerable: true, get: function () { return googleCloud_repo_1.DatabaseRepo; } });
var firebase_repo_1 = require("./db/firebase.repo");
Object.defineProperty(exports, "FirebaseRepo", { enumerable: true, get: function () { return firebase_repo_1.FirebaseRepo; } });
var user_1 = require("./user");
Object.defineProperty(exports, "UserRepo", { enumerable: true, get: function () { return user_1.UserRepo; } });
var station_1 = require("./station");
Object.defineProperty(exports, "StationRepo", { enumerable: true, get: function () { return station_1.StationRepo; } });
var booking_1 = require("./booking");
Object.defineProperty(exports, "BookingRepo", { enumerable: true, get: function () { return booking_1.BookingRepo; } });
