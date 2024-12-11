export type HeaderButtonTypes = {
  text?: string;
  pathname?: string;
  path?: string;
};

export type DashboardIconType = {
  pathname?: string;
  path?: string;
};

export type CreateSpaseType = {
  name?: string;
  title?: string;
  type?: string;
  value?: string | number | readonly string[] | undefined;
  id?: string;
  placeholder?: string;
};

export type TSpaceMeetingPlace = {
  _id: number;
  image: string;
  name: string;
  catergory?: "Meeting" | "Dating";
  capacity: number;
  description: string;
  location: "objectid";
  ambiance?: string;
  workingHours: {
    // monday: TWorkingHours;
    // tuesday: TWorkingHours;
    // wednesday: TWorkingHours;
    // thursday: TWorkingHours;
    // friday: TWorkingHours;
    // saturday: TWorkingHours;
    // sunday: TWorkingHours;
  };
};

export type SpaceImageType = {
  image: File | null;
};
