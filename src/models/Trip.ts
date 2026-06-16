import { Schema, model } from "mongoose";

export interface ITrip {
  title: string;
  destination: string;
  country: string;
  startDate: Date;
  endDate: Date;
  category?: string;
  budget?: number;
  status?: string;
  notes?: string;
}

const tripSchema = new Schema<ITrip>({
  title: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  category: {
    type: String,
    default: "LEISURE",
  },
  budget: {
    type: Number,
  },
  status: {
    type: String,
    default: "DRAFT",
  },
  notes: {
    type: String,
  },
});

export const Trip = model<ITrip>("Trip", tripSchema);
