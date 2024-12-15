import Link from "next/link";
import { FacebookIcon } from "../ui/icons/FacebookIcon";
import { TwitterIcon } from "../ui/icons/TwitterIcon";
import { IGIcon } from "../ui/icons/IGIcon";
import { INIcon } from "../ui/icons/INIcon";

export const Footer = () => {
  return (
    <div className="bg-MainColor w-full text-MainWhite py-20">
      <div className="container max-w-screen-xl mx-auto flex flex-col">
        <div className="flex flex-col w-1/3 flex-wrap text-center gap-4">
          <div>Луужин</div>
          <div>
            Бидний зорилго таны дурсамжыг хайраар дүүргэх газрыг хайж таньд
            санал болно.
          </div>
          <div>+976-7755-5588</div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
