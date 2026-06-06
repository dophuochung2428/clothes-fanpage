import React from 'react';

export function EmptyState({ title, description }: { title: string; description?: string }) {
  return (
    <div className="col-span-full flex items-center justify-center rounded-[1rem] border border-slate-200 bg-white p-8">
      <div className="max-w-xl text-center">
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        {description && <p className="mt-2 text-sm text-slate-600">{description}</p>}
      </div>
    </div>
  );
}

export default EmptyState;
