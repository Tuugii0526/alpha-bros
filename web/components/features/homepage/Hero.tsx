import { LocationIcon } from "@/components/ui/icons";
import { Search } from "./Search";

export const Hero = () => {
  return (
    <main>
      <div className="w-full h-[860px] bg-MainColor">
        <div className="container m-auto border border-black">
          <div className="text-white pt-[200px]">
            <div className="flex flex-col gap-6 max-w-[559px]">
              <p className="font-Poppins text-7xl not-italic font-semibold leading-[80px] text-white">
                Buy, sell, and showcase NFTs
              </p>
              <p className="font-Poppins font-medium not-italic leading-normal text-xl text-white">
                Create, Explore, & Collect Digital Art NFTs.
              </p>
            </div>
            <div className="flex items-center justify-center pt-[118px]">
              <div className="flex bg-white max-w-[860px] w-full rounded-[50px]">
                <div className="flex items-center gap-3 py-6 px-12">
                  <LocationIcon />
                  <p className="font-Poppins text-lg font-semibold leading-7 not-italic text-black">
                    Location
                  </p>
                </div>
                <div className="flex items-center gap-3 py-6 px-12">
                  <div className="w-7 h-7 border border-black"></div>
                  <p className="font-Poppins text-lg font-semibold leading-7 not-italic text-black">
                    Select space
                  </p>
                </div>
                <div className="h-full border border-black"></div>
                <div className="flex items-center gap-3 py-6 px-12">
                  <div className="w-7 h-7 border border-black"></div>
                  <p className="font-Poppins text-lg font-semibold leading-7 not-italic text-black">
                    Add guests
                  </p>
                </div>
                <button></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

{
  /* <div className=""><Search /></div> */
}
