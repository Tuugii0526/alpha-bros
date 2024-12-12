"use client";

import { useEffect, useState } from "react";
import { AdminPageZone } from "../features/AdminHome";
import { TPlaces } from "@/data/DataTypes";

const AdminPage = () => {
  const [placesData, setPlacesData] = useState<TPlaces[]>([]);
  const BACKEND_END_POINT = process.env.BACKEND_URL;

  const fatchData = async () => {
    try {
      const response = await fetch(`${BACKEND_END_POINT}/places`);
      const responseData = await response.json();
      const data = responseData.data;
      setPlacesData(data);
    } catch (e) {
      console.log("error", e);
    }
  };

  console.log("placesData", placesData);

  useEffect(() => {
    fatchData();
  }, []);
  return (
    <main className="h-screen w-screen bg-slate-100">
      <AdminPageZone placesData={placesData} />
    </main>
  );
};

export default AdminPage;
