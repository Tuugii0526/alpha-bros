import { Header } from "../Both";
import { DashboardCard } from "./DashboardCard";

export const DashboardContent = () => {
  return (
    <main className="w-full h-[90%] pb-3">
      <Header />
      <div className="pl-8 pt-8 h-full">
        <div className="bg-white h-full rounded-xl">
          <div className="py-5 px-6 bg-MainWhite rounded-t-xl">
            <p className="text-[#121316]  font-bold leading-normal not-italic text-[22px]">
              Admin dashboard
            </p>
          </div>
          <div className="flex justify-between bg-slate-100">
            <div className="px-6 py-3 flex items-center ">
              <p className="text-[#3F4145] font-Inter text-xs font-semibold leading-[16px] tracking-[-0.12px] w-[182px]">
                Order name
              </p>
            </div>
            <div className="px-6 py-3 flex items-center">
              <p className="text-[#3F4145] font-Inter text-xs font-semibold leading-[16px] tracking-[-0.12px] w-[92px]">
                Buyer info
              </p>
            </div>
            <div className="px-6 py-3 flex items-center">
              <p className="text-[#3F4145] font-Inter text-xs font-semibold leading-[16px] tracking-[-0.12px] w-[182px]">
                Payment
              </p>
            </div>
            <div className="px-6 py-3 flex items-center">
              <p className="text-[#3F4145] font-Inter text-xs font-semibold leading-[16px] tracking-[-0.12px] w-[182px]">
                Address
              </p>
            </div>
            <div className="px-6 py-3 flex items-center">
              <p className="text-[#3F4145] font-Inter text-xs font-semibold leading-[16px] tracking-[-0.12px] w-[80px] ">
                Space state
              </p>
            </div>
            <div className="px-6 py-3 flex items-center">
              <div className="w-5 h-5"></div>
            </div>
          </div>
          <div className="w-full bg-MainWhite">
            <DashboardCard />
            <DashboardCard />
            <DashboardCard />
            <DashboardCard />
            <DashboardCard />
            <DashboardCard />
            <DashboardCard />
            <DashboardCard />
            <DashboardCard />
            <DashboardCard />
            <DashboardCard />
            <DashboardCard />
            <DashboardCard />
            <DashboardCard />
            <DashboardCard />
          </div>
        </div>
      </div>
    </main>
  );
};
