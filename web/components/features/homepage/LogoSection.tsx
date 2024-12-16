import { DistributorCard } from "@/components/ui/cards/DistributorCard";
import { TDistributor, distributorData } from "@/constant/mockdatas";

export const LogoSection = () => {
  return (
    <div className="w-screen bg-[#F9FBFC] flex flex-col rounded-b-3xl pt-20">
      <div className="max-w-screen-xl  container flex justify-center items-center self-center flex-col gap-10 pb-20">
        <h1 className="text-2xl font-Roboto font-semibold italic">
          Дурсамжаа хайраар дүүргэх орчинг хайж олцгооё.
        </h1>
        <div className="container grid grid-cols-3 lg:grid-cols-6 gap-2">
          {distributorData.map((brand: TDistributor) => (
            <DistributorCard
              key={brand.name}
              name={brand.name}
              icon={brand.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
