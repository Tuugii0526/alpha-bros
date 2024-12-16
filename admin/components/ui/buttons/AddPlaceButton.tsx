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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { TCategories } from "@/data/DataTypes";
import { useFormik, Field } from "formik";
import { PlaceImageType } from "@/data/DataTypes";
import { TDistrict } from "@/data/DataTypes";
import { restDayType } from "@/data/DataTypes";

const districts: TDistrict[] = [
  { id: 1, name: "Сүхбаатар", idName: "Sukhbaatar" },
  { id: 2, name: "Чингэлтэй", idName: "chingeltei" },
  { id: 3, name: "Баянзүрх", idName: "baynzurkh" },
  { id: 4, name: "Баянгол", idName: "bayangol" },
  { id: 5, name: "Сонгино-Хайрхан", idName: "songino-khairkhan" },
  { id: 6, name: "Хан-уул", idName: "khan-uul" },
  { id: 7, name: "Налайх", idName: "nalaih" },
  { id: 8, name: "Багануур", idName: "baganuur" },
  { id: 9, name: "Багахангай", idName: "bagahangai" },
];

const restDays: restDayType[] = [
  { valueRestDay: "1", name: "Даваа" },
  { valueRestDay: "2", name: "Мягмар" },
  { valueRestDay: "3", name: "Лхагва" },
  { valueRestDay: "4", name: "Пүрэв" },
  { valueRestDay: "5", name: "Баасан" },
  { valueRestDay: "6", name: "Бямба" },
  { valueRestDay: "7", name: "Ням" },
];

type AddPlaceButtonProps = {
  categoryData: TCategories[];
};

export const AddPlaceButton = ({ categoryData }: AddPlaceButtonProps) => {
  const [placeImage, setPlaceImage] = useState<PlaceImageType>({ image: null });
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [districtData, setDistrictData] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [restDayData, setRestDayData] = useState("");

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

  console.log(categoryId, "categoryId");
  console.log(restDayData, "restDayData");
  console.log(districtData, "districtData");

  const formik = useFormik({
    initialValues: {
      name: "",
      capacity: "",
      description: "",
      ambiance: "",
      province: "",
      street: "",
      weekdaysOpen: "",
      weekdaysClose: "",
      weekendOpen: "",
      weekendClose: "",
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
      formData.append("street", requestData.street);
      formData.append("weekdaysOpen", requestData.weekdaysOpen);
      formData.append("weekdaysClose", requestData.weekdaysClose);
      formData.append("weekendOpen", requestData.weekendOpen);
      formData.append("weekendClose", requestData.weekendClose);

      if (restDayData) {
        formData.append("closedDay", restDayData);
      }

      if (districtData) {
        formData.append("district", districtData);
      }

      if (categoryId) {
        formData.append("category", categoryId);
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
      } catch (error) {
        console.log(error);
        // throw new Error();
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
                  <Select onValueChange={(value) => setCategoryId(value)}>
                    <SelectTrigger className="w-full px-3 h-10 rounded-lg placeholder-gray-500">
                      <SelectValue placeholder="Ангилал" />
                    </SelectTrigger>
                    <SelectContent>
                      {categoryData.map((category) => {
                        return (
                          <SelectItem
                            key={category?._id}
                            value={category?._id}
                            // onChange={() => {
                            //   setCategoryId(category?._id);
                            // }}
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
                  <Select onValueChange={(value) => setDistrictData(value)}>
                    <SelectTrigger className="w-full px-3 h-10 rounded-lg placeholder-gray-500">
                      <SelectValue placeholder="Дүүрэг" />
                    </SelectTrigger>
                    <SelectContent>
                      {districts.map((district) => {
                        return (
                          <SelectItem
                            key={district?.idName}
                            value={district?.idName}
                            onClick={() => setDistrictData(district?.idName)}
                          >
                            {district?.name}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                  <Input
                    id="street"
                    name="street"
                    type="text"
                    placeholder="Гудамж"
                    className="px-3 h-10 rounded-lg w-full"
                    value={formik.values.street}
                    onChange={formik.handleChange}
                  />
                </TabsContent>
                <TabsContent
                  value="Workinghours"
                  className="w-full flex flex-col items-center justify-center gap-4"
                >
                  <div className="flex flex-col gap-4 w-full">
                    <div className="flex flex-col gap-3">
                      <p className="w-full text-black font-poppins text-base font-bold text-center">
                        Ажлын өдрүүд
                      </p>
                      <div className="flex justify-between px-3">
                        <div className="flex items-center justify-center">
                          <label
                            className="w-24 text-[#525252] font-poppins text-base font-bold text-center"
                            htmlFor="weekdaysOpen"
                          >
                            Нээх цаг:
                          </label>
                          <Input
                            type="time"
                            id="weekdaysOpen"
                            className="px-3 h-10 rounded-lg w-auto"
                            {...formik.getFieldProps("weekdaysOpen")} // Зөв хэрэглээ
                          />
                        </div>
                        <div className="flex items-center justify-center">
                          <label
                            className="w-24 text-[#525252] font-poppins text-base font-bold text-center"
                            htmlFor="weekdaysClose"
                          >
                            Хаах цаг:
                          </label>
                          <Input
                            type="time"
                            id="weekdaysClose"
                            className="px-3 h-10 rounded-lg w-auto"
                            {...formik.getFieldProps("weekdaysClose")} // Зөв хэрэглээ
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3">
                      <p className="w-full text-black font-poppins text-base font-bold text-center">
                        Амралтын өдрүүд
                      </p>
                      <div className="flex justify-between px-3">
                        <div className="flex items-center justify-center">
                          <label
                            className="w-24 text-[#525252] font-poppins text-base font-bold text-center"
                            htmlFor="weekendOpen"
                          >
                            Нээх цаг:
                          </label>
                          <Input
                            type="time"
                            id="weekendOpen"
                            className="px-3 h-10 rounded-lg w-auto"
                            {...formik.getFieldProps("weekendOpen")} // Зөв хэрэглээ
                          />
                        </div>
                        <div className="flex items-center justify-center">
                          <label
                            className="w-24 text-[#525252] font-poppins text-base font-bold text-center"
                            htmlFor="weekendClose"
                          >
                            Хаах цаг:
                          </label>
                          <Input
                            type="time"
                            id="weekendClose"
                            className="px-3 h-10 rounded-lg w-auto"
                            {...formik.getFieldProps("weekendClose")} // Зөв хэрэглээ
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3">
                      <p className="w-full text-black font-poppins text-base font-bold text-center">
                        Амрах өдөр
                      </p>
                      <Select onValueChange={(value) => setRestDayData(value)}>
                        <SelectTrigger className="w-full px-3 h-10 rounded-lg placeholder-gray-500">
                          <SelectValue placeholder="Өдрөө сонгоно уу" />
                        </SelectTrigger>
                        <SelectContent>
                          {restDays.map((restDay) => {
                            return (
                              <SelectItem
                                key={restDay?.name}
                                value={restDay?.valueRestDay}
                              >
                                {restDay?.name}
                              </SelectItem>
                            );
                          })}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
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
