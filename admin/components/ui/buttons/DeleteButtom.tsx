"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { useFormik } from "formik";
import { useState } from "react";

type DeleteButtomProps = {
  dataName: string;
  dateID: string;
};

export const DeleteButtom = ({ dataName, dateID }: DeleteButtomProps) => {
  const [deletePlaceID, setDeletePlaceID] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [sefaButton, setSefaButton] = useState(false);
  const BACKEND_END_POINT = process.env.BACKEND_URL;
  const safaValue = dataName;

  console.log(inputValue, "inputValue");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value); // input-ийн утгыг авна
  };

  const formik = useFormik({
    initialValues: {},

    onSubmit: async (value) => {
      console.log(value, "value");
      const valueData = {
        ...value,
      };

      const option = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(valueData),
      };
      try {
        const response = await fetch(`${BACKEND_END_POINT}/places`, option);
        const data = await response.json();
        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);
      } catch (e) {
        console.log(e);
      }
    },
  });

  return (
    <AlertDialog>
      <AlertDialogTrigger>Устгах</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Газар устгах</AlertDialogTitle>
          <AlertDialogDescription className=" bg-[#ffedef] px-4 rounded-lg py-2">
            <span className="text-sm not-italic text-red-600">
              <strong>Анхааруулга:</strong> Энэ үйлдлийг буцаах боломжгүй. Та
              итгэлтэй байна уу.
            </span>
          </AlertDialogDescription>
        </AlertDialogHeader>

        <main className="flex flex-col gap-2 py-5 border border-x-0">
          <div className="text-xs not-italic">
            Үргэлжлүүлэхийн тулд <span className="font-bold">{safaValue}</span>{" "}
            газрын нэрийг оруулна уу:
          </div>
          <Input
            id="inputValue"
            name="inputValue"
            value={inputValue}
            onChange={handleInputChange}
            type="text"
            className="px-3 h-10 rounded-lg w-full"
          />
        </main>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => setDeletePlaceID(dateID)}
            className="bg-red-600 hover:bg-red-400"
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
