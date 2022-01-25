import express, { Request, Response, Application } from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import httpStatus from "http-status";
import { routes } from "./routes/export";
const app: Application = express();

const PORT = process.env.PORT || 3000;

// const storage = new Storage();
// // Makes an authenticated API request.
// async function listBuckets() {
//   try {
//     const results = await storage.getBuckets();

//     const [buckets] = results;

//     console.log("Buckets:");
//     buckets.forEach((bucket) => {
//       console.log(bucket.name);
//     });
//   } catch (err) {
//     console.error("ERROR:", err);
//   }
// }
// listBuckets();

app.use(helmet());
app.use(cors());

app.use(express.json({ limit: "50mb" }));

app.use(routes);

app.get("/ping", (req: Request, res: Response) => {
  res.status(httpStatus.OK).send("Pong!");
});

app.listen(PORT, (): void => {
  console.log(`Server Running here 👉 https://localhost:${PORT}`);
});

/**
 * Reference - https://www.section.io/engineering-education/how-to-use-typescript-with-nodejs/
 */
