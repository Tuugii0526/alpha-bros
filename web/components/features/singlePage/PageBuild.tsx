import { TPlaces } from "@/types/DataTypes";
import { useState } from "react";
import { TimeSchedule } from "./TimeSchedule";
import { Order } from "./Order";
import { SinglePageDetails } from "./SinglePageDetails";
type TSinglePageProps = {
  place: TPlaces[] | [];
};

export const PageBuild = ({ place }: TSinglePageProps) => {
  return (
    <div className="w-screen flex justify-center bg-[#F9FBFC] border-t ">
      {place.map((data) => {
        return (
          <div
            className="w-full container max-w-screen-xl py-10 "
            key={data._id}
          >
            <div className="container max-w-screen-xl mx-auto min-h-full ">
              <div className="flex scroll h-[646px]">
                <div
                  className="h-auto w-full rounded-2xl col-span-2 row-span-2"
                  style={{
                    background: `url(${data?.image})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                ></div>
                <div
                  className="h-auto rounded-2xl"
                  style={{
                    background: `url(${data.image})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                ></div>
                <div
                  className="h-auto rounded-2xl"
                  style={{
                    background: `url(${data.image})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                ></div>
                <div
                  className="h-auto rounded-2xl"
                  style={{
                    background: `url(${data.image})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                ></div>
                <div
                  className="h-auto rounded-2xl"
                  style={{
                    background: `url(${data.image})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                ></div>
              </div>
              {/* ////////////////////////////////////////////////// */}
              <div className=" flex justify-between mt-12">
                <div className="w-2/3">
                  <SinglePageDetails data={data} />
                </div>
                <div className="w-1/3 flex">
                  <Order />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
