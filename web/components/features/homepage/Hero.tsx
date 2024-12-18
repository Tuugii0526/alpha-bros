import { Search } from "./Search";

export const Hero = () => {
  return (
    <main className="h-screen w-screen">
      <div
        className="flex flex-col items-center justify-between w-full h-[860px] bg-MainColor"
        style={{
          backgroundSize: "cover",
          backgroundImage: "url('./Hero_Image_UB.jpg')",
        }}
      >
        <div className="container mx-auto max-w-screen-xl">
          <div className="text-MainWhite pt-[180px]">
            <div className="flex flex-col gap-6 max-w-[559px]">
              <p className=" text-7xl not-italic font-semibold leading-[80px] text-MainWhite">
                Өөрт тохирох орчноо олцгооё
              </p>
              <p className=" font-thin not-italic leading-normal text-xl text-MainWhite shadow-lg">
                Өөрсдийн дурсамжаа бүтээцгээе
              </p>
            </div>
            {/*  */}
            <Search />
            {/*  */}
          </div>
        </div>
        {/* <div className="w-full h-[80px] bg-[#F9FBFC] rounded-t-[60px]"></div> */}
      </div>
    </main>
  );
};
