export const VibeCard = ({ vibe }: { vibe: string }) => {
  return (
    <div className="px-10 py-5 rounded-2xl border flex items-center justify-center">
      {vibe}
    </div>
  );
};
