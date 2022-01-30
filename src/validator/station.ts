import { injectable } from "inversify";
import Joi from "joi";
import { EntityStatus } from "../utils/export";

@injectable()
export class StationValidator {
  insert = {
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
      entityStatus: Joi.number()
        .optional()
        .allow(EntityStatus.ACTIVE, EntityStatus.INACTIVE)
        .default(EntityStatus.ACTIVE),
      isDeleted: Joi.boolean().optional().default(false),
    },
  };

  findAll = {};

  delete = {
    query: Joi.object({
      stationId: Joi.string().optional(),
    }),
  };

  findOne = {
    query: Joi.object({
      stationId: Joi.string().optional(),
    }),
  };

  update = {
    query: Joi.object({
      stationId: Joi.string().optional(),
    }),
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
      entityStatus: Joi.number()
        .optional()
        .allow(EntityStatus.ACTIVE, EntityStatus.INACTIVE),
      isDeleted: Joi.boolean().optional(),
    },
  };
}
