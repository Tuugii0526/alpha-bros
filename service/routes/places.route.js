import express from "express";
import {
  createPlaces,
  deletePlaces,
  getAllPlaces,
  updatePlaces,
} from "../controllers/places.Controller.js";

const placesRoute = express.Router();

placesRoute.post("/places", createPlaces);
placesRoute.get("/places", getAllPlaces);
placesRoute.put("/places/:id", updatePlaces);
placesRoute.delete("/places/:id", deletePlaces);




export default placesRoute;
