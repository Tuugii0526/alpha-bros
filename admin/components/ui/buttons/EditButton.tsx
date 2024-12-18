"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const EditButton = () => {
  return (
    <Dialog>
      <DialogTrigger className="w-full flex items-start">Засах</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <p className=" font-bold leading-[130%] text-2xl">Edit</p>
          </DialogTitle>
          <DialogDescription>
            Please fill out the fields below to create a new space.
          </DialogDescription>
          <div className="">wqdefwrgdfnhgj</div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
