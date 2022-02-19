import { injectable } from "inversify";
import Joi from "joi";

@injectable()
export class CarsValidator {
  findAll = {};

  findOne = {
    query: Joi.object({
      userId: Joi.string().optional(),
    }).required(),
  };

  insert = {
    body: {
      cars: Joi.array()
        .items({
          name: Joi.string().optional(),
          color: Joi.string().optional(),
          plateNumber: Joi.string().optional(),
        })
        .optional(),
    },
  };
}
