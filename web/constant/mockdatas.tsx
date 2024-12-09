export type TDistributor = {
  id: number;
  name: string;
  type: string;
};

export const distributorData: TDistributor[] = [
  { id: 1, name: "Starlight Cafe", type: "Cafe" },
  { id: 2, name: "Cosmic Lounge", type: "Lounge" },
  { id: 3, name: "Nebula Nook", type: "Cafe" },
  { id: 4, name: "Galaxy Bistro", type: "Bistro" },
  { id: 5, name: "Lunar Latte", type: "Cafe" },
  { id: 6, name: "Comet Cafe", type: "Cafe" },
];

export type TWorkingHours = {
  open: string;
  close: string;
};
export type TSpaceMeetingPlace = {
  id: number;
  image: string;
  name: string;
  type?: "Meeting" | "Dating";
  capacity: number;
  description: string;
  location: string;
  ambiance?: string;
  workingHours: {
    monday: TWorkingHours;
    tuesday: TWorkingHours;
    wednesday: TWorkingHours;
    thursday: TWorkingHours;
    friday: TWorkingHours;
    saturday: TWorkingHours;
    sunday: TWorkingHours;
  };
};
<<<<<<< HEAD
=======

export type TPlaceCategory = {
  id: number;
  type: string;
};

>>>>>>> 53c5025 (mainpage)
export const spaceMeetingPlacesData: TSpaceMeetingPlace[] = [
  {
    id: 10000000,
    name: "Orbital Rendezvous Lounge",
    type: "Dating",
    capacity: 50,
    description:
      "An intimate space-themed venue with panoramic starry views and zero-gravity cocktail zones",
    location: "Lunar Orbital Station Alpha",
    ambiance: "Romantic and futuristic",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/romantic-restaurants-65df20be09423.jpg?crop=0.535xw:1.00xh;0.237xw,0&resize=980:*",
    workingHours: {
      monday: { open: "18:00", close: "02:00" },
      tuesday: { open: "18:00", close: "02:00" },
      wednesday: { open: "18:00", close: "02:00" },
      thursday: { open: "18:00", close: "02:00" },
      friday: { open: "18:00", close: "03:00" },
      saturday: { open: "19:00", close: "03:00" },
      sunday: { open: "17:00", close: "23:00" },
    },
  },
  {
    id: 211111111,
    name: "Nebula Conference Hub",
    type: "Meeting",
    capacity: 200,
    description:
      "High-tech conference center with holographic presentation capabilities and interstellar connectivity",
    location: "Mars Diplomatic Complex",
    ambiance: "Professional and cutting-edge",
    image:
      "https://ctfassets.imgix.net/vh7r69kgcki3/4flxQHFNHBOi0KPqbsCIDT/d0de38ef626b8af15757bf5a1cea9816/Web_150DPI-WeWork_17_St_Helens_Place_London_9_sq.jpg?auto=format%20compress&fit=crop&q=50&w=900&h=900",
    workingHours: {
      monday: { open: "08:00", close: "20:00" },
      tuesday: { open: "08:00", close: "20:00" },
      wednesday: { open: "08:00", close: "20:00" },
      thursday: { open: "08:00", close: "20:00" },
      friday: { open: "08:00", close: "18:00" },
      saturday: { open: "09:00", close: "15:00" },
      sunday: { open: "Closed", close: "Closed" },
    },
  },
  {
    id: 32222222,
    name: "Stardust Romantic Dome",
    type: "Dating",
    capacity: 30,
    description:
      "Intimate geodesic dome with simulated celestial environments and personalized star projection",
    location: "Venus Biodome Resort",
    ambiance: "Dreamy and intimate",
    image:
      "https://ctfassets.imgix.net/vh7r69kgcki3/4flxQHFNHBOi0KPqbsCIDT/d0de38ef626b8af15757bf5a1cea9816/Web_150DPI-WeWork_17_St_Helens_Place_London_9_sq.jpg?auto=format%20compress&fit=crop&q=50&w=900&h=900",
    workingHours: {
      monday: { open: "19:00", close: "01:00" },
      tuesday: { open: "19:00", close: "01:00" },
      wednesday: { open: "19:00", close: "01:00" },
      thursday: { open: "19:00", close: "01:00" },
      friday: { open: "20:00", close: "02:00" },
      saturday: { open: "20:00", close: "02:00" },
      sunday: { open: "18:00", close: "23:00" },
    },
  },
  {
    id: 45555555,
    name: "Galactic Summit Center",
    type: "Meeting",
    capacity: 300,
    description:
      "Massive multi-species conference facility with universal translation services and adaptive environments",
    location: "Interstellar Diplomatic Station",
    ambiance: "Formal and multicultural",
    image:
      "https://ik.imgkit.net/3vlqs5axxjf/MC-Asia/uploadedImages/Articles/News/Event_Promotion/GICC-Auditorium-231127.jpeg?tr=w-920%2Cfo-auto",
    workingHours: {
      monday: { open: "07:00", close: "22:00" },
      tuesday: { open: "07:00", close: "22:00" },
      wednesday: { open: "07:00", close: "22:00" },
      thursday: { open: "07:00", close: "22:00" },
      friday: { open: "07:00", close: "20:00" },
      saturday: { open: "09:00", close: "17:00" },
      sunday: { open: "Closed", close: "Closed" },
    },
  },
  {
    id: 56666666,
    name: "Quantum Connections Cafe",
    type: "Dating",
    capacity: 40,
    description:
      "Trendy meeting spot with AI-powered matchmaking and immersive holographic date experiences",
    location: "Europa Habitat Ring",
    ambiance: "Playful and high-tech",
    image:
      "https://s3-media0.fl.yelpcdn.com/bphoto/DAkL7Rf5zsdhv19WlqOdVQ/l.jpg",
    workingHours: {
      monday: { open: "17:00", close: "01:00" },
      tuesday: { open: "17:00", close: "01:00" },
      wednesday: { open: "17:00", close: "01:00" },
      thursday: { open: "17:00", close: "01:00" },
      friday: { open: "18:00", close: "03:00" },
      saturday: { open: "18:00", close: "03:00" },
      sunday: { open: "16:00", close: "23:00" },
    },
  },
  {
    id: 6777777777,
    name: "Cosmic Collaboration Plaza",
    type: "Meeting",
    capacity: 150,
    description:
      "Flexible meeting space with adaptive architecture and real-time interplanetary communication systems",
    location: "Titan Research Colony",
    ambiance: "Innovative and collaborative",
    image:
      "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    workingHours: {
      monday: { open: "06:00", close: "21:00" },
      tuesday: { open: "06:00", close: "21:00" },
      wednesday: { open: "06:00", close: "21:00" },
      thursday: { open: "06:00", close: "21:00" },
      friday: { open: "06:00", close: "19:00" },
      saturday: { open: "08:00", close: "16:00" },
      sunday: { open: "Closed", close: "Closed" },
    },
  },
  {
    id: 6777277777,
    name: "Cosmic Collaboration Plaza",
    type: "Meeting",
    capacity: 150,
    description:
      "Flexible meeting space with adaptive architecture and real-time interplanetary communication systems",
    location: "Titan Research Colony",
    ambiance: "Innovative and collaborative",
    image:
      "https://images.unsplash.com/photo-1733176094174-0e06953c7700?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    workingHours: {
      monday: { open: "06:00", close: "21:00" },
      tuesday: { open: "06:00", close: "21:00" },
      wednesday: { open: "06:00", close: "21:00" },
      thursday: { open: "06:00", close: "21:00" },
      friday: { open: "06:00", close: "19:00" },
      saturday: { open: "08:00", close: "16:00" },
      sunday: { open: "Closed", close: "Closed" },
    },
  },
  {
    id: 8888888888,
    name: "Lunar Innovation Hub",
    type: "Meeting",
    capacity: 100,
    description:
      "A futuristic workshop space equipped with cutting-edge tools for lunar engineering and creative prototyping",
    location: "Moon Base Alpha",
    ambiance: "Futuristic and inspiring",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    workingHours: {
      monday: { open: "07:00", close: "20:00" },
      tuesday: { open: "07:00", close: "20:00" },
      wednesday: { open: "07:00", close: "20:00" },
      thursday: { open: "07:00", close: "20:00" },
      friday: { open: "07:00", close: "18:00" },
      saturday: { open: "09:00", close: "17:00" },
      sunday: { open: "Closed", close: "Closed" },
    },
  },
];

export const placeCategory: TPlaceCategory[] = [
  {
    id: 45232555556,
    type: "Meeting",
  },
  {
    id: 4553355557,
    type: "Dating",
  },
  {
    id: 4554455558,
    type: "Enjoy",
  },
  {
    id: 4555555559,
    type: "Seminar",
  },
  {
    id: 4555556660,
    type: "Training",
  },
  {
    id: 4555556177,
    type: "Networking",
  },
];
