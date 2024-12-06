import { Search } from "./Search";

export const Hero = () => {
  return (
    <main>
      <div className="flex flex-col items-center justify-between w-full h-[860px] bg-MainColor">
        <div className="container mx-auto border border-black ">
          <div className="text-white pt-[180px]">
            <div className="flex flex-col gap-6 max-w-[559px]">
              <p className="font-Poppins text-7xl not-italic font-semibold leading-[80px] text-white">
                Buy, sell, and showcase NFTs
              </p>
              <p className="font-Poppins font-medium not-italic leading-normal text-xl text-white">
                Create, Explore, & Collect Digital Art NFTs.
              </p>
            </div>
            <Search />
          </div>
        </div>
        <div className="w-full h-[80px] bg-[#F9FBFC] rounded-t-[60px]"></div>
      </div>
    </main>
  );
};
