import { DistributorCard } from "@/components/ui/cards/DistributorCard";
import { TDistributor, distributorData } from "@/constant/mockdatas";

export const LogoSection = () => {
  return (
    <div className="w-full bg-[#F9FBFC]">
      <div className="container m-auto  grid grid-cols-3 lg:grid-cols-6 gap-2 pb-8">
        {distributorData.map((brand: TDistributor) => (
          <DistributorCard key={brand.name} name={brand.name} />
        ))}
      </div>
    </div>
  );
};
