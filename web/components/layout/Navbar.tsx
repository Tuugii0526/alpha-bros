import { NavigationLink } from "@/components/layout/NavigationLink";
import { LightTower } from "@/components/ui/icons/LightTower";
import { User } from "lucide-react";

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
  return (
    <div className="py-8 px-2 flex justify-around items-center">
      <div className="flex gap-4">
        {paths.map((path) => (
          <NavigationLink key={path.id} path={path} />
        ))}
      </div>
      <LightTower />
      <div className="flex items-center gap-4">
        <div className="flex gap-2 border border-white hover:border-green-500 rounded-md p-1 items-center">
          <User />
          <p>Sign in</p>
        </div>
        <div className="border border-white hover:border-green-500 rounded-md p-1 items-center">
          90914944
        </div>
      </div>
    </div>
  );
};
