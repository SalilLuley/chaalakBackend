import { applicationDefault, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { injectable } from "inversify/lib/annotation/injectable";
import { IDatabaseRepo as IDatabaseRepo } from "../../interface/export";
import * as dotenv from "dotenv";
dotenv.config();

@injectable()
export class FirebaseRepo implements IDatabaseRepo {
  private db: FirebaseFirestore.Firestore;
  constructor() {
    initializeApp({
      credential: applicationDefault(),
      databaseURL: process.env.DATABASE_URL,
    });
    this.db = getFirestore();
  }
  getDb() {
    return this.db;
  }
}
