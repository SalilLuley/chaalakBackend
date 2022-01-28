import { Request, Response } from "express";
import { getFirestore } from "firebase-admin/firestore";
import httpStatus from "http-status";
import { inject } from "inversify";
import { injectable } from "inversify/lib/annotation/injectable";
import { SERVICE_IDENTIFIER } from "../constants/export";
import { IDatabaseRepo, IUserController } from "../interface/export";
import * as shortUuid from "short-uuid";

@injectable()
export class UserController implements IUserController {
  firestoreRepo: IDatabaseRepo;
  constructor(
    @inject(SERVICE_IDENTIFIER.IDatabaseRepo) firestoreRepo: IDatabaseRepo
  ) {
    this.firestoreRepo = firestoreRepo;
  }

  register = async (request: Request, response: Response) => {
    try {
      const uuid = shortUuid.generate();
      const docRef = this.firestoreRepo.getDb().collection("users").doc(uuid);
      await docRef.set(request.body);
      response.status(httpStatus.OK).send({ message: "Added item" });
    } catch (error) {
      response
        .status(httpStatus.BAD_REQUEST)
        .send({ message: "Failed to add item" });
    }
  };
}
