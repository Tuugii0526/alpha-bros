"use client";

import {
  AdminIcon,
  DashboardIcon,
  LightHouseIcon,
} from "@/components/ui/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const SideBar = () => {
  const pathname = usePathname();
  return (
    <main>
      <div className="flex flex-col gap-10 max-w-[302px] w-[280px] h-full bg-MainWhite py-[26px] rounded-r-[30px]">
        <div className="flex items-end">
          <LightHouseIcon />
          <p className="font-Poppins font-bold text-[22px] w-auto text-SecondColor not-italic leading-[norma]">
            LIGHT HOUSE
          </p>
        </div>
        <div className="flex flex-col gap-[26px]">
          <div className="flex flex-col gap-6">
            <div
              className={`${
                pathname === "/"
                  ? "border-SecondColor bg-SecondColor/60 text-MainWhite"
                  : " text-SecondColor border-MainWhite  bg-MainWhite"
              }   hover:border-SecondColor border border-r-0 py-2 px-3 rounded-l-full    duration-200 `}
            >
              <Link href={"/"}>
                <div className="flex items-center gap-2">
                  <AdminIcon pathname={pathname} path="/" />
                  <p className="font-Poppins font-bold text-sm w-full not-italic leading-normal">
                    ADMIN
                  </p>
                </div>
              </Link>
            </div>
            <div
              className={`${
                pathname === "/dashboard"
                  ? "border-SecondColor bg-SecondColor/60 text-MainWhite"
                  : " text-SecondColor border-MainWhite  bg-MainWhite"
              } border hover:border-SecondColor border-r-0 py-2 px-3 rounded-l-full  duration-200`}
            >
              <Link href={"/dashboard"}>
                <div className="flex items-center gap-2">
                  <DashboardIcon pathname={pathname} path="/dashboard" />
                  <p className="font-Poppins font-bold text-sm w-full not-italic leading-normal">
                    DASHBOARD
                  </p>
                </div>
              </Link>
            </div>
            {/* <div
              className={`${
                pathname === "/"
                  ? "border-slate-100 bg-slate-100 text-MainWhite"
                  : " text-SecondColor border-MainWhite  bg-MainWhite"
              } border border-l-0 py-2 px-3 rounded-l-full `}
            >
              qwertyui
            </div>
            <div
              className={`${
                pathname === "/"
                  ? "border-slate-100 bg-slate-100 text-MainWhite"
                  : " text-SecondColor border-MainWhite  bg-MainWhite"
              } border border-l-0 py-2 px-3 rounded-l-full `}
            >
              qwertyui
            </div> */}
          </div>
        </div>
      </div>
    </main>
  );
};
