"use client";

import { TPlaces } from "@/data/DataTypes";
import { useRouter } from "next/navigation";
import { EDButton } from "../buttons";

export const AdminPlaceCard = (data: TPlaces) => {
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

    // const [nowHours, nowMinutes] = now.split(":").map(Number);
    // const [openHours, openMinutes] = workingTime.open.split(":").map(Number);
    // const [closeHours, closeMinutes] = workingTime.close.split(":").map(Number);

    // const nowTotalMinutes = nowHours * 60 + nowMinutes;
    // const openTotalMinutes = openHours * 60 + openMinutes;
    // const closeTotalMinutes = closeHours * 60 + closeMinutes;
    // if (closeTotalMinutes < openTotalMinutes) {
    //   return (
    //     nowTotalMinutes >= openTotalMinutes ||
    //     nowTotalMinutes < closeTotalMinutes
    //   );
    // }

    // return (
    //   nowTotalMinutes >= openTotalMinutes && nowTotalMinutes < closeTotalMinutes
    // );
  };

  const venueIsOpen = isworking();
  return (
    <div className="w-full border border-spacing-x-7 py-3 px-5 flex gap-2 justify-between rounded-lg">
      <div className="flex gap-3 items-center">
        <div
          className="w-20 h-20 rounded"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url(${data?.image})`,
          }}
        ></div>
        <div className="w-[400px] ">
          <p className="font-Poppins font-semibold text-lg not-italic leading-normal">
            {data?.name}
          </p>
          <p className="font-Poppins font-normal text-sm leading-normal not-italic text-[#272727] line-clamp-2">
            {data?.description}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2 justify-center items-center">
        <div className="flex items-center">
          <p className="font-Inter text-sm font-semibold not-italic leading-5 tracking-[-0.28px] ">
            Төрөл:{" "}
            <span className="text-[#121316] font-normal">
              {data?.category?.name ? data?.category?.name : "Хоосоn"}
            </span>
          </p>
        </div>
        <div className="flex gap-3 items-center">
          <p className="font-Inter text-sm not-italic font-bold leading-[16px] tracking-[-0.14px]">
            Хүний багтаамж:{" "}
            <span className="text-[#121316] font-normal">{data?.capacity}</span>
          </p>
        </div>
      </div>
      <div className="w-60 flex flex-col justify-center">
        <p className="font-Inter text-sm font-semibold not-italic leading-5 tracking-[-0.28px] ">
          Хот, аймаг:{" "}
          <span className="text-[#121316] font-normal">
            {data?.location?.province
              ? data?.location?.province
              : "Хоосон байна"}
          </span>
        </p>
        <p className="font-Inter text-sm font-semibold not-italic leading-5 tracking-[-0.28px] ">
          Дүүрэг:{" "}
          <span className="text-[#121316] font-normal">
            {" "}
            {data?.location?.distruct
              ? data?.location?.distruct
              : "Хоосон байна"}
          </span>
        </p>
        <p className="font-Inter text-sm font-semibold not-italic leading-5 tracking-[-0.28px] ">
          Гудамж:{" "}
          <span className="text-[#121316] font-normal">
            {" "}
            {data?.location?.street ? data?.location?.street : "Хоосон байна"}
          </span>
        </p>
      </div>
      <div className="flex items-center p-2">
        <EDButton />
      </div>
    </div>
  );
};
