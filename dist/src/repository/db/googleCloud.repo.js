"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseRepo = void 0;
const app_1 = require("firebase-admin/app");
const firestore_1 = require("firebase-admin/firestore");
const injectable_1 = require("inversify/lib/annotation/injectable");
let DatabaseRepo = class DatabaseRepo {
    constructor() {
        (0, app_1.initializeApp)();
        this.db = (0, firestore_1.getFirestore)();
    }
    getDb() {
        return this.db;
    }
};
DatabaseRepo = __decorate([
    (0, injectable_1.injectable)()
], DatabaseRepo);
exports.DatabaseRepo = DatabaseRepo;
