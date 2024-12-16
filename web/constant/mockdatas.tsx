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
