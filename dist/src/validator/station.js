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
exports.StationValidator = void 0;
const inversify_1 = require("inversify");
const joi_1 = __importDefault(require("joi"));
const export_1 = require("../utils/export");
let StationValidator = class StationValidator {
    constructor() {
        this.insert = {
            body: {
                location: joi_1.default.object({
                    latitude: joi_1.default.number().optional(),
                    longitude: joi_1.default.number().optional(),
                }).optional(),
                name: joi_1.default.string().optional(),
                description: joi_1.default.string().optional(),
                slotPrefix: joi_1.default.string().optional(),
                slots: joi_1.default.number().optional(),
                slotsAvailable: joi_1.default.number().optional(),
                entityStatus: joi_1.default.number()
                    .optional()
                    .allow(export_1.EntityStatus.ACTIVE, export_1.EntityStatus.INACTIVE)
                    .default(export_1.EntityStatus.ACTIVE),
                isDeleted: joi_1.default.boolean().optional().default(false),
            },
        };
        this.findAll = {};
        this.delete = {
            query: joi_1.default.object({
                stationId: joi_1.default.string().optional(),
            }),
        };
        this.findOne = {
            query: joi_1.default.object({
                stationId: joi_1.default.string().optional(),
            }),
        };
        this.update = {
            query: joi_1.default.object({
                stationId: joi_1.default.string().optional(),
            }),
            body: {
                location: joi_1.default.object({
                    latitude: joi_1.default.number().optional(),
                    longitude: joi_1.default.number().optional(),
                }).optional(),
                name: joi_1.default.string().optional(),
                description: joi_1.default.string().optional(),
                slotPrefix: joi_1.default.string().optional(),
                slots: joi_1.default.number().optional(),
                slotsAvailable: joi_1.default.number().optional(),
                entityStatus: joi_1.default.number()
                    .optional()
                    .allow(export_1.EntityStatus.ACTIVE, export_1.EntityStatus.INACTIVE),
                isDeleted: joi_1.default.boolean().optional(),
            },
        };
    }
};
StationValidator = __decorate([
    (0, inversify_1.injectable)()
], StationValidator);
exports.StationValidator = StationValidator;
