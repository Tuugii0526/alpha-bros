"use client";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { BACKEND_ENDPOINT } from "@/constant/mockdatas";
import { useAuth } from "@clerk/nextjs";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export const Order = ({ placeId }: { placeId: string }) => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [people, setPeople] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const currentUser = useAuth();
  const router = useRouter();

  const handleOrderSubmit = async () => {
    if (!currentUser.isSignedIn) {
      toast("Please sign in");
      return;
    }
    if (!date) {
      toast("Өдөр сонгоогүй байна.");
      return;
    }
    if (parseInt(people) == 0) {
      toast("Хүний тоо оруулна уу");
      return;
    }
    if (!time) {
      toast("Цаг оруулна уу !");
    }
    try {
      const clerkId = currentUser.userId;
      const stringDate = date.toString();
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ clerkId, stringDate, people, time, placeId }),
      };
      const response = await fetch(`${BACKEND_ENDPOINT}/order`, options);
      const result = await response.json();
    } catch (error) {
      throw new Error();
    }

    alert(
      `Захиалга амжилттай: ${date.toLocaleDateString()} - ${people} хүн - ${
        time || "Цаг оруулаагүй"
      }`
    );
    setDate(new Date());
    setPeople("");
    setTime("");
  };

  return (
    <main className="flex flex-col gap-2 p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto">
      <div className="flex flex-col gap-1">
        <Input
          type="number"
          value={people}
          onChange={(e) => {
            setPeople(e.target.value);
          }}
          placeholder="Хүний тоогоо оруулна уу"
          className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
      </div>
      <div>
        <Input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="rounded-md"
        />
      </div>
      <div className="mt-4 p-4 bg-gray-100 rounded-md">
        <h3 className="font-semibold text-lg">Захиалгын мэдээлэл</h3>
        <p>Өдөр: {date?.toLocaleDateString() || "Сонгоогүй"}</p>
        <p>Хүмүүсийн тоо: {people}</p>
        <p>Цаг: {time || "Сонгоогүй"}</p>
      </div>
      <button
        className="bg-MainColor text-white font-semibold p-4 rounded-lg w-full hover:shadow-2xl"
        onClick={handleOrderSubmit}
      >
        Захиалга өгөх
      </button>
      <button
        className="bg-gray-300 text-gray-700 font-semibold p-4 rounded-lg w-full hover:bg-gray-200"
        onClick={() => {
          setDate(new Date());
          setPeople("");
          setTime("");
        }}
      >
        Арилгах
      </button>
    </main>
  );
};
