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


const getSelectedPlaces = async (req, res) => {
  try {
    const { categorizedPlaces, locationPlaces, capacity } = req.query;
    const result = await Places.find().populate("Category");
    const CategorizedPlaces = result.filter((place) => {
      if (place?.category?.name === categorizedPlaces) {
        return place;
      }
    });
    res.status(201).json({ success: true, data: CategorizedPlaces });
  } catch (error) {
    res.status(501).json({ success: false, error: error.message });
  }
};

// const getLocationizedPlaces = async (req, res) => {
//   try {
//     const { category, capacity, loc } = req.query;
//     if(category)
//       if(capacity)
//     const result = await Places.find().populate("Location");
//     const LocationizedPlaces = result.
//   } catch (error) {

//   }
// }

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

const updatePlaces = async (req, res) => {
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
    const placesId = req.params["id"];
    const result = await Places.findByIdAndUpdate(placesId, {
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
    res.status(201).json({ success: true, data: result });
  } catch (error) {
    res.status(501).json({ success: false, error: error.message });
  }
};

const deletePlaces = async (req, res) => {
  try {
    const placesId = req.params["id"];
    const result = await Places.findByIdAndDelete(placesId);
    res.status(201).json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(501).json({ success: false, error: error.message });
  }
};

export {
  createPlaces,
  getAllPlaces,
  updatePlaces,
  deletePlaces,
  getCategorizedPlaces,
};
