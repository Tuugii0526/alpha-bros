import { Places } from "../model/places.model.js";
import { v2 as cloudinary } from "cloudinary";
import { Location } from "../model/location.model.js";
import { Category } from "../model/category.model.js";
const createPlaces = async (req, res) => {
  try {
    const {
      name,
      CategoryName,
      capacity,
      description,
      province,
      district,
      street,
      latitude,
      longitude,
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

    const addLocation = await Location.create({
      province,
      district,
      street,
      latitude,
      longitude,
    });

    const addCategory = await Category.create({
      CategoryName,
    });

    const result = await Places.create({
      name,
      image: uploadResult.url,
      category: addCategory?._id,
      capacity,
      description,
      location: addLocation?._id,
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
    res.status(200).json({
      success: true,
      data: {
        location: addLocation,
        category: addCategory,
        places: result,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

//
const getSelectedPlaces = async (req, res) => {
  try {
    const { categorizedPlaces, placesLocation, capacity } = req.query;
    const query = {};
    let filterApplied = false;
    if (categorizedPlaces) {
      const categoryFilter = await Category.findOne({
        CategoryName: categorizedPlaces,
      });
      if (categoryFilter) {
        query.category = categoryFilter._id;
        filterApplied = true;
      }
    }

    if (placesLocation) {
      const locationFilter = await Location.findOne({
        district: placesLocation,
      });
      if (locationFilter) {
        query.location = locationFilter._id;
        filterApplied = true;
      }
    }

    if (capacity) {
      query.capacity = { $lte: Number(capacity) };
      filterApplied = true;
    }

    if (!filterApplied) {
      return res.status(200).json({
        success: true,
        count: 0,
        data: [],
      });
    }

    const result = await Places.find(query)
      .populate("category")
      .populate("location");

    res.status(200).json({
      success: true,
      count: result.length,
      data: result,
    });
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
