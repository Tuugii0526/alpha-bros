import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import userRouter from "./routes/user.route.js";

const server = express();
const Port = 8000;
dotenv.config;
mongoose.connect(
  `mongodb+srv://Lhagvaa0102:Lhagvaa.0102@leap0102.k0ghj.mongodb.net/TEAM-Project`
);

server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.use("/api", userRouter);

server.listen(Port, () => {
  console.log(`Server started http:localhost:${Port}`);
});
