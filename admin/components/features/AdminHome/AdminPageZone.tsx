import { AdminContent } from "./AdminContent";
import { SideBar } from "../Both";
import { TPlaces } from "@/data/DataTypes";
import { TCategories } from "@/data/DataTypes";
import { Dispatch, SetStateAction } from "react";

type AdminPageZoneProps = {
  placesData: TPlaces[];
  categoryData: TCategories[];
  setDataEffect: Dispatch<SetStateAction<boolean>>;
  dataEffect: boolean;
};

export const AdminPageZone = ({
  placesData,
  categoryData,
  setDataEffect,
  dataEffect,
}: AdminPageZoneProps) => {
  return (
    <main>
      <div className="w-full fixed z-40 h-full">
        <div className="container mx-auto  h-full rounded-r-3xl">
          <div className="flex w-full h-full">
            <SideBar />
            <AdminContent
              placesData={placesData}
              categoryData={categoryData}
              setDataEffect={setDataEffect}
              dataEffect={dataEffect}
            />
          </div>
        </div>
      </div>
    </main>
  );
};
