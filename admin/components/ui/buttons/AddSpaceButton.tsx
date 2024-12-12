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
import { useState } from "react";
import { SpaceImageType } from "@/data/DataTypes";
import { useFormik } from "formik";

export const AddSpaceButton = () => {
  const [spaceImage, setSpaceImage] = useState<SpaceImageType>({ image: null });
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const BACKEND_END_POINT = process.env.BACKEND_URL;

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSpaceImage({ image: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      capacity: "",
      description: "",
      location: "",
      ambiance: "",
      workingHours: "",
      catergory: "",
    },
    onSubmit: async (value) => {
      const requestData = {
        ...value,
      };
      const formData = new FormData();
      formData.append("name", requestData.name);
      formData.append("capacity", requestData.capacity);
      formData.append("description", requestData.description);
      formData.append("location", requestData.location);
      formData.append("ambiance", requestData.ambiance);
      formData.append("workingHours", requestData.workingHours);
      formData.append("catergory", requestData.catergory);

      if (spaceImage.image) {
        formData.append("image", spaceImage.image);
        // console.log("ajilah shuu append");
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
          <div className="font-normal leading-normal not-italic text-base">
            Газар нэмэх
          </div>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <form action="" onSubmit={formik.handleSubmit}>
            <DialogTitle>
              <div className="font-bold leading-[130%] text-2xl">
                Газар үүсгэх
              </div>
            </DialogTitle>
            <DialogDescription>
              <div className="pt-1 pb-3">
                Шинэ газар үүсгэхийн тулд доорх талбаруудыг бөглөнө үү.
              </div>
            </DialogDescription>
            <div className="flex flex-col gap-4 p-6 border border-[#E0E0E0] border-x-0">
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
                id="location"
                name="location"
                type="text"
                placeholder="Байршил"
                className="px-3 h-10 rounded-lg w-full"
                value={formik.values.location}
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
              <Input
                id="workingHours"
                name="workingHours"
                type="text"
                placeholder="Ажлын цаг"
                className="px-3 h-10 rounded-lg w-full"
                value={formik.values.workingHours}
                onChange={formik.handleChange}
              />
              <Select>
                <SelectTrigger className="w-full px-3 h-10 rounded-lg placeholder-gray-500">
                  <SelectValue placeholder="Ангилал" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Meeting">Meeting</SelectItem>
                  <SelectItem value="Dating">Dating</SelectItem>
                </SelectContent>
              </Select>
              <div className="grid grid-cols-2">
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
              </div>
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
