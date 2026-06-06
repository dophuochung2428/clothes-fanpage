import React from 'react';

export function SkeletonCard() {
  return (
    <div className="animate-pulse">
      <div className="h-72 w-full rounded-[1rem] bg-slate-200" />
      <div className="mt-4 space-y-2">
        <div className="h-4 w-3/4 rounded bg-slate-200" />
        <div className="h-3 w-1/2 rounded bg-slate-200" />
      </div>
    </div>
  );
}

export default SkeletonCard;
