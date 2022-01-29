import { injectable } from "inversify";
import Joi from "joi";

@injectable()
export class StationValidator {
  register = {
    body: {
      location: Joi.object({
        latitude: Joi.number().optional(),
        longitude: Joi.number().optional(),
      }).optional(),
      name: Joi.string().optional(),
      description: Joi.string().optional(),
      slotPrefix: Joi.string().optional(),
      slots: Joi.number().optional(),
      slotsAvailable: Joi.number().optional(),
    },
  };
}
