import MainCard from "@/components/ui/cards/MainCard";
import {
  spaceMeetingPlacesData,
  TSpaceMeetingPlace,
} from "@/constant/mockdatas";

export const RecommendedSpaces = () => {
  return (
    <div className="w-screen flex justify-center items-center mt-8">
      <div className="grid sm:grid-cols-3 lg:grid-col-6 gap-7 mx-auto">
        {spaceMeetingPlacesData.map((data: TSpaceMeetingPlace) => {
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
