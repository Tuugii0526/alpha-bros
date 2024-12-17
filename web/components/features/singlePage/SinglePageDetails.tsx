import { LocationIcon, PeopleIcon } from "@/components/ui/icons";
import { TPlaces } from "@/types/DataTypes";
import { Heart, PhoneCall, Share } from "lucide-react";
import { TimeSchedule } from "./TimeSchedule";

export const SinglePageDetails = ({ data }: { data: TPlaces }) => {
  return (
    <main className="w-full h-screen rounded-2xl flex flex-col gap-4 ">
      <div className="border h-1/2 rounded-2xl shadow-md flex flex-col gap-6 p-10">
        {/* //////////////////////////////////////////// */}
        <div className="flex w-full justify-between">
          <p className="font-Poppins not-italic font-bold text-[#405FF2] text-xs px-4 py-2 border rounded-2xl">
            {data?.category?.name}
          </p>
          <div className="flex">
            <Share color="grey" /> <button>Хуваалцах</button>
          </div>
        </div>
        {/* /////////////////////////////////////////// */}
        <div>
          <p className="font-Poppins font-semibold not-italic text-3xl">
            {data?.name}
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <LocationIcon />
          <p className="font-Inter not-italic font-medium text-base">
            {data.location?.district}
          </p>
        </div>
        <div className="flex items-center gap-2 border-b pb-5">
          <PhoneCall color="#e5e7eb" />
          <span className="font-medium font-Inter text-lg">
            +(976) - 70118303
          </span>
        </div>
        {/* ////////////////////////////////////////// */}
        <div>
          <div className="flex items-center justify-between">
            {/*  */}
            <div className="flex items-center gap-2">
              <PeopleIcon />
              <p className=" text-base text-[#374151] ">
                Хүний багтаамж {data.capacity}
              </p>
            </div>
            <div></div>
            {/*  */}
          </div>
        </div>
      </div>
      <div className=" w-full h-1/2 flex gap-4">
        <div className="w-3/4 border h-full rounded-xl shadow-md">
          <div className="flex flex-col gap-6 p-4  w-full rounded-xl">
            <p className="font-Poppins font-semibold not-italic text-2xl">
              {data?.ambiance}
            </p>
            <div className="border border-[e5e7eb] w-16"></div>
            <p className="font-Poppins text-base text-[#374151] not-italic">
              {data?.description}
            </p>
          </div>
        </div>
        <div className="w-1/4 border h-full rounded-xl shadow-md">
          <TimeSchedule workingHours={data.workingHours} />
        </div>
      </div>
    </main>
  );
};
