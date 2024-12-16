import { TWeekhours, TWorkingHours } from "@/types/DataTypes";
import { ClosedDay } from "./ClosedDay";
import WorkingTimeCard from "./WorkingTimeCard";

export const TimeSchedule = ({
  workingHours,
}: {
  workingHours: TWeekhours;
}) => {
  return (
    <div className="w-full flex flex-col bg-MainWhite p-4 rounded-2xl  ">
      <div className="flex flex-col text-xl gap-4">
        <div className="w-full  font-semibold not-italic">Цагийн хуваарь</div>
        <div className="flex flex-col">
          <div>Даваа-Баасан</div>
          <WorkingTimeCard
            open={workingHours.weekend.open}
            close={workingHours.weekdays.close}
          />
        </div>
        <div className="flex flex-col">
          <div>Бямба Ням</div>
          <WorkingTimeCard
            open={workingHours.weekend.open}
            close={workingHours.weekend.close}
          />
        </div>
        <div className="flex  flex-col gap-4">
          <div>
            {workingHours.closedDay && (
              <div>
                <div>Амралтын өдөр :</div>
                <ClosedDay closedDay={workingHours.closedDay} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
