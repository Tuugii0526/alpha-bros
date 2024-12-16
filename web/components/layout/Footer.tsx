import { FacebookIcon } from "../ui/icons/FacebookIcon";
import { TwitterIcon } from "../ui/icons/TwitterIcon";
import { IGIcon } from "../ui/icons/IGIcon";
import { INIcon } from "../ui/icons/INIcon";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="bg-MainColor w-full text-MainWhite py-20">
      <div className="container max-w-screen-xl mx-auto flex justify-between">
        {/* //////////////////////////////// */}

        <div>
          <div>Луужин</div>
          <div>
            Бидний зорилго таны дурсамжыг хайраар дүүргэх газрыг хайж таньд
            санал болно.
          </div>
        </div>

        {/*  */}
        <div className="flex flex-col gap-4 items-start justify-center">
          <p className="text-xl">Social</p>
          <Link href="wwww.facebook.com" className="flex items-center gap-1 ">
            <FacebookIcon /> Facebook
          </Link>
          <Link href="www.twitter.com" className="flex items-center gap-1 ">
            <TwitterIcon /> Twitter
          </Link>
          <Link href="www.instagram.com" className="flex items-center gap-1 ">
            <IGIcon /> Instagram
          </Link>
        </div>
        {/*  */}
        <div></div>
        {/*  */}
      </div>

      {/* ////////////////////////////////////////////////// */}
      <div className="flex justify-between container max-w-screen-xl">
        <div> 2024 Compass Inc. All rights reserved</div>
      </div>
    </div>
  );
};
