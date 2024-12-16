import express from "express";
import { createOrder } from "../controllers/order.controller.js";

const OrderRouter = express.Router();

OrderRouter.post("/order", createOrder);

export default OrderRouter;
