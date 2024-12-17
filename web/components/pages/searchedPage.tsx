"use client";
import { BACKEND_ENDPOINT } from "@/constant/mockdatas";
import { TPlaces } from "@/types/DataTypes";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import MainCard from "../ui/cards/MainCard";
import Link from "next/link";

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
  if (searchedData.length == 0) {
    return (
      <div className="w-screen h-screen flex flex-col justify-center items-center gap-4 text-[#333]">
        Хайлтын илэрч байхгүй байна.
        <Link
          href="/menu"
          className="px-4 py-2 rounded-lg bg-MainColor text-MainWhite"
        >
          Бүх газрыг үзэх
        </Link>
      </div>
    );
  }
  return (
    <main className="w-screen min-h-screen flex">
      {searchedData &&
        searchedData.map((data: TPlaces) => {
          return (
            <div key={data._id + "searched"}>
              <MainCard
                _id={data?._id}
                name={data?.name}
                description={data?.description}
                capacity={data?.capacity}
                location={data?.location}
                image={data?.image}
                category={data?.category}
                workingHours={data?.workingHours}
              />
            </div>
          );
        })}
    </main>
  );
};
