import { Location } from "../model/location.model.js";

const addLocation = async (req, res) => {
  try {
    const { province, district, street, latitude, longitude } = req.body;
    const result = await Location.create({
      province,
      district,
      street,
      latitude,
      longitude,
    });
    res.status(201).json({ success: true, data: result });
  } catch (error) {
    res.status(501).json({ success: false, error: error.message });
  }
};

const getAllLocation = async (req, res) => {
  try {
    const result = await Location.find();
    res.status(201).json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(501).json({
      success: false,
      error: error.message,
    });
  }
};

const updateLocation = async (req, res) => {
  try {
    const { province, district, street, latitude, longitude } = req.body;
    const ID = req.params["id"];
    const result = await Location.findByIdAndUpdate(ID, {
      province,
      district,
      street,
      latitude,
      longitude,
    });
    res.status(201).json({ success: true, data: result });
  } catch (error) {
    res.status(501).json({
      success: false,
      error: error.message,
    });
  }
};

const deleteLocation = async (req, res) => {
  try {
    const ID = req.params["id"];
    const result = await Location.findByIdAndDelete(ID);
    res.status(201).json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(501).json({
      success: false,
      error: error.message,
    });
  }
};

export { addLocation, getAllLocation, updateLocation, deleteLocation };
