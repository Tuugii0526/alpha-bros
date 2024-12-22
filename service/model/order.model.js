import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
  process: {
    type: String,
    enum: ["Батлагдсан", "Цуцлагдсан", "Хүлээгдэж Байна"],
    default: "Хүлээгдэж Байна",
  },
  placeId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Places",
    required: true,
  },

  orderDate: {
    type: Date,
    required: true,
  },

  people: {
    type: String,
    required: true,
  },
});

export const Order = mongoose.model("Order", orderSchema);
