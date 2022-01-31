import { IDatabaseRepo as IDatabaseRepo } from "../../interface/export";
export declare class FirebaseRepo implements IDatabaseRepo {
    private db;
    constructor();
    getDb(): FirebaseFirestore.Firestore;
}
