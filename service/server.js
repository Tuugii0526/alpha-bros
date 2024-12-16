import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import userRouter from "./routes/user.route.js";
import placesRoute from "./routes/places.route.js";
import categoryRouter from "./routes/category.route.js";
import locationRouter from "./routes/location.route.js";
import cloudinary from "cloudinary";
import OrderRouter from "./routes/order.route.js";

const server = express();
const Port = 8000;
dotenv.config;
mongoose.connect(
  `mongodb+srv://Lhagvaa0102:Lhagvaa.0102@leap0102.k0ghj.mongodb.net/TEAM-Project`
);

cloudinary.config({
  cloud_name: "dl5irqaz6",
  api_key: "434461591186227",
  api_secret: "aGk_UYX9uk6E2zgNu7W6rCxjpqs",
});

server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.use("/api", locationRouter);
server.use("/api", categoryRouter);
server.use("/api", userRouter);
server.use("/api", placesRoute);
server.use("/api", OrderRouter);

server.listen(Port, () => {
  console.log(`Server started http://localhost:${Port}`);
});
