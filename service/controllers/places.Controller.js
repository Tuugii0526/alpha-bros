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
    const files = req.files;

    // console.log(req.body, "req.body");
    // req.body endeed buh medeelel ni orj irj bgaa
    // [Object: null prototype] {
    //   name: 'eqw',
    //   capacity: '231',
    //   description: 'manai naiz pinepone angiin ',
    //   ambiance: 'wqdefrgeth',
    //   province: 'utaanbaatar',
    //   street: 'eeqwr',
    //   weekdaysOpen: '09:00',
    //   weekdaysClose: '19:00',
    //   weekendOpen: '12:00',
    //   weekendClose: '18:00',
    //   closedDay: '3',
    //   district: 'chingeltei',
    //   category: '6757e6d23b4c6bea1e31f8a7'
    // } req.body

    if (!files || files.length === 0) {
      return response
        .status(400)
        .json({ success: false, message: "Image is required", error: error });
    }

    const uploadResults = await Promise.all(
      files.map((file) =>
        cloudinary.uploader.upload(file.path, {
          folder: "places", // Cloudinary папканы нэр
        })
      )
    );

    const uploadedUrls = uploadResults.map((result) => result.url);

    // ene deer log deer iim yumuud bgaa
    // [
    //   'http://res.cloudinary.com/dl5irqaz6/image/upload/v1734419780/places/pilqoyrnxizvpb9ti4xg.jpg',
    //   'http://res.cloudinary.com/dl5irqaz6/image/upload/v1734419761/places/x7nswal7ojjfdc4lufip.jpg',
    //   'http://res.cloudinary.com/dl5irqaz6/image/upload/v1734419789/places/fvr1zunxmfeqp3mtr08l.jpg'
    // ] uploadedUrls

    // console.log(uploadedUrls, "uploadedUrls");

    const addLocation = await Location.create({
      province,
      district,
      street,
      latitude,
      longitude,
    });

    const result = await Places.create({
      name,
      image: uploadedUrls,

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

    let placesToReturn = filteredPlaces;

    if (categorizedPlaces) {
      placesToReturn = placesToReturn.filter((place) => {
        return (
          place.category &&
          place.category.name &&
          place.category.name.toLowerCase() === categorizedPlaces.toLowerCase()
        );
      });
    }

    if (placesLocation) {
      placesToReturn = placesToReturn.filter((place) => {
        return (
          place.location &&
          place.location.district &&
          place.location.district.toLowerCase() === placesLocation.toLowerCase()
        );
      });
    }

    if (parsedCapacity !== null) {
      placesToReturn = placesToReturn.filter((place) => {
        return place.capacity >= parsedCapacity;
      });
    }

    if (placesToReturn.length > 0) {
      res.status(200).json({ success: true, data: placesToReturn });
    } else {
      res.status(200).json({ success: false, data: "Places not found" });
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
