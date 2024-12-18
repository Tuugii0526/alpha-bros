"use client";

import { BACKEND_ENDPOINT } from "@/constant/mockdatas";
import { TPlaces } from "@/types/DataTypes";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { PageBuild } from "../features/singlePage/PageBuild";

export default function SinglePage() {
  const params = useParams<{ place: string }>();
  const [place, setPlace] = useState<TPlaces[]>([]);

  useEffect(() => {
    setPlace(
      place.filter((data) => {
        return data._id == params.place;
      })
    );
  }, []);

  const fetchPlaces = async () => {
    try {
      const response = await fetch(`${BACKEND_ENDPOINT}/api/places`);
      const result = await response.json();
      const places = result.data;
      const correctPlace = places.filter((place: TPlaces) => {
        return place._id === params.place;
      });
      setPlace(correctPlace);
    } catch (error) {
      throw new Error();
    }
  };

  useEffect(() => {
    fetchPlaces();
  }, []);
  return <main>{<PageBuild place={place} />}</main>;
}
