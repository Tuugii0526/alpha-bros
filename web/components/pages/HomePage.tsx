"use client";
import { useEffect, useState } from "react";
import { Hero } from "../features/homepage/Hero";
import { CategorySection } from "../features/homepage/CategorySection";
import { RecommendedSpaces } from "../features/homepage/RecommendedSpaces";
import { TCategories, TPlaces } from "@/types/DataTypes";
import { WhyChoose } from "../features/homepage/WhyChoose";
import { Loader } from "../layout/Loader";

export default function HomePage() {
  const [fetchData, setFetchData] = useState<TPlaces[]>([]);
  const [categories, setCategory] = useState<TCategories[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const fetchdataFunc = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_KEY}/api/places`
      );
      const result = await response.json();
      setFetchData(result.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      throw new Error();
    } finally {
      setLoading(false);
    }
  };
  const fetchCategory = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_KEY}/api/category`
      );
      const result = await response.json();
      setCategory(result.data);
    } catch (error) {
      throw new Error();
    }
  };
  useEffect(() => {
    fetchdataFunc();
    fetchCategory();
  }, []);
  if (loading) {
    return <Loader />;
  }
  return (
    <div className="w-screen flex flex-col">
      <Hero />
      <CategorySection categories={categories} />
      <RecommendedSpaces data={fetchData} />
      <WhyChoose />
    </div>
  );
}
