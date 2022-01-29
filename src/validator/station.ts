import { injectable } from "inversify";
import Joi from "joi";

@injectable()
export class StationValidator {
  register = {
    body: {
      latitude: Joi.string().optional(),
      longitude: Joi.string().optional(),
      name: Joi.string().optional(),
      description: Joi.string().optional(),
      slotPrefix: Joi.string().optional(),
      slots: Joi.number().optional(),
      slotsAvailable: Joi.number().optional(),
    },
  };
}
