import Joi from "joi";
export declare class BookingValidator {
    create: {
        body: {
            stationId: Joi.StringSchema;
            userId: Joi.StringSchema;
            description: Joi.StringSchema;
            slotPrefix: Joi.StringSchema;
            slot: Joi.NumberSchema;
            entityStatus: Joi.NumberSchema;
            isDeleted: Joi.BooleanSchema;
        };
    };
    findAll: {};
    delete: {
        query: Joi.ObjectSchema<any>;
    };
    findOne: {
        query: Joi.ObjectSchema<any>;
    };
    update: {
        query: Joi.ObjectSchema<any>;
        body: {
            stationId: Joi.StringSchema;
            userId: Joi.StringSchema;
            description: Joi.StringSchema;
            slotPrefix: Joi.StringSchema;
            slot: Joi.NumberSchema;
            entityStatus: Joi.NumberSchema;
            isDeleted: Joi.BooleanSchema;
        };
    };
}
