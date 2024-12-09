import { Search } from "./Search";

export const Hero = () => {
  return (
    <main>
      <div
        className="flex flex-col items-center justify-between w-full h-[860px] bg-MainColor"
        style={{
          backgroundSize: "cover",
          backgroundImage: "url('./mainpageBG.jpg')",
        }}
      >
        <div className="container mx-auto ">
          <div className="text-white pt-[180px]">
            <div className="flex flex-col gap-6 max-w-[559px]">
              <p className="font-Poppins text-7xl not-italic font-semibold leading-[80px] text-white">
                Search our want space
              </p>
              <p className="font-Poppins font-medium not-italic leading-normal text-xl text-white">
                Plan, Meet, reach your success
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
