import express from "express";
import {
  addLocation,
  deleteLocation,
  getAllLocation,
  updateLocation,
} from "../controllers/location.Controller.js";

const locationRouter = express.Router();

locationRouter.post("/location", addLocation);
locationRouter.get("/location", getAllLocation);
locationRouter.put("/location/:id", updateLocation);
locationRouter.delete("/location/:id", deleteLocation);
export default locationRouter;
