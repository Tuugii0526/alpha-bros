"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";

import { Calendar } from "@/components/ui/calendar";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

export const AddPlaceButton = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  console.log("working houre", date);

  return (
    <Dialog>
      <DialogTrigger>
        <div className="py-2 px-4 bg-SecondColor text-white rounded">
          <span className="font-normal leading-normal not-italic text-base">
            Газар нэмэх
          </span>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <span className="font-bold leading-[130%] text-2xl">
              Газар үүсгэх
            </span>
          </DialogTitle>
          <DialogDescription>
            <span className="pt-1 pb-3">
              Шинэ газар үүсгэхийн тулд доорх талбаруудыг бөглөнө үү.
            </span>
          </DialogDescription>
          <div className="w-full flex gap-4 p-6 border border-[#E0E0E0] border-x-0">
            <Tabs defaultValue="account" className="w-full">
              <TabsList className="w-full flex">
                <TabsTrigger value="Place">Place</TabsTrigger>
                <TabsTrigger value="Location">Location</TabsTrigger>
                <TabsTrigger value="Category">Category</TabsTrigger>
                <TabsTrigger value="Workinghours">Working hours</TabsTrigger>
              </TabsList>
              <TabsContent
                value="Place"
                className="w-[400px] flex flex-col gap-4"
              >
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Нэр"
                  className="px-3 h-10 rounded-lg w-full"
                />
                <Input
                  id="capacity"
                  name="capacity"
                  type="number"
                  placeholder="Хүний багтаамж"
                  className="px-3 h-10 rounded-lg w-full"
                />
                <Input
                  id="description"
                  name="description"
                  type="text"
                  placeholder="Тайлбар"
                  className="px-3 h-10 rounded-lg w-full"
                />
                <Input
                  id="ambiance"
                  name="ambiance"
                  type="text"
                  placeholder="Нэмэлт"
                  className="px-3 h-10 rounded-lg w-full"
                />
              </TabsContent>
              <TabsContent
                value="Location"
                className="w-[400px] flex flex-col gap-4"
              >
                <Input
                  id="province"
                  name="province"
                  type="text"
                  placeholder="Хот, аймаг"
                  className="px-3 h-10 rounded-lg w-full"
                />
                <Input
                  id="distruct"
                  name="distruct"
                  type="text"
                  placeholder="Дүүрэг"
                  className="px-3 h-10 rounded-lg w-full"
                />
                <Input
                  id="street"
                  name="street"
                  type="text"
                  placeholder="Гудамж"
                  className="px-3 h-10 rounded-lg w-full"
                />
              </TabsContent>
              <TabsContent
                value="Category"
                className="w-[400px] flex flex-col gap-4"
              >
                <Select>
                  <SelectTrigger className="w-full px-3 h-10 rounded-lg placeholder-gray-500">
                    <SelectValue placeholder="Ангилал" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Meeting">Meeting</SelectItem>
                    <SelectItem value="Dating">Dating</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  id="ambiance"
                  name="ambiance"
                  type="text"
                  placeholder="Нэмэлт"
                  className="px-3 h-10 rounded-lg w-full"
                />
              </TabsContent>
              <TabsContent
                value="Workinghours"
                className="w-full flex items-center justify-center gap-4"
              >
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                />
              </TabsContent>
            </Tabs>
          </div>
          <div className="flex items-center justify-end gap-4 pt-6">
            <button
              type="button"
              className="p-2 text-SecondColor font-inter text-base font-bold"
            >
              Арилгах
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-[4px] bg-SecondColor text-white font-inter text-base font-bold"
            >
              Үргэлжлүүлэх
            </button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
