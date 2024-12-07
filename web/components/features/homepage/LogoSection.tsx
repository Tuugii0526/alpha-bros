import { DistributorCard } from "@/components/ui/cards/DistributorCard";

export const LogoSection = () => {
  return (
    <main className="container m-auto bg-[#F9FBFC] grid grid-cols-3 lg:grid-cols-6">
      <DistributorCard brandname="brandname" />
    </main>
  );
};
