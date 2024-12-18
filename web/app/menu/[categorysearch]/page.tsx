"use client";
import MainCard from "@/components/ui/cards/MainCard";
import { BACKEND_ENDPOINT } from "@/constant/mockdatas";
import { TPlaces } from "@/types/DataTypes";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const [data, setData] = useState<TPlaces[]>([]);
  const params = useParams();
  const categoryName = params.categorysearch;

  const fetchdata = async () => {
    try {
      const response = await fetch(
        `${BACKEND_ENDPOINT}/api/selected?categorizedPlaces=${categoryName}`
      );
      const result = await response.json();
      setData(result.data);
    } catch (error) {
      throw new Error();
    }
  };
  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-7 mx-auto">
      {data.map((data: TPlaces) => {
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
  );
}
