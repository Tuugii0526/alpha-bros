import { LocationIcon, PeopleIcon } from "@/components/ui/icons";
import { TPlaces } from "@/types/DataTypes";
import { PhoneCall } from "lucide-react";
import { TimeSchedule } from "./TimeSchedule";

export const SinglePageDetails = ({ data }: { data: TPlaces }) => {
  console.log("data", data);

  return (
    <div className="flex flex-col w-full">
      <div className=" flex  justify-between gap-6">
        <div className="flex bg-white border-[#e5e7eb] rounded-xl p-4 gap-6 w-3/4">
          <div className=" flex flex-col gap-6 w-full">
            <div className=" flex w-full justify-between">
              <div className="py-1 px-[10px] bg-[#405FF212] rounded-full">
                <p className="font-Poppins not-italic font-bold text-[#405FF2] text-xs">
                  {data?.category?.name}
                </p>
              </div>
            </div>
            <>
              <p className="font-Poppins font-semibold not-italic text-2xl">
                {data?.name}
              </p>
            </>
            <div className="flex gap-2 items-center">
              <LocationIcon />
              <p className="font-Inter not-italic font-medium text-base">
                {data.location?.district}
              </p>
            </div>
            <div className="flex items-center gap-2 ">
              <PhoneCall color="#e5e7eb" />
              <p className="font-medium font-Inter text-lg text-[#6b7280]"></p>
              <span className="font-medium font-Inter text-lg">
                +(976) - 70118303
              </span>
            </div>
            <div className="w-full border border-[#e5e7eb]"></div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <PeopleIcon />
                <p className=" text-base text-[#374151] not-italic ">
                  Хүний багтаамж {data.capacity}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/4 h-full">
          <TimeSchedule workingHours={data.workingHours} />
        </div>
      </div>
      <div className="w-full mt-12 ">
        <div className="bg-white flex flex-col gap-6 p-4  w-full border border-[#e5e7eb] rounded-xl">
          <p className="font-Poppins font-semibold not-italic text-2xl">
            {data?.ambiance}
          </p>
          <div className="border border-[e5e7eb] w-16"></div>
          <p className="font-Poppins text-base text-[#374151] not-italic">
            {data?.description}
          </p>
        </div>
      </div>
    </div>
  );
};
