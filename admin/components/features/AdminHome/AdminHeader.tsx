"use client";

import { HeaderButton } from "@/components/ui/buttons";
import { DashboardIcon } from "@/components/ui/icons/DashboardIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const AdminHeader = () => {
  const pathname = usePathname();
  return (
    <main>
      <div className="border border-black text-black py-2 pl-8">
        <div className="flex items-center gap-4">
          <Link href={"/"}>
            <HeaderButton pathname={pathname} path="/" text="ADMIN" />
          </Link>
          <Link href={"/dashboard"}>
            <div className="flex items-center gap-2">
              <DashboardIcon pathname={pathname} path="/dashboard" />
              <HeaderButton
                pathname={pathname}
                path="/dashboard"
                text="DASHBOARD"
              />
            </div>
          </Link>
        </div>
        <div className="">
          <p className=""></p>
        </div>
      </div>
    </main>
  );
};
