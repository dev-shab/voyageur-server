import express from "express";
import { PORT } from "./utils/config.js";

const app = express();

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
