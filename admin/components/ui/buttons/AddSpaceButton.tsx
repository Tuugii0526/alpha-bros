import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const AddSpaceButton = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="py-2 px-4 bg-SecondColor text-white rounded">
          <p className="font-Poppins font-normal leading-normal not-italic text-base">
            Add space
          </p>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <p className="font-Poppins font-bold leading-[130%] text-2xl">
              Create space
            </p>
          </DialogTitle>
          <DialogDescription>
            Please fill out the fields below to create a new space.
          </DialogDescription>
          <div className="flex flex-col gap-4 p-6 border border-[#E0E0E0] border-x-0">
            <input
              type="text"
              placeholder="Name"
              className="px-3 h-10 bg-[#405FF212] rounded-lg w-full outline-SecondColor text-SecondColor"
            />
            <input
              type="text"
              placeholder="Description"
              className="px-3 h-10 bg-[#405FF212] rounded-lg w-full outline-SecondColor text-SecondColor"
            />
            <input
              type="text"
              placeholder="Details"
              className="px-3 h-10 bg-[#405FF212] rounded-lg w-full outline-SecondColor text-SecondColor"
            />
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
