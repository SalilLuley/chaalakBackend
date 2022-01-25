import { Request, Response } from "express";
import { getFirestore } from "firebase-admin/firestore";
import httpStatus from "http-status";
import { injectable } from "inversify/lib/annotation/injectable";
import { IUserController } from "../interface/export";

@injectable()
export class UserController implements IUserController {
  register = async (request: Request, response: Response) => {
    const db = getFirestore();
    const docRef = db.collection("users").doc("alovelace");
    const result = await docRef.set(request.body);
    response.status(httpStatus.OK).send({ message: "Added item" });
  };
}
