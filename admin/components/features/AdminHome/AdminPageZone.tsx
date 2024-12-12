import { AdminContent } from "./AdminContent";
import { SideBar } from "../Both";
import { TPlaces } from "@/data/DataTypes";

type TMenuProps = {
  placesData: TPlaces[];
};

export const AdminPageZone = ({ placesData }: TMenuProps) => {
  return (
    <main>
      <div className="w-full fixed z-40 h-full">
        <div className="container mx-auto  h-full rounded-r-3xl">
          <div className="flex w-full h-full">
            <SideBar />
            <AdminContent placesData={placesData} />
          </div>
        </div>
      </div>
    </main>
  );
};
