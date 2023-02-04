import { applicationDefault, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { injectable } from "inversify/lib/annotation/injectable";
import admin from "firebase-admin";

import { IDatabaseRepo as IDatabaseRepo } from "../../interface/export";
import * as dotenv from "dotenv";
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
@injectable()
export class FirebaseRepo implements IDatabaseRepo {
  private db: FirebaseFirestore.Firestore;
  constructor() {
    initializeApp({
      credential: admin.credential.cert(
        JSON.parse(
          Buffer.from(`${process.env.GOOGLE_CREDS}`, "base64").toString("ascii")
        )
      ),
      databaseURL: process.env.DATABASE_URL,
    });
    this.db = getFirestore();
  }
  getDb(): FirebaseFirestore.Firestore {
    return this.db;
  }
}
