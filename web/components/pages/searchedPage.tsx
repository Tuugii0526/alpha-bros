"use client";
import { BACKEND_ENDPOINT } from "@/constant/mockdatas";
import { TPlaces } from "@/data/DataTypes";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import MainCard from "../ui/cards/MainCard";

export const SearchedPage = () => {
  const searchParams = useSearchParams();
  const [searchedData, setSearchedData] = useState<TPlaces[]>([]);
  // ///////////////////////////
  const location = searchParams.get("location");
  const category = searchParams.get("category");
  const peoplecount = searchParams.get("peoplecount");
  // ////////////////////////////
  const SearchedDataFetch = async () => {
    try {
      const response = await fetch(
        `${BACKEND_ENDPOINT}/api/selected?placesLocation=${location}&categorizedPlaces=${category}&capacity=${peoplecount}`
      );
      const result = await response.json();
      if (result.success == true) {
        setSearchedData(result.data);
      } else {
        return searchedData;
      }
    } catch (error) {
      throw new Error();
    }
  };
  //////////////////////////////
  useEffect(() => {
    SearchedDataFetch();
  }, []);
  if (!searchedData) {
    return (
      <div className="w-screen h-screen flex justify-center items-center py-20 text-black">
        data is not found
      </div>
    );
  }
  return (
    <main className="w-screen min-h-screen ">
      {searchedData &&
        searchedData.map((data: TPlaces) => {
          return (
            <div key={data._id + "searched"}>
              <MainCard
                _id={data._id}
                name={data.name}
                description={data.description}
                capacity={data.capacity}
                image={data.image}
                category={data.category}
                workingHours={data.workingHours}
              />
            </div>
          );
        })}
    </main>
  );
};
