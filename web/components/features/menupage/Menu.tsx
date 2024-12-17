"use client";

import { TCategories, TPlaces } from "@/types/DataTypes";
import { VibeCard } from "./VibeCategoryCard";
import MainCard from "@/components/ui/cards/MainCard";
import { useRouter } from "next/navigation";

type TMenuProps = {
  categories: TCategories[];
  places: TPlaces[];
};

export const Menu = ({ places, categories }: TMenuProps) => {
  const router = useRouter();
  return (
    <main className="w-screen flex  items-center flex-col py-10">
      <div className="max-w-screen-xl container flex justify-center flex-col">
        <h1 className="text-2xl italic  sm:text-center text-left ">
          Хайж буй орчиноо сонгоно уу
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:flex w-full lg:justify-between gap-2 px-4 py-2 rounded-2xl my-4 bg-MainWhite">
          {categories.map((data: TCategories) => {
            return (
              <button
                onClick={() => router.push(`/menu/${data.name}`)}
                key={data._id}
              >
                <VibeCard vibe={`${data.name}`} />
              </button>
            );
          })}
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-7 mx-auto">
          {places.map((data: TPlaces) => {
            return (
              <MainCard
                key={data._id}
                image={data.image}
                _id={data._id}
                name={data.name}
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
    </main>
  );
};
