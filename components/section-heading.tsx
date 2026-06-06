export function SectionHeading({ title, description }: { title: string; description: string }) {
  return (
    <div className="space-y-3">
      <p className="text-sm uppercase tracking-[0.24em] text-brand-600">{title}</p>
      <p className="max-w-3xl text-2xl font-semibold text-slate-950 sm:text-3xl">{description}</p>
    </div>
  );
}
