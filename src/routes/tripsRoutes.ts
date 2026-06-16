import { createTrip } from "#/controllers/tripController.js";
import Router from "express";

const tripsRouter = Router();

tripsRouter.post("/", createTrip);

export default tripsRouter;
