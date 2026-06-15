import { Schema, model } from "mongoose";

const tripSchema = new Schema({
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

export const Trip = model("Trip", tripSchema);
