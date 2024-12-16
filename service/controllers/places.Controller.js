import { Places } from "../model/places.model.js";
import { v2 as cloudinary } from "cloudinary";
import { Location } from "../model/location.model.js";

const createPlaces = async (req, response) => {
  try {
    const {
      name,
      category,
      capacity,
      description,
      phoneNumber,
      province,
      district,
      street,
      latitude,
      longitude,
      ambiance,
      weekdaysOpen,
      weekdaysClose,
      weekendOpen,
      weekendClose,
      closedDay,
    } = req.body;
    const file = req.file;

    if (!file) {
      return response
        .status(400)
        .json({ success: false, message: "Image is required" });
    }

    const uploadResult = await cloudinary.uploader.upload(file.path, {
      folder: "foods",
    });

    const addLocation = await Location.create({
      province,
      district,
      street,
      latitude,
      longitude,
    });

    const result = await Places.create({
      name,
      image: uploadResult.url,
      category,
      capacity,
      description,
      phoneNumber,
      location: addLocation?._id,
      ambiance,
      workingHours: {
        weekdays: { open: weekdaysOpen, close: weekdaysClose },
        weekend: { open: weekendOpen, close: weekendClose },
        closedDay,
      },
    });
    response.status(200).json({
      success: true,
      data: {
        location: addLocation,
        places: result,
      },
    });
  } catch (error) {
    response.status(500).json({ success: false, error: error.message });
  }
};

//
const getSelectedPlaces = async (req, res) => {
  try {
    const { categorizedPlaces, placesLocation, capacity } = req.query;

    const parsedCapacity = capacity ? parseInt(capacity, 10) : null;

    const filteredPlaces = await Places.find()
      .populate("category")
      .populate("location");

    if (categorizedPlaces && placesLocation && parsedCapacity !== null) {
      const filteredByCategory = filteredPlaces.filter((places) => {
        const categoryMatch =
          places.category &&
          places.category.name &&
          places.category.name.toLowerCase() ===
            categorizedPlaces.toLowerCase();

        const locationMatch =
          places.location &&
          places.location.district &&
          places.location.district.toLowerCase() ===
            placesLocation.toLowerCase();

        const capacityMatch = places.capacity >= parsedCapacity;

        return categoryMatch && locationMatch && capacityMatch;
      });

      if (filteredByCategory.length > 0) {
        res.status(200).json({ success: true, data: filteredByCategory });
      } else {
        res.status(200).json({ success: false, data: "Places not found" });
      }
    } else {
      res.status(400).json({
        success: false,
        message:
          "Please provide all required parameters: categorizedPlaces, placesLocation, and capacity.",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const getSinglePagePlaces = async (req, res) => {
  try {
    const PlacesId = req.params["id"];
    const result = await Places.findById(PlacesId)
      .populate("category")
      .populate("location");

    res.status(200).json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

const getAllPlaces = async (req, res) => {
  try {
    const result = await Places.find()
      .populate("category")
      .populate("location");

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
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
        closedday,
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
        closedday,
      },
    });
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

const deletePlaces = async (req, res) => {
  try {
    const placesId = req.params["id"];
    const result = await Places.findByIdAndDelete(placesId);
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export {
  createPlaces,
  getAllPlaces,
  updatePlaces,
  deletePlaces,
  getSelectedPlaces,
  getSinglePagePlaces,
};
