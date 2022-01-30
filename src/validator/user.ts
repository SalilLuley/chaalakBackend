import { injectable } from "inversify";
import Joi from "joi";

@injectable()
export class UserValidator {
  insert = {
    body: {
      first: Joi.string().optional(),
      last: Joi.string().optional(),
    },
  };
}
