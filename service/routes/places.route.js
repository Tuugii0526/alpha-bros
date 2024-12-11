import express from "express";
import {
  createPlaces,
  deletePlaces,
  getAllPlaces,
  getSelectedPlaces,
  updatePlaces,
} from "../controllers/places.Controller.js";

const placesRoute = express.Router();

placesRoute.post("/places", createPlaces);
placesRoute.get("/places", getAllPlaces);
placesRoute.put("/places/:id", updatePlaces);
placesRoute.delete("/places/:id", deletePlaces);
placesRoute.get("/selected", getSelectedPlaces);



export default placesRoute;
