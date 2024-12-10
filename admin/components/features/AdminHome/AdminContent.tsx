import { Header } from "../Both";
import { AddSpaceButton } from "@/components/ui/buttons";

export const AdminContent = () => {
  return (
    <main className="w-full h-[90%] pb-3">
      <Header />
      <div className="pl-8 pt-8 h-full">
        <div className="bg-white h-full rounded-xl">
          <div className="py-5 px-6">
            <div className="flex justify-between items-center">
              <p className="font-Poppins font-bold leading-normal not-italic text-[22px]">
                Space's
              </p>
              <AddSpaceButton />
            </div>
          </div>
          <div className="px-6">qwdefrgthyuthrewthyr</div>
        </div>
      </div>
    </main>
  );
};
