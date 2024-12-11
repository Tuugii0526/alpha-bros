export type PathType = {
  id: number;
  name: string;
  path: string;
};

export type TCategories = {
  _id: string;
  name: string;
  icon?: string;
};

export type TWorkingHours = {
  open: string;
  close: string;
};
export type TWeeklyhours = {
  monday: TWorkingHours;
  tuesday: TWorkingHours;
  wednesday: TWorkingHours;
  thursday: TWorkingHours;
  friday: TWorkingHours;
  saturday: TWorkingHours;
  sunday: TWorkingHours;
};

export type TLocation = {
  _id: string;
  distruct: string;
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
  location?: TLocation;
  workingHours: TWeeklyhours;
};
