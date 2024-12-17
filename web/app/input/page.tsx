"use client";

import { useState } from "react";

export default function Page() {
  // Define types for formData and previews
  const [formData, setFormData] = useState<{ images?: File[] }>({});
  const [previews, setPreviews] = useState<string[]>([]);

  // Type the event parameter for handleFileChange
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return; // Guard against null
    const files = Array.from(e.target.files); // Convert
    const filePreviews = files.map((file) => URL.createObjectURL(file));
    setFormData((prevData) => ({
      ...prevData,
      images: files,
    }));
    setPreviews(filePreviews);
  };

  return (
    <div className="w-full">
      <label
        htmlFor="imageUpload"
        className="block mb-2 text-sm font-medium text-gray-300"
      >
        Upload Images
      </label>
      <input
        type="file"
        id="imageUpload"
        name="images"
        multiple
        accept="image/*"
        onChange={handleFileChange}
        required
      />
      {/* Image Previews */}
      {previews.length > 0 && (
        <div className="mt-4 grid grid-cols-3 gap-4">
          {previews.map((preview, index) => (
            <img
              key={index}
              src={preview}
              alt={`Preview ${index + 1}`}
              className="object-cover w-full h-32 rounded-md"
            />
          ))}
        </div>
      )}
    </div>
  );
}
