"use client";

import { LightTower } from "@/components/ui/icons/LightTower";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { User } from "lucide-react";
import { useRouter } from "next/navigation";

const paths = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Menu",
    path: "/menu",
  },
];
export const Navbar = () => {
  const router = useRouter();
  return (
    <div className="py-2 px-2 flex justify-around items-center">
      <div className="flex gap-4">
        {paths.map((path) => (
          <button onClick={() => router.push(`${path.path}`)} key={path.id}>
            {path.name}
          </button>
        ))}
      </div>
      <div className="flex justify-center items-end">
        <div className="flex items-center ">
          <LightTower />
        </div>
        <span>Lighthouse</span>
      </div>
      <div className="flex items-center gap-4">
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
  );
};
