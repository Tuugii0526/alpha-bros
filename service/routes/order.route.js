import express from "express";
import {
  createOrder,
  getAllOrder,
  getSelectedUsersOrder,
} from "../controllers/order.controller.js";

const OrderRouter = express.Router();

OrderRouter.post("/order", createOrder);
OrderRouter.get("/order", getAllOrder);
OrderRouter.get("/userorder/:id", getSelectedUsersOrder);
export default OrderRouter;
