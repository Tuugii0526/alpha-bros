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
    <main className="w-screen flex  items-center flex-col py-10">
      <div className="max-w-screen-xl container flex justify-center flex-col">
        <h1 className="text-2xl italic underline sm:text-center text-left ">
          Select by Vibe
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:flex w-full lg:justify-between gap-2 p-10">
          {categories.map((data: TCategories) => {
            return (
              <button
                onClick={() => setSelectedCategory(`${data.CategoryName}`)}
                key={data._id}
              >
                <VibeCard vibe={`${data.CategoryName}`} />
              </button>
            );
          })}
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-7 mx-auto">
          {selectedCategory
            ? places
                .filter((filtData) => {
                  return filtData.category.CategoryName === selectedCategory;
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
      </div>
    </main>
  );
};
