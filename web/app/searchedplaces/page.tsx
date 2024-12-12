"use client";

import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  const location = searchParams.get("location");
  const category = searchParams.get("category");
  const peoplecount = searchParams.get("peoplecount");

  return (
    <main>
      <h1>search :{category}</h1>
      <h1> loc: {location}</h1>
      <h1>poeple:{peoplecount}</h1>
    </main>
  );
}
