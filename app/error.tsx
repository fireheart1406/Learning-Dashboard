'use client';
import { useEffect } from 'react';
export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <div className="flex flex-col items-center justify-center h-full gap-4 text-center p-8">
      <div className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 text-xl">
        !
      </div>
      <h2 className="text-white font-semibold">Something went wrong</h2>
      <p className="text-white/40 text-sm">Failed to load dashboard data</p>
      <button
        onClick={reset}
        className="px-4 py-2 rounded-lg bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm hover:bg-violet-500/20 transition-colors"
      >
        Try again
      </button>
    </div>
  );
}