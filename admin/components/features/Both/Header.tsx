"use client";

export const Header = () => {
  return (
    <main>
      <div className="bg-white border border-SecondColor text-black py-2 mt-4 ml-8 px-4 rounded-xl ">
        <div className="">
          <div className="flex justify-end">
            <div className="flex items-center gap-2">
              <span className="font-medium font-Inter text-lg">
                Гэрэлтбаатар
              </span>
              <div className="flex items-center justify-center w-10 h-10 bg-[#405FF212] rounded-[50%]">
                <p className="">Г</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
