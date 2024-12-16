"use client";
import { PathType } from "@/types/DataTypes";
import { usePathname } from "next/navigation";
export const NavigationLink = ({ path }: { path: PathType }) => {
  const pathName = usePathname();
  return (
    <button
      className={`p-1 rounded-md border border-white hover:border-green-500 ${
        pathName == path.path ? "text-green-500" : ""
      } `}
    >
      {path.name}
    </button>
  );
};
