"use client";
import { TSpaceMeetingPlace, TWorkingHours } from "@/constant/mockdatas";

import {
  BookOpenTextIcon,
  MapPinIcon,
  MoveUpRight,
  UsersIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";
const MainCard = (data: TSpaceMeetingPlace) => {
  const router = useRouter();
  const date = new Date();
  const day = date.getDay();
  const hour = date.getHours();
  const min = date.getMinutes();
  const now = `${hour.toString().padStart(2, "0")}:${min
    .toString()
    .padStart(2, "0")}`;
  const workingHour = data.workingHours;

  const getDayWorkingHours = (day: number) => {
    const days = [
      workingHour.monday,
      workingHour.tuesday,
      workingHour.wednesday,
      workingHour.thursday,
      workingHour.friday,
      workingHour.saturday,
      workingHour.sunday,
    ];
    return days[day];
  };

  const isworking = () => {
    const workingTime = getDayWorkingHours(day);

    const [nowHours, nowMinutes] = now.split(":").map(Number);
    const [openHours, openMinutes] = workingTime.open.split(":").map(Number);
    const [closeHours, closeMinutes] = workingTime.close.split(":").map(Number);

    const nowTotalMinutes = nowHours * 60 + nowMinutes;
    const openTotalMinutes = openHours * 60 + openMinutes;
    const closeTotalMinutes = closeHours * 60 + closeMinutes;
    if (closeTotalMinutes < openTotalMinutes) {
      return (
        nowTotalMinutes >= openTotalMinutes ||
        nowTotalMinutes < closeTotalMinutes
      );
    }

    return (
      nowTotalMinutes >= openTotalMinutes && nowTotalMinutes < closeTotalMinutes
    );
  };

  const venueIsOpen = isworking();
  return (
    <div className="w-[328px] h-[500px] rounded-xl flex flex-col items-center">
      <div
        className="rounded-t-xl"
        style={{
          backgroundImage: `url(${data.image})`,
          width: "328px",
          height: "300px",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="bg-MainColor p-4 w-[328px] h-[200px] flex flex-col gap-4 text-MainWhite rounded-b-xl">
        <div className="flex flex-col border-b border-white">
          <p className="text-2xl">{data.name}</p>
          <div>
            <div className="flex gap-2 items-center">
              <div>
                <BookOpenTextIcon size={16} />
              </div>
              <span className="line-clamp-2">{data.description}</span>
            </div>
          </div>
        </div>
        <div className="flex gap-4 justify-between">
          <div className="flex items-center justify-center gap-1 border-b border-MainWhite ">
            <MapPinIcon size={16} />
            <p className="text-MainWhite line-clamp-1">{data.location}</p>
          </div>
          <div className="flex items-center justify-center gap-1 border-b border-MainWhite ">
            <UsersIcon size={16} />
            <p className="">{data.capacity}</p>
          </div>
        </div>
        <div className={`flex justify-between`}>
          <div className={`${venueIsOpen ? "text-green-600" : "text-red-600"}`}>
            Venue is {venueIsOpen ? "Open" : "Closed"}
          </div>
          <div
            onClick={() => router.push(`/place/${data.id}`)}
            className="flex gap-1 items-center justify-center  cursor-pointer   "
          >
            <button>View details</button>
            <MoveUpRight />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainCard;
