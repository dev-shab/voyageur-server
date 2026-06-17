import type { NextFunction, Request, Response } from "express";
import * as tripService from "#/services/tripService.js";

export const createTrip = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const {
      title,
      destination,
      country,
      startDate,
      endDate,
      category,
      budget,
      status,
      notes,
      imageUrl,
    } = req.body;

    const trip = await tripService.createTrip(
      title,
      destination,
      country,
      startDate,
      endDate,
      category,
      budget,
      status,
      notes,
      imageUrl,
    );

    res.status(201).json({
      success: true,
      message: "Trip created successfully",
      data: trip,
    });
  } catch (error) {
    next(error);
  }
};

export const fetchTrips = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const trips = await tripService.fetchTrips();
    res.status(200).json({
      success: true,
      message: "Trips fetched successfully",
      data: trips,
    });
  } catch (error) {
    next(error);
  }
};
