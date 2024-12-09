import express from "express";
import {
  createPlaces,
  getAllPlaces,
} from "../controllers/places.Controller.js";

const placesRoute = express.Router();

placesRoute.post("/places", createPlaces);
placesRoute.get("/places", getAllPlaces);

export default placesRoute;
