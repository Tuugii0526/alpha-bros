import { SideBar } from "../Both";
import { DashboardContent } from "./DashboardContent";

export const DashboardPageZone = () => {
  return (
    <main>
      <div className="w-full fixed z-40 h-full">
        <div className="container mx-auto  h-full rounded-r-3xl">
          <div className="flex w-full h-full">
            <SideBar />
            <DashboardContent />
          </div>
        </div>
      </div>
    </main>
  );
};
