"use client";

import { HeaderButton } from "@/components/ui/buttons";
import { usePathname } from "next/navigation";

export const AdminHeader = () => {
  const pathname = usePathname();
  return (
    <main>
      <div className="border border-black text-black py-2 pl-8">
        <HeaderButton pathname={pathname} path="/" text="АДМИН" />
      </div>
    </main>
  );
};
