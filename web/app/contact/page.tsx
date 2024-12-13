"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const ContactUs = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const router = useRouter();
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_koecf9r",
          "template_x2pdr6o",
          form.current,
          "9zEptgAYsNPwHVk06"
        )
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );

      router.push("/");
      toast("You have successfull emailed a message");
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-start p-10 bg-gradient-to-r from-cyan-100 to-green-200 rounded-lg shadow-lg max-w-5xl mx-auto">
      {/* Contact Info Section */}
      <div className="flex-1 mb-8 md:mb-0 md:pr-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Don't be a stranger just say
        </h1>
        <p className="text-gray-600 mb-6">
          Thank you for your interest in our services. Please fill out the form
          below or email us at{" "}
          <a
            href="mailto: aicode744@gmail.com"
            className="text-blue-600 underline"
          >
            aicode744@gmail.com
          </a>
          .
        </p>
        <ul className="space-y-3 text-gray-700">
          <li>
            <i className="fas fa-map-marker-alt"></i> office is located in
            pinecone
          </li>
          <li>
            <i className="fas fa-phone-alt"></i> 99119093
          </li>
          <li>
            <i className="fas fa-envelope"></i>{" "}
            <a
              href="mailto:       aicode744@gmail.com"
              className="text-blue-600 underline"
            >
              aicode744@gmail.com
            </a>
          </li>
        </ul>
      </div>

      {/* Contact Form Section */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex-1 bg-white p-6 rounded-lg shadow-md"
      >
        <div className="mb-4">
          <label
            htmlFor="user_name"
            className="block font-medium text-gray-700"
          >
            Full Name
          </label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            placeholder="Enter your name"
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="user_email"
            className="block font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            placeholder="Enter your email"
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Your message"
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
            rows={4}
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
