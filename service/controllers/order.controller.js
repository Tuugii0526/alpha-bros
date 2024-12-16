import { Order } from "../model/order.model.js";

const createOrder = async (req, res) => {
  try {
    const { orderDate, orderNumber, orderDetail } = req.body;
    const PlacesId = req.params["id"];
    const result = await Order.create({
      orderNumber,
      placesId: PlacesId,
      orderDate,
      orderDetail,
    });
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export { createOrder };
