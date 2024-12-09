import express from "express";
import {
  getAllCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/category.Controller.js";
const categoryRouter = express.Router();

categoryRouter.get("/category", getAllCategory);
categoryRouter.post("/category", createCategory);
categoryRouter.put(`/category/:id`, updateCategory);
categoryRouter.delete("/category/:id", deleteCategory);

export default categoryRouter;
