import { TCategories, TLocation, TPlaces, TWeekhours } from "@/types/DataTypes";

export const BACKEND_ENDPOINT = "http://localhost:8000";

const date = new Date();
const hour = date.getHours();
const min = date.getMinutes();
export const weekDay = date.getDay().toString();
export const Now = `${hour.toString().padStart(2, "0")}:${min
  .toString()
  .padStart(2, "0")}`;

export type TDistributor = {
  id: number;
  name: string;
  icon: string;
};

export const distributorData: TDistributor[] = [
  { id: 1, name: "Зоог", icon: "aa" },
  { id: 2, name: "Амрах", icon: "ass" },
  { id: 3, name: "Адал явдал", icon: "sds" },
  { id: 4, name: "Намуухан", icon: "dsad" },
  { id: 5, name: "Уулзалт", icon: "dsd" },
  { id: 6, name: "Хөгжилдөх", icon: "dsad" },
];

export type TWorkingHours = {
  open: string;
  close: string;
};

export type District = {
  id: number;
  name: string;
  idName: string;
};

export const districts: District[] = [
  { id: 1, name: "Сүхбаатар", idName: "Sukhbaatar" },
  { id: 2, name: "Чингэлтэй", idName: "chingeltei" },
  { id: 3, name: "Баянзүрх", idName: "baynzurkh" },
  { id: 4, name: "Баянгол", idName: "bayangol" },
  { id: 5, name: "Сонгино-Хайрхан", idName: "songino-khairkhan" },
  { id: 6, name: "Хан-уул", idName: "khan-uul" },
  { id: 7, name: "Налайх", idName: "nalaih" },
  { id: 8, name: "Багануур", idName: "baganuur" },
  { id: 9, name: "Багахангай", idName: "bagahangai" },
];

///////////////////////////////////////////////////////////////////////////////

export const mockCategories: TCategories[] = [
  { _id: "cat1", name: "Restaurant" },
  { _id: "cat2", name: "Park" },
  { _id: "cat3", name: "Museum" },
];

export const mockWorkingHours: TWeekhours = {
  weekdays: { open: "09:00", close: "09:00" },
  weekend: { open: "10:00", close: "10:00" },
  closedDay: "6",
};

export const mockLocations: TLocation[] = [
  {
    _id: "loc1",
    district: "Downtown",
    latitude: "47.6062",
    longitude: "-122.3321",
    province: "Washington",
    street: "123 Main St",
  },
  {
    _id: "loc2",
    district: "Uptown",
    latitude: "47.6205",
    longitude: "-122.3493",
    province: "Washington",
    street: "456 High St",
  },
  {
    _id: "loc3",
    district: "UB City",
    latitude: "47.9181",
    longitude: "106.9177",
    province: "Ulaanbaatar",
    street: "Peace Avenue",
  },
  {
    _id: "loc4",
    district: "UB City",
    latitude: "47.9200",
    longitude: "106.9270",
    province: "Ulaanbaatar",
    street: "Chinggis Avenue",
  },
  {
    _id: "loc5",
    district: "UB City",
    latitude: "47.9151",
    longitude: "106.9155",
    province: "Ulaanbaatar",
    street: "Amarsanaa Street",
  },
  {
    _id: "loc6",
    district: "UB City",
    latitude: "47.9190",
    longitude: "106.9180",
    province: "Ulaanbaatar",
    street: "Seoul Street",
  },
  {
    _id: "loc7",
    district: "UB City",
    latitude: "47.9170",
    longitude: "106.9250",
    province: "Ulaanbaatar",
    street: "Tokyo Street",
  },
];

export const mockPlaces: TPlaces[] = [
  {
    _id: "place1",
    name: "Central Bistro",
    description:
      "A cozy place with a modern ambiance and excellent food.  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda architecto fuga nemo ad nesciunt soluta odio tempore iusto cum a temporibus debitis aut deserunt officiis eius harum, cupiditate autem accusamus?",
    ambiance: "Modern",
    capacity: 50,
    image:
      "https://visitulaanbaatar.net/storage/2021/28467702_2471777469713153_8070735842805884875_n.jpg",
    category: mockCategories[0],
    location: mockLocations[0],
    workingHours: mockWorkingHours,
  },
  {
    _id: "place2",
    name: "Sunny Park",
    description:
      "A large park with plenty of greenery and open spaces for activities.",
    capacity: 500,
    image: "sunny-park.jpg",
    category: mockCategories[1],
    location: mockLocations[1],
    workingHours: mockWorkingHours,
  },
  {
    _id: "place3",
    name: "History Museum",
    description: "A place to explore and learn about local history.",
    capacity: 200,
    image: "history-museum.jpg",
    category: mockCategories[2],
    location: mockLocations[3],
    workingHours: mockWorkingHours,
  },
  {
    _id: "place4",
    name: "Blue Sky Lounge",
    description: "A premium lounge offering a stunning view of UB City.",
    ambiance: "Luxury",
    capacity: 100,
    image: "blue-sky-lounge.jpg",
    category: mockCategories[0],
    location: mockLocations[2],
    workingHours: mockWorkingHours,
  },
  {
    _id: "place5",
    name: "Gandan Monastery",
    description: "A serene and historical Buddhist monastery in UB City.",
    capacity: 300,
    image: "gandan-monastery.jpg",
    category: mockCategories[2],
    location: mockLocations[3],
    workingHours: mockWorkingHours,
  },
  {
    _id: "place6",
    name: "Millennium Plaza",
    description: "A modern business and shopping complex in UB City.",
    ambiance: "Modern",
    capacity: 500,
    image: "millennium-plaza.jpg",
    category: mockCategories[0],
    location: mockLocations[4],
    workingHours: mockWorkingHours,
  },
  {
    _id: "place7",
    name: "Naran Tuul Market",
    description: "A vibrant market showcasing local culture and goods.",
    capacity: 1000,
    image: "naran-tuul-market.jpg",
    category: mockCategories[1],
    location: mockLocations[5],
    workingHours: mockWorkingHours,
  },
  {
    _id: "place8",
    name: "State Department Store",
    description: "A historic shopping destination in UB City.",
    capacity: 700,

    image: "state-department-store.jpg",
    category: mockCategories[0],
    location: mockLocations[6],
    workingHours: mockWorkingHours,
  },
];
