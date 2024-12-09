"use client";
import MainCard from "@/components/ui/cards/MainCard";
import {
  placeCategory,
  spaceMeetingPlacesData,
  TPlaceCategory,
  TSpaceMeetingPlace,
} from "@/constant/mockdatas";
import { useState } from "react";
import { VibeCard } from "./VibeCategoryCard";

export const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  return (
    <main>
      <div>Select by Vibe</div>
      <div className="flex w-full justify-between p-10">
        {placeCategory.map((data: TPlaceCategory) => {
          return (
            <button
              onClick={() => setSelectedCategory(`${data.type}`)}
              key={data.id}
            >
              <VibeCard vibe={`${data.type}`} />
            </button>
          );
        })}
      </div>
      <div className="grid sm:grid-cols-4 lg:grid-col-6 gap-7 mx-auto">
        {selectedCategory &&
          spaceMeetingPlacesData
            .filter((fdata) => {
              return fdata.type == selectedCategory;
            })
            .map((data: TSpaceMeetingPlace) => {
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
        {!selectedCategory &&
          spaceMeetingPlacesData.map((data: TSpaceMeetingPlace) => {
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
        <div></div>
      </div>
    </main>
  );
};
