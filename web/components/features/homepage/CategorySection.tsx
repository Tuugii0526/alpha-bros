"use client";
import { DistributorCard } from "@/components/ui/cards/DistributorCard";
import { TCategories } from "@/types/DataTypes";

export const CategorySection = ({
  categories,
}: {
  categories: TCategories[];
}) => {
  return (
    <div className="max-w-screen-xl  container flex flex-col gap-8 justify-center items-center self-center mt-60 mb-20 ">
      <h1 className="text-2xl font-Roboto font-semibold italic">
        Дурсамжаа хайраар дүүргэх орчинг хайж олцгооё.
      </h1>
      <div className="container grid grid-cols-3 lg:grid-cols-7 gap-2 ">
        {categories.map((category) => (
          <DistributorCard
            key={category._id}
            id={category._id}
            name={category.name}
          />
        ))}
      </div>
    </div>
  );
};
