import { Order } from "../model/order.model.js";
import { User } from "../model/user.model.js";

const createOrder = async (req, res) => {
  try {
    const { clerkId, stringDate, people, placeId } = req.body;
    const user = await User.findOne({ clerk_id: clerkId });
    if (!user) {
      return res.status(404);
    }
    const id = user._id;
    const result = await Order.create({
      userId: id,
      placeId: placeId,
      orderDate: new Date(stringDate),
      people: people,
    });
    if (result) {
      return res.status(201).json();
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getSelectedUsersOrder = async (req, res) => {
  try {
    const { userId } = req.body;
    const SearchId = userId;
    const result = await Order.find({ SearchId });
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllOrder = async (req, res) => {
  try {
    const result = await Order.find();
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export { createOrder, getAllOrder, getSelectedUsersOrder };
