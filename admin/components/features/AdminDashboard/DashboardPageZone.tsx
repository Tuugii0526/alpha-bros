import { AdminSideBar } from "../AdminHome";
import { DashboardContent } from "./DashboardContent";

export const DashboardPageZone = () => {
  return (
    <main className="w-full">
      <div className="w-full fixed z-40 h-full">
        <div className="container m-auto  h-full rounded-r-3xl">
          <div className="flex w-full h-full text-white">
            <AdminSideBar />
            <DashboardContent />
          </div>
        </div>
      </div>
    </main>
  );
};
