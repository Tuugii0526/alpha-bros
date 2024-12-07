import { HeaderButtonTypes } from "@/data/DataTypes";

export const HeaderButton = ({ pathname, path, text }: HeaderButtonTypes) => {
  return (
    <button>
      <p
        className={`px-4 py-2 font-bold text-sm leading-4 tracking-[-0.2px] ${
          pathname === path ? "text-BrandGreen " : "text-black"
        }`}
      >
        {text}
      </p>
    </button>
  );
};
