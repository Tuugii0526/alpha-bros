type DistributerTypeProps = {
  name: string;
  icon: string;
};

export const DistributorCard = ({ name, icon }: DistributerTypeProps) => {
  return (
    <main className="h-[200px] w-[200px] flex flex-col justify-center items-center gap-4 rounded-lg bg-MainWhite">
      <div className="size-5 w-5 h-5">{icon}</div>
      <p>{name}</p>
    </main>
  );
};
