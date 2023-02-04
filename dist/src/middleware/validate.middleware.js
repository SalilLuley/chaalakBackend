"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const joi_1 = __importDefault(require("joi"));
const http_status_1 = __importDefault(require("http-status"));
const export_1 = require("../utils/export");
const validate = (schema) => (req, res, next) => {
    const validSchema = (0, export_1.pick)(schema, ['params', 'query', 'body', 'file']);
    const object = (0, export_1.pick)(req, Object.keys(validSchema));
    const { value, error } = joi_1.default.compile(validSchema)
        .prefs({ errors: { label: 'key' } })
        .validate(object);
    if (error) {
        const errorMessage = error.details.map((details) => details.message).join(', ');
        return next(new export_1.ApiError(http_status_1.default.BAD_REQUEST, errorMessage));
    }
    Object.assign(req, value);
    return next();
};
exports.validate = validate;
