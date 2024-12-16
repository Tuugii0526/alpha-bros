type TimeCardProps = {
  open: string;
  close: string;
};

export default function WorkingTimeCard({ open, close }: TimeCardProps) {
  return (
    <div className="flex gap-4 ">
      <div className="flex">
        <p className="">
          {open} - {close}
        </p>
      </div>
    </div>
  );
}
