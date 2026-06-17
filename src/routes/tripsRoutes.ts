import { createTrip, fetchTrips } from "#/controllers/tripController.js";
import Router from "express";

const tripsRouter = Router();

tripsRouter.get("/", fetchTrips);
tripsRouter.post("/", createTrip);

export default tripsRouter;
