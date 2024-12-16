export type PathType = {
  id: number;
  name: string;
  path: string;
};

export type TCategories = {
  _id: string;
  name: string;
};

export type TWorkingHours = {
  open: string;
  close: string;
};
export type TWeekhours = {
  weekdays: TWorkingHours;
  weekend: TWorkingHours;
  closedDay?: string;
};

export type TLocation = {
  _id: string;
  district: string;
  latitude: string;
  longitude: string;
  province: string;
  street: string;
};

export type TPlaces = {
  _id: string;
  name: string;
  description: string;
  ambiance?: string;
  capacity: number;
  image: string;
  category: TCategories;
  location: TLocation;
  workingHours: TWeekhours;
};
