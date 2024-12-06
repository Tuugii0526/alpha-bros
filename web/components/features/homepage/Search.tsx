import {
  FilterIcon,
  GuestsIcon,
  LocationIcon,
  SearchIcon,
} from "@/components/ui/icons";

export const Search = () => {
  return (
    <div className="flex items-center justify-center pt-[120px]">
      <div className="flex items-center justify-between bg-white max-w-[860px] w-full rounded-[50px]">
        <div className="flex items-center gap-3 py-6 px-12">
          <LocationIcon />
          <p className="font-Poppins text-lg font-semibold leading-7 not-italic text-black">
            Location
          </p>
        </div>
        <div className="h-[44px] border-[0.5px] border-[#E5E7EB]"></div>
        <div className="flex items-center gap-3 py-6 px-12">
          <FilterIcon />
          <p className="font-Poppins text-lg font-semibold leading-7 not-italic text-black">
            Select space
          </p>
        </div>
        <div className="h-[44px] border-[0.5px] border-[#E5E7EB]"></div>
        <div className="flex items-center gap-3 py-6 px-12">
          <GuestsIcon />
          <p className="font-Poppins text-lg font-semibold leading-7 not-italic text-black">
            Add guests
          </p>
        </div>
        <div className="pl-[10px] pr-[10px]">
          <button className="w-16 h-16 bg-[#4F46E5] p-5 rounded-[50%]">
            <SearchIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
