import { Header } from "../Both";
import {
  AddPlaceButton,
  AddSpaceButton,
  EditButton,
  TabsAddPlaceButton,
} from "@/components/ui/buttons";
import { AdminPlaceCard, MainCard } from "@/components/ui/cards";
import { TPlaces } from "@/data/DataTypes";

type TMenuProps = {
  placesData: TPlaces[];
};

export const AdminContent = ({ placesData }: TMenuProps) => {
  return (
    <main className="w-full h-[90%] pb-3">
      <Header />
      <div className="pl-8 pt-8 h-full">
        <div className="bg-white h-full rounded-xl">
          <div className="py-5 px-6">
            <div className="flex justify-between items-center">
              <p className="font-Poppins font-bold leading-normal not-italic text-[22px]">
                Space's
              </p>
              {/* <TabsAddPlaceButton /> */}
              {/* <AddSpaceButton /> */}
              {/* <EditButton /> */}
              <AddPlaceButton />
            </div>
          </div>
          <div className="px-6 w-full h-full overflow-hidden">
            <div className="flex flex-col gap-6 w-full h-[90%] overflow-scroll">
              {placesData.map((data: TPlaces) => {
                return (
                  <AdminPlaceCard
                    key={data._id}
                    image={data.image}
                    _id={data._id}
                    name={data.name}
                    category={data.category}
                    capacity={data.capacity}
                    description={data.description}
                    workingHours={data.workingHours}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
