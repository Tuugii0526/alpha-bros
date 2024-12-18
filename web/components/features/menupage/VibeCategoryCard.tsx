import { DistributorCard } from "@/components/ui/cards/DistributorCard";

export const VibeCard = ({ vibe, id }: { vibe: string; id: string }) => {
  return (
    <div className="px-10 py-5 rounded-2xl border flex items-center justify-center bg-MainBlue ">
      <DistributorCard key={vibe.id} id={vibe.id} name={vibe} />
    </div>
  );
};
