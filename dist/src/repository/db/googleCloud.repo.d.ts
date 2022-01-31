import { IDatabaseRepo as IDatabaseRepo } from "../../interface/export";
export declare class DatabaseRepo implements IDatabaseRepo {
    private db;
    constructor();
    getDb(): FirebaseFirestore.Firestore;
}
