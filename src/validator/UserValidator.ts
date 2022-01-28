import { injectable } from "inversify";
import Joi from "joi";

@injectable()
export class UserValidator {
  register = {
    body: {
      first: Joi.string().optional(),
      last: Joi.string().optional(),
      // born: Joi.string().optional(),
    },
  };
}
