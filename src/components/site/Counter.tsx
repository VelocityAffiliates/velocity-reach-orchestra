import { useEffect, useRef, useState } from "react";

interface CounterProps {
  to: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
  decimals?: number;
}

export function Counter({ to, suffix = "", prefix = "", label, duration = 1800, decimals = 0 }: CounterProps) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const p = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - p, 3);
              setVal(to * eased);
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to, duration]);

  const display = decimals > 0 ? val.toFixed(decimals) : Math.round(val).toLocaleString();

  return (
    <div ref={ref} className="flex flex-col">
      <div className="font-display text-5xl md:text-6xl lg:text-7xl text-ink leading-none tabular-nums">
        {prefix}
        {display}
        {suffix}
      </div>
      <div className="mt-5 text-[11px] tracking-[0.28em] uppercase text-muted-foreground">
        {label}
      </div>
    </div>
  );
}
