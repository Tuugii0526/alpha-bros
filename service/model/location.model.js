import mongoose from "mongoose";

const locationSchema = new mongoose.Schema({
  province: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  latitude: String,
  longitude: String,
});

export const Location = mongoose.model("Location", locationSchema);
