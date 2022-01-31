import { injectable } from "inversify";
import Joi from "joi";
import { EntityStatus } from "../utils/export";

@injectable()
export class BookingValidator {
  create = {
    body: {
      stationId: Joi.string().optional(),
      userId: Joi.string().optional(),
      description: Joi.string().optional(),
      slotPrefix: Joi.string().optional(),
      slot: Joi.number().optional(),
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
      bookingId: Joi.string().optional(),
    }),
  };

  findOne = {
    query: Joi.object({
      bookingId: Joi.string().optional(),
    }),
  };

  update = {
    query: Joi.object({
      bookingId: Joi.string().optional(),
    }),
    body: {
      stationId: Joi.string().optional(),
      userId: Joi.string().optional(),
      description: Joi.string().optional(),
      slotPrefix: Joi.string().optional(),
      slot: Joi.number().optional(),
      entityStatus: Joi.number()
        .optional()
        .allow(EntityStatus.ACTIVE, EntityStatus.INACTIVE),
      isDeleted: Joi.boolean().optional(),
    },
  };
}
