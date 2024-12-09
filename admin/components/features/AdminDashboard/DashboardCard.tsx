export const DashboardCard = () => {
  return (
    <div className="flex justify-between">
      <div className="px-6 py-4 flex items-center">
        <p className="text-[#3F4145] font-Inter text-xs font-semibold leading-[16px] tracking-[-0.12px] w-[182px]">
          Order name
        </p>
      </div>
      <div className="px-6 py-4 flex items-center">
        <p className="text-[#3F4145] font-Inter text-xs font-semibold leading-[16px] tracking-[-0.12px] w-[92px]">
          Buyer info
        </p>
      </div>
      <div className="px-6 py-4 flex items-center">
        <p className="text-[#3F4145] font-Inter text-xs font-semibold leading-[16px] tracking-[-0.12px] w-[182px]">
          Payment
        </p>
      </div>
      <div className="px-6 py-4 flex items-center">
        <p className="text-[#3F4145] font-Inter text-xs font-semibold leading-[16px] tracking-[-0.12px] w-[182px]">
          Address
        </p>
      </div>
      <div className="px-6 py-4 flex items-center">
        <p className="text-[#3F4145] font-Inter text-xs font-semibold leading-[16px] tracking-[-0.12px] w-[80px] ">
          Space state
        </p>
      </div>
      <div className="px-6 py-4 flex items-center">
        <div className="w-5 h-5"></div>
      </div>
    </div>
  );
};
