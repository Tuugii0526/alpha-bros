import { Category } from "../model/category.model.js";

const createCategory = async (req, res) => {
  try {
    const { name, icon } = req.body;
    const result = await Category.create({
      name,
      icon,
    });
    res.status(201).json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(501).json({
      error: error,
    });
  }
};

const getAllCategory = async (req, res) => {
  try {
    const result = await Category.find();

    res.json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(501).json({
      error: error,
    });
  }
};

const updateCategory = async (req, res) => {
  try {
    const { name, icon } = req.body;
    const Id = req.params["id"];
    const result = await Category.findByIdAndUpdate(Id, {
      name,
      icon,
    });
    res.status(201).json({ success: true, data: result });
  } catch (error) {
    res.status(501).json({ error: error });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const Id = req.params["id"];
    const result = await Category.findByIdAndDelete(Id);
    res.status(201).json({ success: true, data: result });
  } catch (error) {
    res.status(501).json({ error: error });
  }
};
export { createCategory, getAllCategory, updateCategory, deleteCategory };
