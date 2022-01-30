import { injectable } from "inversify";
import Joi from "joi";

@injectable()
export class UserValidator {
  findAll = {};
  findOne = {
    query: Joi.object({
      userId: Joi.string().optional(),
    }).required(),
  };
  insert = {
    body: {
      firstName: Joi.string().optional(),
      lastName: Joi.string().optional(),
    },
  };
}
