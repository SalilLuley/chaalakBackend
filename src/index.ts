import express, { Request, Response, Application } from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import httpStatus from "http-status";
import { routes } from "./routes/export";
import _ from "lodash";
const app: Application = express();

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(cors());

app.use(express.json({ limit: "50mb" }));

app.use(routes);

app.get("/", (req: Request, res: Response) => {
  res.status(httpStatus.OK).send("Pong!");
});

app.listen(PORT, (): void => {
  console.log(`Server Running here 👉 https://localhost:${PORT}`);
});

/**
 * Reference
 * https://auth0.com/blog/node-js-and-typescript-tutorial-build-a-crud-api/
 */
