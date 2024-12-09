import { HeaderButtonTypes } from "@/data/DataTypes";

export const HeaderButton = ({ pathname, path, text }: HeaderButtonTypes) => {
  return (
    <button>
      <p
        className={`pr-4 py-2 font-bold text-[17px] leading-4 tracking-[-0.2px] ${
          pathname === path ? "text-SecondColor " : "text-black"
        }`}
      >
        {text}
      </p>
    </button>
  );
};
