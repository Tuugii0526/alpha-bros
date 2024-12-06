import { Search } from "./Search";

export const Hero = () => {
  return (
    <div className="w-full h-[700px] hero-background">
      <div>
        <div className="w-[559px] p-10">
          <p className="text-[50px]">Buy, sell, and showcase NFTs</p>
          <p className="text-[20px]">
            Create, Explore, & Collect Digital Art NFTs.
          </p>
        </div>
        <div className="pt-10">
          <Search />
        </div>
      </div>
    </div>
  );
};
