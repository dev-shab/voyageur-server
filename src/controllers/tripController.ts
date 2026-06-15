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
