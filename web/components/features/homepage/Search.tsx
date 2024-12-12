"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  FilterIcon,
  GuestsIcon,
  LocationIcon,
  SearchIcon,
} from "@/components/ui/icons";
import { BACKEND_ENDPOINT } from "@/constant/mockdatas";
import { TCategories } from "@/data/DataTypes";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const Search = () => {
  const router = useRouter();
  // ////////////////////////////////////////////////////////
  const [location, setLocation] = useState("a");
  const [category, setCategory] = useState("a");
  const [peopleCount, setPeopleCount] = useState("15");
  const [fetchedCategories, setFetchedCategies] = useState<TCategories[]>([]);
  // //////////////////////////////////////////////////////////
  const [categories, setCategories] = useState<TCategories[]>([]);
  // //////////////////////////////////////////////////////////
  const fetchCategory = async () => {
    try {
      const response = await fetch(`${BACKEND_ENDPOINT}/api/category`);
      const result = await response.json();
      console.log(result.data);
    } catch (error) {
      throw new Error();
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <div className="flex items-center justify-center pt-[120px]">
      <div className="flex items-center justify-between bg-white max-w-[860px] w-full rounded-[50px]">
        <div className="flex items-center gap-3 py-6 px-12">
          <LocationIcon />
          <p className="font-Poppins text-lg font-semibold leading-7 not-italic text-black">
            Location
          </p>
        </div>
        <div className="h-[44px] border-[0.5px] border-[#E5E7EB]"></div>
        <div className="flex items-center gap-3 py-6 px-12">
          <FilterIcon />

          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select space" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="h-[44px] border-[0.5px] border-[#E5E7EB]"></div>
        <div className="flex items-center gap-3 py-6 px-12">
          <GuestsIcon />
          <p className="font-Poppins text-lg font-semibold leading-7 not-italic text-black">
            Add guests
          </p>
        </div>
        <div className="pl-[10px] pr-[10px]">
          <button
            onClick={() => {
              router.push(
                `/searchedplaces?location=${location}&category=${category}&peoplecount=${peopleCount}`
              );
            }}
            className="w-16 h-16 bg-[#4F46E5] p-5 rounded-[50%]"
          >
            <SearchIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
