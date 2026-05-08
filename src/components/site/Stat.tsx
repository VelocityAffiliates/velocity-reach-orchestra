export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-l border-white/15 pl-5">
      <div className="font-display text-4xl md:text-5xl text-surface-foreground">{value}</div>
      <div className="mt-2 text-xs uppercase tracking-[0.18em] text-surface-foreground/60">{label}</div>
    </div>
  );
}
