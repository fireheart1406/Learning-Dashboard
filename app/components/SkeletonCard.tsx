export default function SkeletonCard() {
  return (
    <div
      className="
        rounded-[24px]
        border
        border-white/[0.06]
        bg-white/[0.03]
        backdrop-blur-xl
        p-5
        animate-pulse
      "
    >
      <div className="h-12 w-12 rounded-xl bg-white/5" />

      <div className="mt-5">
        <div className="h-5 w-3/4 rounded-full bg-white/5" />

        <div className="mt-3 h-4 w-1/2 rounded-full bg-white/5" />
      </div>

      <div className="mt-6">
        <div className="h-2 rounded-full bg-white/5" />
      </div>
    </div>
  );
}