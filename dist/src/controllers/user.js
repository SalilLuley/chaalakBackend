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
exports.UserController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const inversify_1 = require("inversify");
const injectable_1 = require("inversify/lib/annotation/injectable");
const export_1 = require("../constants/export");
let UserController = class UserController {
    constructor(service) {
        this.findOne = async (request, response) => {
            try {
                const result = await this.service.findOne(request.query.userId.toString());
                response.status(http_status_1.default.OK).send(result);
            }
            catch (error) {
                response
                    .status(http_status_1.default.BAD_REQUEST)
                    .send({ message: "Failed", error: error });
            }
        };
        this.findAll = async (request, response) => {
            try {
                const result = await this.service.findAll();
                response.status(http_status_1.default.OK).send(result);
            }
            catch (error) {
                response
                    .status(http_status_1.default.BAD_REQUEST)
                    .send({ message: "Failed", error: error });
            }
        };
        this.insert = async (request, response) => {
            try {
                const result = await this.service.insert(request.body);
                response.status(http_status_1.default.OK).send(result);
            }
            catch (error) {
                response
                    .status(http_status_1.default.BAD_REQUEST)
                    .send({ message: "Failed", error: error });
            }
        };
        this.service = service;
    }
};
UserController = __decorate([
    (0, injectable_1.injectable)(),
    __param(0, (0, inversify_1.inject)(export_1.SERVICE_IDENTIFIER.IUserService))
], UserController);
exports.UserController = UserController;
