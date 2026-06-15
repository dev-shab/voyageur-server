import express, {
  type NextFunction,
  type Response,
  type Request,
} from "express";
import mongoose from "mongoose";
import { MONGODB_CONNECTION_STRING, PORT } from "#/utils/config.js";
import { BASE_URL } from "./utils/constants.js";
import tripsRouter from "./routes/tripsRoutes.js";
import type ApiError from "./utils/ApiError.js";

const app = express();
app.use(express.json());

mongoose
  .connect(MONGODB_CONNECTION_STRING)
  .then(() => console.log("DB connection successful"));

app.use(`${BASE_URL}/trips`, tripsRouter);

app.use((err: ApiError, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
