"use client";

import { LightTower } from "@/components/ui/icons/LightTower";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const paths = [
  {
    id: 1,
    name: "Нүүр хуудас",
    path: "/",
  },
  {
    id: 2,
    name: "Орчиноор хайх",
    path: "/menu",
  },
];
export const Navbar = () => {
  const router = useRouter();
  return (
    <div className="w-screen flex  justify-center bg-[#F9FBFC] py-2">
      <div className="max-w-screen-xl container justify-between w-full flex">
        <div className="flex gap-4 justify-start">
          {paths.map((path) => (
            <button
              className="border p-2 rounded-lg"
              onClick={() => router.push(`${path.path}`)}
              key={path.id}
            >
              {path.name}
            </button>
          ))}
        </div>
        <div className="flex justify-center items-end">
          <div className="flex items-center ">
            <LightTower />
          </div>
          <span>Луужин</span>
        </div>
        <div className="flex items-center justify-end gap-4">
          <SignedOut>
            <SignInButton>
              <button className="p-1 border border-green-200 rounded-md">
                Sign in
              </button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton
              showName
              appearance={{
                elements: {
                  userButtonBox: "bg-green-200 border border-2 rounded-md",
                },
              }}
            />
          </SignedIn>
        </div>
      </div>
    </div>
  );
};
