import MainCard from "@/components/ui/cards/MainCard";
import { mockPlaces } from "@/constant/mockdatas";
import { TPlaces } from "@/types/DataTypes";
type PropsRecommendSpaces = {
  data: TPlaces[];
};
export const RecommendedSpaces = ({ data }: PropsRecommendSpaces) => {
  return (
    <div className="w-screen flex flex-col gap-10 justify-center items-center mt-10">
      <h1 className="text-2xl font-Roboto font-semibold italic">
        Үнэлгээ өндөртэй газрууд
      </h1>
      <div className="grid sm:grid-cols-4 lg:grid-col-6 gap-7 mx-auto">
        {mockPlaces.slice(0, 4).map((data: TPlaces) => {
          return (
            <MainCard
              key={data._id}
              image={data.image}
              _id={data._id}
              name={data.name}
              ambiance={data.ambiance}
              category={data.category}
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
