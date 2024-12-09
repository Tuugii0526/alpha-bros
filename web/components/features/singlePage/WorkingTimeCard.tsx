type TimeCardProps = {
  day: string;
  open: string;
  close: string;
};

export default function WorkingTimeCard({ day, open, close }: TimeCardProps) {
  return (
    <div className="flex gap-4 ">
      <div className="w-24">{day}</div>
      <div className="flex">
        <div>{open}</div>-<div>{close}</div>
      </div>
    </div>
  );
}
