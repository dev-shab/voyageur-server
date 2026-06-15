import express from "express";
import mongoose from "mongoose";
import { MONGODB_CONNECTION_STRING, PORT } from "./utils/config.js";

const app = express();

mongoose
  .connect(MONGODB_CONNECTION_STRING)
  .then(() => console.log("DB connection successful"));

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
