export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-4xl md:text-5xl">{value}</div>
      <div className="mt-2 text-xs uppercase tracking-[0.22em] text-muted-foreground">{label}</div>
    </div>
  );
}
