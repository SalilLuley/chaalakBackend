import { injectable } from "inversify";
import Joi from "joi";

@injectable()
export class UserValidator {
  register = {
    query: Joi.object().keys({
      orgId: Joi.string().required(),
    }),
    body: {
      lastEvaluatedKey: Joi.object().optional(),
    },
  };
}
