import { AdminContent } from "./AdminContent";
import { SideBar } from "../Both";
import { TPlaces } from "@/data/DataTypes";
import { TCategories } from "@/data/DataTypes";

type AdminPageZoneProps = {
  placesData: TPlaces[];
  categoryData: TCategories[];
};

export const AdminPageZone = ({
  placesData,
  categoryData,
}: AdminPageZoneProps) => {
  return (
    <main>
      <div className="w-full fixed z-40 h-full">
        <div className="container mx-auto  h-full rounded-r-3xl">
          <div className="flex w-full h-full">
            <SideBar />
            <AdminContent placesData={placesData} categoryData={categoryData} />
          </div>
        </div>
      </div>
    </main>
  );
};
