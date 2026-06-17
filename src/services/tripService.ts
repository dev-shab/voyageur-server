import { Trip, type ITrip } from "#/models/Trip.js";
import ApiError from "#/utils/ApiError.js";

export const createTrip = async (
  title: string,
  destination: string,
  country: string,
  startDate: Date,
  endDate: Date,
  category?: string,
  budget?: number,
  status?: string,
  notes?: string,
  imageUrl?: string,
) => {
  if (!title) {
    throw new ApiError("Trip title is required", 400);
  }

  if (!destination) {
    throw new ApiError("Trip destination is required", 400);
  }

  if (!country) {
    throw new ApiError("Trip country is required", 400);
  }

  if (!startDate) {
    throw new ApiError("Trip start date is required", 400);
  }

  if (!endDate) {
    throw new ApiError("Trip end date is required", 400);
  }

  const start = new Date(startDate);
  if (!(start instanceof Date) || Number.isNaN(start.getTime())) {
    throw new ApiError("Invalid start date", 400);
  }

  const end = new Date(endDate);
  if (!(end instanceof Date) || Number.isNaN(end.getTime())) {
    throw new ApiError("Invalid end date", 400);
  }

  if (startDate > endDate) {
    throw new ApiError("Trip end date cannot be before trip start date", 400);
  }

  const tripData: ITrip = { title, destination, country, startDate, endDate };
  if (category !== undefined) tripData.category = category;
  if (budget !== undefined) tripData.budget = budget;
  if (status !== undefined) tripData.status = status;
  if (notes !== undefined) tripData.notes = notes;
  if (imageUrl !== undefined) tripData.imageUrl = imageUrl;

  const trip = await Trip.create(tripData);

  return trip;
};

export const fetchTrips = async () => {
  const trips = await Trip.find();
  return trips;
};
