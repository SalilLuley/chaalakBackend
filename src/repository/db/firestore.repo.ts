import { initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { injectable } from "inversify/lib/annotation/injectable";
import { IFirestoreRepo } from "../../interface/export";

@injectable()
export class FirestoreRepo implements IFirestoreRepo {
  private db: FirebaseFirestore.Firestore;
  constructor() {
    initializeApp();
    this.db = getFirestore();
  }
  getDb() {
    return this.db;
  }
}
