import Link from "next/link";
import { FacebookIcon } from "../ui/icons/FacebookIcon";
import { TwitterIcon } from "../ui/icons/TwitterIcon";
import { IGIcon } from "../ui/icons/IGIcon";
import { INIcon } from "../ui/icons/INIcon";

export const Footer = () => {
  return (
    <div className="bg-gray-900 w-full text-gray-300 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center flex justify-between mb-8">
          <div>
            <h2 className="text-2xl font-semibold text-white">Join BoxCar</h2>
            <p className="mt-2 text-gray-400">
              Receive pricing updates, shopping tips & more!
            </p>
          </div>

          <div className="mt-4 flex justify-center items-center gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 rounded-lg border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring focus:ring-blue-500 w-72"
            />
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500">
              Sign Up
            </button>
          </div>
        </div>
        <hr className="border-gray-700" />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 mt-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/ServiceInfo" className="hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="contact" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-white">
                  Get in Touch
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Live Chat
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  How it Works
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Our Brands
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-white">
                  Toyota
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Porsche
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Audi
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  BMW
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Ford
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Nissan
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Peugeot
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Volkswagen
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Vehicle Type
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-white">
                  Sedan
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Hatchback
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  SUV
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Hybrid
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Electric
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Coupe
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Truck
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Convertible
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Our Mobile App
            </h3>
            <div className="space-y-4">
              <Link
                href="#"
                className=" px-4 py-2 bg-gray-800 rounded-lg max-h-[50px] max-w-[200px] flex items-center justify-center hover:bg-gray-700"
              >
                <div className="flex justify-around gap-4 items-center">
                  <img
                    src="/appstore.png"
                    alt="Apple Store"
                    className="w-6 h-6 mr-2"
                  />
                  <div className="">
                    <p className="text-xs">Download on</p>
                    <p> the Apple Store</p>
                  </div>
                </div>
              </Link>
              <Link
                href="#"
                className=" px-4 py-2 bg-gray-800 rounded-lg flex items-center  justify-center max-h-[50px] max-w-[200px]  hover:bg-gray-700"
              >
                <div className="flex justify-between gap-4 items-center">
                  <img
                    src="playstore.png"
                    alt="Google Play"
                    className="w-6 h-6 mr-2"
                  />
                  <div>
                    <p className="text-xs">Get it on </p>
                    <p> Google Play</p>
                  </div>
                </div>
              </Link>
            </div>
            <div>
              <p className="flex justify-start pt-4 pl-9">Connect With Us</p>
              <div className="flex justify-start pl-4 items-center space-x-6 ">
                <Link href="/">
                  <FacebookIcon />
                </Link>
                <Link href="/">
                  <TwitterIcon />
                </Link>
                <Link href="/">
                  <IGIcon />
                </Link>
                <Link href="/">
                  <INIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-gray-700 mt-9" />
        <div className="text-center text-gray-500 mt-8">
          <p>© 2024 exemple.com. All rights reserved.</p>
          <p>
            <Link href="#" className="hover:text-white">
              Terms & Conditions
            </Link>{" "}
            ·{" "}
            <Link href="#" className="hover:text-white">
              Privacy Notice
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
