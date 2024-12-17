"use client";

import { BACKEND_ENDPOINT } from "@/constant/mockdatas";
import { TCategories, TPlaces } from "@/types/DataTypes";
import { Menu } from "../features/menupage/Menu";
import { useEffect, useState } from "react";

export default function Menupage() {
  const [categories, setCategories] = useState<TCategories[]>([]);
  const [places, setPlaces] = useState<TPlaces[]>([]);

  const fetchCategory = async () => {
    try {
      const response = await fetch(`${BACKEND_ENDPOINT}/api/category`);
      const result = await response.json();
      setCategories(result.data);
    } catch (error) {
      throw new Error();
    }
  };

  const fetchPlaces = async () => {
    try {
      const response = await fetch(`${BACKEND_ENDPOINT}/api/places`);
      const result = await response.json();
      setPlaces(result.data);
    } catch (error) {
      throw new Error();
    }
  };

  useEffect(() => {
    fetchCategory();
    fetchPlaces();
  }, []);
  return (
    <div>
      <Menu places={places} categories={categories} />
    </div>
  );
}
