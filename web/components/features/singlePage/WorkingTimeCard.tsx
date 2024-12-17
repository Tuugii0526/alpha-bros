import { roboto700 } from "@/app/fonts/fonts";

type TimeCardProps = {
  open: string;
  close: string;
};

export default function WorkingTimeCard({ open, close }: TimeCardProps) {
  return (
    <div className={`flex gap-4  ${roboto700.className} text-base`}>
      <div className="flex">
        <p className="">
          {open} - {close}
        </p>
      </div>
    </div>
  );
}
