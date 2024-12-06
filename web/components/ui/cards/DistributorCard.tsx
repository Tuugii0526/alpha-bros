import { BrandIcon } from "../icons";
type DistributerTypeProps = {
  brandname: string;
};

export const DistributorCard = ({ brandname }: DistributerTypeProps) => {
  return (
    <main className="h-[200px] w-[200px] flex flex-col justify-center items-center gap-4 rounded-lg">
      <BrandIcon />
      <p>{brandname}</p>
    </main>
  );
};
