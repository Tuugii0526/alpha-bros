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
import { TCategories } from "@/data/DataTypes";
import { useFormik } from "formik";
import { PlaceImageType } from "@/data/DataTypes";

type AddPlaceButtonProps = {
  categoryData: TCategories[];
};

export const AddPlaceButton = ({ categoryData }: AddPlaceButtonProps) => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [placeImage, setPlaceImage] = useState<PlaceImageType>({ image: null });
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [categoryId, setCategoryId] = useState("");

  const BACKEND_END_POINT = process.env.BACKEND_URL;

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setPlaceImage({ image: file });
      const render = new FileReader();
      render.onloadend = () => {
        setImagePreview(render.result as string);
      };
      render.readAsDataURL(file);
    }
  };

  const formik = useFormik({
    initialValues: {
      // Place data--------------------------
      name: "",
      capacity: "",
      description: "",
      ambiance: "",

      province: "",
      distruct: "",
      street: "",
      //Workinghours  data--------------------------
    },
    onSubmit: async (value) => {
      const requestData = {
        ...value,
      };
      const formData = new FormData();
      formData.append("name", requestData.name);
      formData.append("capacity", requestData.capacity);
      formData.append("description", requestData.description);
      formData.append("ambiance", requestData.ambiance);
      formData.append("province", requestData.province);
      formData.append("distruct", requestData.distruct);
      formData.append("street", requestData.street);
      console.log(requestData, "requestData");

      if (categoryId) {
        formData.append("categoryId", categoryId);
      }

      if (placeImage.image) {
        formData.append("image", placeImage.image);
      }

      try {
        const response = await fetch(`${BACKEND_END_POINT}/places`, {
          method: "POST",
          body: formData,
        });
        const data = await response.json();

        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);
      } catch (e) {
        console.log(e);
      }
    },
  });

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
          <form action="" onSubmit={formik.handleSubmit}>
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
            <div className="w-full flex gap-4 p-6 border border-[#E0E0E0] border-x-0 h-[400px]">
              <Tabs defaultValue="account" className="w-full">
                <TabsList className="w-full flex">
                  <TabsTrigger value="Place">Газрын мэдээлэл</TabsTrigger>
                  <TabsTrigger value="Location">Байршил</TabsTrigger>
                  <TabsTrigger value="Workinghours">Ажиллах цаг</TabsTrigger>
                  <TabsTrigger value="Image">Зураг</TabsTrigger>
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
                    value={formik.values.name}
                    onChange={formik.handleChange}
                  />
                  <Input
                    id="capacity"
                    name="capacity"
                    type="number"
                    placeholder="Хүний багтаамж"
                    className="px-3 h-10 rounded-lg w-full"
                    value={formik.values.capacity}
                    onChange={formik.handleChange}
                  />
                  <Input
                    id="description"
                    name="description"
                    type="text"
                    placeholder="Тайлбар"
                    className="px-3 h-10 rounded-lg w-full"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                  />
                  <Input
                    id="ambiance"
                    name="ambiance"
                    type="text"
                    placeholder="Нэмэлт"
                    className="px-3 h-10 rounded-lg w-full"
                    value={formik.values.ambiance}
                    onChange={formik.handleChange}
                  />
                  <Select>
                    <SelectTrigger className="w-full px-3 h-10 rounded-lg placeholder-gray-500">
                      <SelectValue placeholder="Ангилал" />
                    </SelectTrigger>
                    <SelectContent>
                      {categoryData.map((category) => {
                        return (
                          <SelectItem
                            key={category?._id}
                            onClick={() => {
                              setCategoryId(category?._id);
                            }}
                            value={category?._id}
                          >
                            {category?.name}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
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
                    value={formik.values.province}
                    onChange={formik.handleChange}
                  />
                  <Input
                    id="distruct"
                    name="distruct"
                    type="text"
                    placeholder="Дүүрэг"
                    className="px-3 h-10 rounded-lg w-full"
                    value={formik.values.distruct}
                    onChange={formik.handleChange}
                  />
                  <Input
                    id="street"
                    name="street"
                    type="text"
                    placeholder="Гудамж"
                    className="px-3 h-10 rounded-lg w-full"
                    value={formik.values.street}
                    onChange={formik.handleChange}
                  />
                  {/* <Input
                    id="log"
                    name="log"
                    type="text"
                    placeholder="Гудамж"
                    className="px-3 h-10 rounded-lg w-full"
                    value={formik.values.log}
                    onChange={formik.handleChange}
                  />
                  <Input
                    id="street"
                    name="street"
                    type="text"
                    placeholder="Гудамж"
                    className="px-3 h-10 rounded-lg w-full"
                    value={formik.values.street}
                    onChange={formik.handleChange}
                  /> */}
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
                <TabsContent value="Image" className="grid grid-cols-2">
                  <div className="max-w-[210px] w-full h-[122px] p-2 flex flex-col justify-center items-center gap-2 border border-dashed border-[#D6D7DC] bg-[rgba(186,188,196,0.12)] rounded-lg">
                    <p className="text-[#525252] font-poppins text-base font-bold text-center">
                      Газрын зураг аа нэмнэ үү
                    </p>
                    <input
                      type="file"
                      id="uploadFile1"
                      name="uploadFile1"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                    <label
                      htmlFor="uploadFile1"
                      className="px-3 py-2 rounded-lg bg-SecondColor text-white font-inter text-base font-bold cursor-pointer"
                    >
                      Зураг нэмэх
                    </label>
                  </div>
                  {imagePreview && (
                    <div className="mt-4">
                      <img
                        src={imagePreview}
                        alt="Food Preview"
                        className="w-full h-[200px] object-contain border border-black border-dashed p-2"
                      />
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </div>
            <div className="flex items-center justify-end gap-4 pt-6">
              <button
                type="button"
                className="p-2 text-SecondColor font-inter text-base font-bold"
                onClick={() => {
                  formik.resetForm();
                  setImagePreview(null);
                }}
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
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
