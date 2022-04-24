import { injectable } from "inversify";
import Joi from "joi";
import shortUuid from "short-uuid";
import { EntityStatus } from "../utils/export";

@injectable()
export class CarsValidator {
  findAll = {};

  findOne = {
    query: Joi.object({
      carDocumentId: Joi.string().required(),
    }).required(),
  };

  update = {
    query: {
      userId: Joi.string().optional(),
      carDocumentId: Joi.string().required(),
    },
    body: {
      cars: Joi.array()
        .items({
          name: Joi.string().optional(),
          color: Joi.string().optional(),
          plateNumber: Joi.string().optional(),
          entityStatus: Joi.number()
            .optional()
            .allow(EntityStatus.ACTIVE, EntityStatus.INACTIVE)
            .default(EntityStatus.ACTIVE),
          isDeleted: Joi.boolean().optional(),
          carId: Joi.string().required(),
        })
        .optional(),
    },
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

  delete = {
    query: Joi.object({
      carId: Joi.string().required(),
      carDocumentId: Joi.string().required(),
    }),
  };

  create = {
    query: {
      userId: Joi.string().optional(),
    },
    body: {
      cars: Joi.array()
        .items({
          name: Joi.string().optional(),
          color: Joi.string().optional(),
          plateNumber: Joi.string().optional(),
          entityStatus: Joi.number()
            .optional()
            .allow(EntityStatus.ACTIVE, EntityStatus.INACTIVE)
            .default(EntityStatus.ACTIVE),
          isDeleted: Joi.boolean().optional().default(false),
          carId: Joi.string().default(shortUuid.generate()),
        })
        .optional(),
    },
  };
}
