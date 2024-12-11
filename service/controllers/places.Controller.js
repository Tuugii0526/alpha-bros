import { Places } from "../model/places.model.js";
import { v2 as cloudinary } from "cloudinary";

const createPlaces = async (req, res) => {
  try {
    const {
      name,
      category,
      capacity,
      description,
      location,
      ambiance,
      workingHours: {
        monday: { open: mondayOpen, close: mondayClose },
        tuesday: { open: tuesdayOpen, close: tuesdayClose },
        wednesday: { open: wednesdayOpen, close: wednesdayClose },
        thursday: { open: thursdayOpen, close: thursdayClose },
        friday: { open: fridayOpen, close: fridayClose },
        saturday: { open: saturdayOpen, close: saturdayClose },
        sunday: { open: sundayOpen, close: sundayClose },
      },
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

    const result = await Places.create({
      name,
      image: uploadResult.url,
      category,
      capacity,
      description,
      location,
      ambiance,
      workingHours: {
        monday: { open: mondayOpen, close: mondayClose },
        tuesday: { open: tuesdayOpen, close: tuesdayClose },
        wednesday: { open: wednesdayOpen, close: wednesdayClose },
        thursday: { open: thursdayOpen, close: thursdayClose },
        friday: { open: fridayOpen, close: fridayClose },
        saturday: { open: saturdayOpen, close: saturdayClose },
        sunday: { open: sundayOpen, close: sundayClose },
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
  const { categorizedPlaces, placesLocation, capacity } = req.query;
  if (categorizedPlaces) {
    try {
      const result = await Places.find().populate("category");
      const CategorizedPlaces = result.filter((place) => {
        if (place?.category?.name === categorizedPlaces) {
          return place;
        }
      });
      res.status(201).json({ success: true, data: CategorizedPlaces });
    } catch (error) {
      res.status(501).json({ success: false, error: error.message });
    }
  }
  if (placesLocation) {
    try {
      const result = await Places.find().populate("location");
      const PlacesLocation = result.filter((place) => {
        if (place?.location?.district === placesLocation) {
          return place;
        }
      });
      res.status(201).json({ success: true, data: PlacesLocation });
    } catch (error) {
      res.status(501).json({ success: false, error: error.message });
    }
  }
  if (capacity) {
    try {
      const result = await Places.find(capacity <= Places.capacity);
      res.status(201).json({ success: true, data: result });
    } catch (error) {
      res.status(501).json({ success: false, error: error.message });
    }
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
        monday: { open: mondayOpen, close: mondayClose },
        tuesday: { open: tuesdayOpen, close: tuesdayClose },
        wednesday: { open: wednesdayOpen, close: wednesdayClose },
        thursday: { open: thursdayOpen, close: thursdayClose },
        friday: { open: fridayOpen, close: fridayClose },
        saturday: { open: saturdayOpen, close: saturdayClose },
        sunday: { open: sundayOpen, close: sundayClose },
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
        monday: { open: mondayOpen, close: mondayClose },
        tuesday: { open: tuesdayOpen, close: tuesdayClose },
        wednesday: { open: wednesdayOpen, close: wednesdayClose },
        thursday: { open: thursdayOpen, close: thursdayClose },
        friday: { open: fridayOpen, close: fridayClose },
        saturday: { open: saturdayOpen, close: saturdayClose },
        sunday: { open: sundayOpen, close: sundayClose },
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
  getSelectedPlaces,
};
