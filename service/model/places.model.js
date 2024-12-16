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
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  phoneNumber: {
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
    weekdays: {
      open: {
        type: String,
        required: true,
      },
      close: {
        type: String,
        required: true,
      },
    },
    weekend: {
      open: {
        type: String,
        required: true,
      },
      close: {
        type: String,
        required: true,
      },
      closedDay: {
        type: String,
        required: true,
      },
    },
  },
});

export const Places = mongoose.model("Places", placesSchema);
