import { BrandIcon } from "../icons";

type DistributerTypeProps = {
  name: string;
};

export const DistributorCard = ({ name }: DistributerTypeProps) => {
  return (
    <main className="h-[200px] w-[200px] flex flex-col justify-center items-center gap-4 rounded-lg bg-MainWhite">
      <BrandIcon />
      <p>{name}</p>
    </main>
  );
};
