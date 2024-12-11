"use client";

import { TCategories, TPlaces } from "@/data/DataTypes";
import { VibeCard } from "./VibeCategoryCard";
import { Dispatch, SetStateAction } from "react";
import MainCard from "@/components/ui/cards/MainCard";

type TMenuProps = {
  categories: TCategories[];
  places: TPlaces[];
  selectedCategory: string;
  setSelectedCategory: Dispatch<SetStateAction<string>>;
};

export const Menu = ({
  places,
  categories,
  selectedCategory,
  setSelectedCategory,
}: TMenuProps) => {
  return (
    <main>
      <div>Select by Vibe</div>
      <div className="flex w-full justify-between p-10">
        {categories.map((data: TCategories) => {
          return (
            <button
              onClick={() => setSelectedCategory(`${data.name}`)}
              key={data._id}
            >
              <VibeCard vibe={`${data.name}`} />
            </button>
          );
        })}
      </div>
      <div className="grid sm:grid-cols-4 lg:grid-col-6 gap-7 mx-auto">
        {selectedCategory
          ? places
              .filter((filtData) => {
                return filtData.category.name === selectedCategory;
              })
              .map((data: TPlaces) => {
                return (
                  <MainCard
                    key={data._id}
                    image={data.image}
                    _id={data._id}
                    name={data.name}
                    category={data.category}
                    capacity={data.capacity}
                    description={data.description}
                    // location={data.location}
                    workingHours={data.workingHours}
                  />
                );
              })
          : places.map((data: TPlaces) => {
              return (
                <MainCard
                  key={data._id}
                  image={data.image}
                  _id={data._id}
                  name={data.name}
                  category={data.category}
                  capacity={data.capacity}
                  description={data.description}
                  // location={data.location}
                  workingHours={data.workingHours}
                />
              );
            })}
      </div>
    </main>
  );
};
