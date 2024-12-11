import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  CategoryName: {
    type: String,
    required: true,
  },
});

export const Category = mongoose.model("Category", categorySchema);
