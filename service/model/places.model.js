import mongoose from "mongoose";

const placesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Category",
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Location",
    required: true,
  },
  ambiance: String,

  workingHours: {
    monday: {
      open: {
        type: String,
        required: true,
      },
      close: { type: String, required: true },
    },
    tuesday: {
      open: {
        type: String,
        required: true,
      },
      close: { type: String, required: true },
    },
    wednesday: {
      open: {
        type: String,
        required: true,
      },
      close: { type: String, required: true },
    },
    thursday: {
      open: {
        type: String,
        required: true,
      },
      close: { type: String, required: true },
    },
    friday: {
      open: {
        type: String,
        required: true,
      },
      close: { type: String, required: true },
    },
    saturday: {
      open: {
        type: String,
        required: true,
      },
      close: { type: String, required: true },
    },
    sunday: {
      open: {
        type: String,
        required: true,
      },
      close: { type: String, required: true },
    },
  },
});




export const Places = mongoose.model("Places", placesSchema);
