import { LocationIcon, PeopleIcon, SeatIcon } from "@/components/ui/icons";

import WorkingTimeCard from "./WorkingTimeCard";
import { TPlaces } from "@/data/DataTypes";
type TSinglePageProps = {
  place: TPlaces[] | [];
};

export const PageBuild = ({ place }: TSinglePageProps) => {
  return (
    <div className="w-screen flex justify-center bg-[#F9FBFC] border-t ">
      {place.map((data) => {
        return (
          <div
            className="w-full container max-w-screen-xl py-10"
            key={data._id}
          >
            <div className="container mx-auto h-full">
              <div className="grid grid-cols-4 grid-rows-2 gap-2 h-[646px]">
                <div
                  className="h-auto w-full rounded-2xl col-span-2 row-span-2"
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
              <div className="flex justify-between mt-12 w-full">
                <div className="w-full">
                  <div className="pr-10 w-full">
                    <div className="flex bg-white border-[#e5e7eb] rounded-xl p-4 gap-6 w-full">
                      <div className=" flex flex-col gap-6  w-1/2">
                        <div className=" flex w-full justify-between">
                          <div className="py-1 px-[10px] bg-[#405FF212] rounded-full">
                            <p className="font-Poppins not-italic font-bold text-[#405FF2] text-xs">
                              {data.category.name}
                            </p>
                          </div>
                        </div>
                        <div className="">
                          <p className="font-Poppins font-semibold not-italic text-2xl">
                            {data.name}
                          </p>
                        </div>
                        <div className="flex gap-2 items-center">
                          <LocationIcon />
                          <p className="font-Inter not-italic font-medium text-base">
                            {/* {data.location} */}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center justify-center w-10 h-10 bg-[#405FF212] rounded-[50%]">
                            <p className="">Г</p>
                          </div>
                          <p className="font-medium font-Inter text-lg text-[#6b7280]">
                            Customer by
                          </p>
                          <span className="font-medium font-Inter text-lg">
                            Гэрэлтбаатар
                          </span>
                        </div>
                        <div className="w-full border border-[#e5e7eb]"></div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <PeopleIcon />
                            <p className="font-Poppins text-base text-[#374151] not-italic ">
                              {data.capacity}
                            </p>
                          </div>
                          <div className="flex items-center gap-1">
                            <SeatIcon />
                            <p className="font-Poppins text-base text-[#374151] not-italic ">
                              20
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* ///////////////////// */}
                      <div className="w-1/2 flex flex-col    items-center justify-center gap-10">
                        <div className="w-full font-Poppins font-semibold not-italic text-2xl text-center">
                          Hours
                        </div>
                        <div>
                          {Object.entries(data.workingHours).map(
                            ([day, hours]) => (
                              <div key={day}>
                                {
                                  <WorkingTimeCard
                                    day={
                                      day.charAt(0).toUpperCase() + day.slice(1)
                                    }
                                    open={hours.open}
                                    close={hours.close}
                                  />
                                }
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="w-full mt-12 ">
                      <div className="bg-white flex flex-col gap-6 p-4  w-full border border-[#e5e7eb] rounded-xl">
                        <p className="font-Poppins font-semibold not-italic text-2xl">
                          {data.ambiance}
                        </p>
                        <div className="border border-[e5e7eb] w-16"></div>
                        <p className="font-Poppins text-base text-[#374151] not-italic">
                          {data.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-[#e5e7eb] max-w-[600px] h-[400px] w-full p-4 rounded-xl shadow-lg"></div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
