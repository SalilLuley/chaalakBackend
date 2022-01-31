import Joi from "joi";
export declare class StationValidator {
    insert: {
        body: {
            location: Joi.ObjectSchema<any>;
            name: Joi.StringSchema;
            description: Joi.StringSchema;
            slotPrefix: Joi.StringSchema;
            slots: Joi.NumberSchema;
            slotsAvailable: Joi.NumberSchema;
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
            location: Joi.ObjectSchema<any>;
            name: Joi.StringSchema;
            description: Joi.StringSchema;
            slotPrefix: Joi.StringSchema;
            slots: Joi.NumberSchema;
            slotsAvailable: Joi.NumberSchema;
            entityStatus: Joi.NumberSchema;
            isDeleted: Joi.BooleanSchema;
        };
    };
}
