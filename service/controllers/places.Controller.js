import { Places } from "../model/places.model.js";

const createPlaces = async (req, res) => {
  try {
    const {
      name,
      image,
      category,
      capacity,
      description,
      location,
      ambiance,
      workingHours: {
        weekdays: { open: weekdaysOpen, close: weekdaysClose },
        weekend: { open: weekendOpen, close: weekendClose },
      },
    } = req.body;

    const result = await Places.create({
      name,
      image,
      category,
      capacity,
      description,
      location,
      ambiance,
      workingHours: {
        weekdays: { open: weekdaysOpen, close: weekdaysClose },
        weekend: { open: weekendOpen, close: weekendClose },
      },
    });
    res.status(201).json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(501).json({ success: false, error: error });
  }
};

const getAllPlaces = async (req, res) => {
  try {
    const result = await Places.find()
      .populate("category")
      .populate("location");

    res.status(201).json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(501).json({ success: false, error: error.message });
  }
};

export { createPlaces, getAllPlaces };
