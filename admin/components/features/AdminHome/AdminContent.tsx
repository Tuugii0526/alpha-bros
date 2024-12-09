import { AddSpaceButton } from "@/components/ui/buttons";
import { Header } from "../Both";

export const AdminContent = () => {
  return (
    <main className="w-full h-full pb-3">
      <Header />
      <div className="text-black pl-8 pt-8 h-[90%]">
        <div className="bg-white p-3 border border-SecondColor rounded-xl h-full px-4 py-2">
          <div className="flex justify-between items-center">
            <p className="font-Poppins font-bold leading-normal not-italic text-[22px]">
              Space's
            </p>
            <AddSpaceButton />
          </div>
        </div>
      </div>
    </main>
  );
};
