"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StationRepo = void 0;
const inversify_1 = require("inversify");
const short_uuid_1 = __importDefault(require("short-uuid"));
const export_1 = require("../constants/export");
let StationRepo = class StationRepo {
    constructor(databaseRepo) {
        this.databaseRepo = databaseRepo;
    }
    async delete(stationId) {
        await this.databaseRepo
            .getDb()
            .collection(export_1.MetaDataFirestore.station)
            .doc(stationId)
            .update({ isDeleted: true });
        return this.findOne(stationId);
    }
    async update(station) {
        await this.databaseRepo
            .getDb()
            .collection(export_1.MetaDataFirestore.station)
            .doc(station.stationId)
            .update(station);
        return this.findOne(station.stationId);
    }
    async findOne(stationId) {
        const snapshot = await this.databaseRepo
            .getDb()
            .collection(export_1.MetaDataFirestore.station)
            .doc(stationId)
            .get();
        return snapshot.data();
    }
    async findAll() {
        const snapshot = await this.databaseRepo
            .getDb()
            .collection(export_1.MetaDataFirestore.station)
            .get();
        return snapshot.docs.map((doc) => doc.data());
    }
    insert(user) {
        const uuid = short_uuid_1.default.generate();
        return this.databaseRepo
            .getDb()
            .collection(export_1.MetaDataFirestore.station)
            .doc(uuid)
            .set({ ...user, stationId: uuid });
    }
};
StationRepo = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(export_1.SERVICE_IDENTIFIER.IDatabaseRepo))
], StationRepo);
exports.StationRepo = StationRepo;
