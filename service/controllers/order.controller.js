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
    res.status(500).json({ error });
  }
};

export { createOrder };
