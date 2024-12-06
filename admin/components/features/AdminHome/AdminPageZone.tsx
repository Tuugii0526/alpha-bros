import { AdminContent } from "./AdminContent";
import { AdminHeader } from "./AdminHeader";
import { AdminSideBar } from "./AdminSideBar";

export const AdminPageZone = () => {
  return (
    <main>
      <main>
        <div className="w-full fixed z-40 h-full">
          <div className="container m-auto  h-full rounded-r-3xl">
            <div className="flex w-full h-full text-white">
              <AdminSideBar />
              <AdminContent />
            </div>
          </div>
        </div>
      </main>
    </main>
  );
};
