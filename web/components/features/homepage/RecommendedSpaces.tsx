import MainCard from "@/components/ui/cards/MainCard";
import {
  spaceMeetingPlacesData,
  TSpaceMeetingPlace,
} from "@/constant/mockdatas";

export const RecommendedSpaces = () => {
  return (
    <div className="w-screen flex flex-col gap-10 justify-center items-center mt-10">
      <h1 className="text-2xl font-Roboto font-semibold italic">
        Recommended Places
      </h1>
      <div className="grid sm:grid-cols-4 lg:grid-col-6 gap-7 mx-auto">
        {spaceMeetingPlacesData.slice(0, 4).map((data: TSpaceMeetingPlace) => {
          return (
            <MainCard
              key={data.id}
              image={data.image}
              id={data.id}
              name={data.name}
              capacity={data.capacity}
              description={data.description}
              location={data.location}
              workingHours={data.workingHours}
            />
          );
        })}
      </div>
    </div>
  );
};
