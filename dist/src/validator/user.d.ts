import Joi from "joi";
export declare class UserValidator {
    findAll: {};
    findOne: {
        query: Joi.ObjectSchema<any>;
    };
    insert: {
        body: {
            firstName: Joi.StringSchema;
            lastName: Joi.StringSchema;
        };
    };
}
