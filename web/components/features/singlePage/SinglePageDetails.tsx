import { LocationIcon, PeopleIcon } from "@/components/ui/icons";
import { TPlaces } from "@/types/DataTypes";
import { PhoneCall, Share } from "lucide-react";
import { roboto700 } from "@/app/fonts/fonts";

export const SinglePageDetails = ({ data }: { data: TPlaces }) => {
  return (
    <div className="border h-full w-fill flex flex-col p-4">
      <p className=" not-italic font-bold text-[#405FF2] text-xs  py-2  rounded-2xl">
        {data?.category?.name}
      </p>
      <p className=" font-semibold not-italic text-3xl">{data?.name}</p>
      <div className="flex gap-2 items-center">
        <LocationIcon />
        <p className="font-Inter not-italic font-medium text-base">
          {data.location?.district}
        </p>
      </div>
      {/*  */}
      <div className="flex items-center  pb-5">
        <PhoneCall color="#333" />
        <span className="font-medium font-Inter text-lg">
          +(976) - {data.phoneNumber}
        </span>
      </div>
      {/*  */}
      <div className="flex items-center gap-2">
        <PeopleIcon />
        <p className=" text-base text-[#333] ">
          Хүний багтаамж
          <span className={`${roboto700.className}`}>{data.capacity}</span>
        </p>
      </div>
      {/*  */}
    </div>
  );
};
