"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarsValidator = void 0;
const inversify_1 = require("inversify");
const joi_1 = __importDefault(require("joi"));
const short_uuid_1 = __importDefault(require("short-uuid"));
const export_1 = require("../utils/export");
let CarsValidator = class CarsValidator {
    constructor() {
        this.findAll = {};
        this.findOne = {
            query: joi_1.default.object({
                carDocumentId: joi_1.default.string().required(),
            }).required(),
        };
        this.update = {
            query: {
                userId: joi_1.default.string().optional(),
                carDocumentId: joi_1.default.string().required(),
            },
            body: {
                cars: joi_1.default.array()
                    .items({
                    name: joi_1.default.string().optional(),
                    color: joi_1.default.string().optional(),
                    plateNumber: joi_1.default.string().optional(),
                    entityStatus: joi_1.default.number()
                        .optional()
                        .allow(export_1.EntityStatus.ACTIVE, export_1.EntityStatus.INACTIVE)
                        .default(export_1.EntityStatus.ACTIVE),
                    isDeleted: joi_1.default.boolean().optional(),
                    carId: joi_1.default.string().required(),
                })
                    .optional(),
            },
        };
        this.insert = {
            body: {
                cars: joi_1.default.array()
                    .items({
                    name: joi_1.default.string().optional(),
                    color: joi_1.default.string().optional(),
                    plateNumber: joi_1.default.string().optional(),
                })
                    .optional(),
            },
        };
        this.delete = {
            query: joi_1.default.object({
                carId: joi_1.default.string().required(),
                carDocumentId: joi_1.default.string().required(),
            }),
        };
        this.create = {
            query: {
                userId: joi_1.default.string().optional(),
            },
            body: {
                cars: joi_1.default.array()
                    .items({
                    name: joi_1.default.string().optional(),
                    color: joi_1.default.string().optional(),
                    plateNumber: joi_1.default.string().optional(),
                    entityStatus: joi_1.default.number()
                        .optional()
                        .allow(export_1.EntityStatus.ACTIVE, export_1.EntityStatus.INACTIVE)
                        .default(export_1.EntityStatus.ACTIVE),
                    isDeleted: joi_1.default.boolean().optional().default(false),
                    carId: joi_1.default.string().default(short_uuid_1.default.generate()),
                })
                    .optional(),
            },
        };
    }
};
CarsValidator = __decorate([
    (0, inversify_1.injectable)()
], CarsValidator);
exports.CarsValidator = CarsValidator;
