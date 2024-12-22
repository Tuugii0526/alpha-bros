"use client";

import { TPlaces } from "@/types/DataTypes";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { PageBuild } from "../features/singlePage/PageBuild";
import { Loader } from "../layout/Loader";
export default function SinglePage() {
  const params = useParams<{ place: string }>();
  const [place, setPlace] = useState<TPlaces[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setPlace(
      place.filter((data) => {
        return data._id == params.place;
      })
    );
  }, []);

  const fetchPlaces = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_KEY}/api/places`
      );
      const result = await response.json();
      const places = result.data;
      const correctPlace = places.filter((place: TPlaces) => {
        return place._id === params.place;
      });
      setPlace(correctPlace);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      throw new Error();
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlaces();
  }, []);
  if (loading) {
    return <Loader />;
  }

  return <main>{<PageBuild place={place} />}</main>;
}
