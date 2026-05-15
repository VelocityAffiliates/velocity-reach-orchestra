/**
 * Editorial SVG graphics, minimal, architectural, system-inspired.
 * All use currentColor so they inherit ink/foreground tones.
 */

export function SystemDiagram({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 360" className={className} fill="none" stroke="currentColor" aria-hidden>
      {/* Frame */}
      <rect x="0.5" y="0.5" width="599" height="359" strokeOpacity="0.15" />
      {/* Left node, Marketing */}
      <g>
        <circle cx="90" cy="180" r="46" strokeOpacity="0.6" />
        <circle cx="90" cy="180" r="3" fill="currentColor" stroke="none" />
        <text x="90" y="252" textAnchor="middle" fontSize="9" letterSpacing="3" fill="currentColor" stroke="none">
          MARKETING
        </text>
      </g>
      {/* Center node, Velocity */}
      <g>
        <rect x="240" y="120" width="120" height="120" strokeOpacity="0.9" />
        <rect x="252" y="132" width="96" height="96" strokeOpacity="0.25" />
        <circle cx="300" cy="180" r="5" fill="currentColor" stroke="none" />
        <text x="300" y="262" textAnchor="middle" fontSize="9" letterSpacing="3" fill="currentColor" stroke="none">
          VELOCITY
        </text>
      </g>
      {/* Right node, Sales */}
      <g>
        <circle cx="510" cy="180" r="46" strokeOpacity="0.6" />
        <circle cx="510" cy="180" r="3" fill="currentColor" stroke="none" />
        <text x="510" y="252" textAnchor="middle" fontSize="9" letterSpacing="3" fill="currentColor" stroke="none">
          SALES
        </text>
      </g>
      {/* Connectors */}
      <line x1="136" y1="180" x2="240" y2="180" strokeOpacity="0.5" />
      <line x1="360" y1="180" x2="464" y2="180" strokeOpacity="0.5" />
      {/* Tick rule */}
      <g strokeOpacity="0.25">
        {Array.from({ length: 24 }).map((_, i) => (
          <line key={i} x1={50 + i * 21} y1="320" x2={50 + i * 21} y2={i % 4 === 0 ? 308 : 314} />
        ))}
        <line x1="50" y1="320" x2="533" y2="320" />
      </g>
      <text x="50" y="340" fontSize="8" letterSpacing="3" fill="currentColor" stroke="none" opacity="0.6">
        FIG. 01, EXECUTION LAYER
      </text>
    </svg>
  );
}

export function CadenceDiagram({ className = "" }: { className?: string }) {
  const steps = ["DAY 0", "DAY 2", "DAY 5", "DAY 9", "DAY 14", "DAY 21"];
  return (
    <svg viewBox="0 0 600 220" className={className} fill="none" stroke="currentColor" aria-hidden>
      <line x1="40" y1="120" x2="560" y2="120" strokeOpacity="0.3" />
      {steps.map((s, i) => {
        const x = 40 + i * (520 / (steps.length - 1));
        const r = 4 + (i % 3) * 2;
        return (
          <g key={s}>
            <circle cx={x} cy="120" r={r} fill="currentColor" stroke="none" />
            <line x1={x} y1="120" x2={x} y2={60 + (i % 3) * 12} strokeOpacity="0.4" />
            <circle cx={x} cy={60 + (i % 3) * 12} r="2" fill="currentColor" stroke="none" opacity="0.6" />
            <text x={x} y="160" textAnchor="middle" fontSize="9" letterSpacing="2.5" fill="currentColor" stroke="none">
              {s}
            </text>
          </g>
        );
      })}
      <text x="40" y="200" fontSize="8" letterSpacing="3" fill="currentColor" stroke="none" opacity="0.6">
        FIG. 02, OUTBOUND CADENCE
      </text>
    </svg>
  );
}

export function GridPattern({ className = "" }: { className?: string }) {
  return (
    <svg className={className} aria-hidden>
      <defs>
        <pattern id="vagrid" width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" strokeOpacity="0.06" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#vagrid)" />
    </svg>
  );
}

export function OrbitMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none" stroke="currentColor" aria-hidden>
      <circle cx="100" cy="100" r="92" strokeOpacity="0.15" />
      <circle cx="100" cy="100" r="64" strokeOpacity="0.25" />
      <circle cx="100" cy="100" r="36" strokeOpacity="0.4" />
      <circle cx="100" cy="100" r="6" fill="currentColor" stroke="none" />
      <line x1="100" y1="0" x2="100" y2="200" strokeOpacity="0.1" />
      <line x1="0" y1="100" x2="200" y2="100" strokeOpacity="0.1" />
      <circle cx="164" cy="100" r="3" fill="currentColor" stroke="none" />
      <circle cx="100" cy="36" r="3" fill="currentColor" stroke="none" />
      <circle cx="36" cy="100" r="3" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function MapPlot({ className = "" }: { className?: string }) {
  // Stylized abstract map, coordinate plot of active markets
  const pts = [
    { x: 110, y: 130, label: "VAN" },
    { x: 175, y: 145, label: "FRA" },
    { x: 250, y: 110, label: "KEL" },
    { x: 360, y: 100, label: "CGY" },
    { x: 510, y: 150, label: "TOR" },
    { x: 90, y: 200, label: "PNW" },
  ];
  return (
    <svg viewBox="0 0 600 340" className={className} fill="none" stroke="currentColor" aria-hidden>
      <rect x="0.5" y="0.5" width="599" height="339" strokeOpacity="0.12" />
      {/* Latitude lines */}
      {Array.from({ length: 6 }).map((_, i) => (
        <line key={i} x1="0" y1={50 + i * 50} x2="600" y2={50 + i * 50} strokeOpacity="0.06" />
      ))}
      {Array.from({ length: 10 }).map((_, i) => (
        <line key={i} x1={60 * i} y1="0" x2={60 * i} y2="340" strokeOpacity="0.06" />
      ))}
      {/* Connection arcs */}
      {pts.map((p, i) =>
        i < pts.length - 1 ? (
          <path
            key={i}
            d={`M ${p.x} ${p.y} Q ${(p.x + pts[i + 1].x) / 2} ${Math.min(p.y, pts[i + 1].y) - 30} ${pts[i + 1].x} ${pts[i + 1].y}`}
            strokeOpacity="0.25"
          />
        ) : null
      )}
      {pts.map((p) => (
        <g key={p.label}>
          <circle cx={p.x} cy={p.y} r="14" strokeOpacity="0.3" />
          <circle cx={p.x} cy={p.y} r="4" fill="currentColor" stroke="none" />
          <text x={p.x + 22} y={p.y + 4} fontSize="9" letterSpacing="3" fill="currentColor" stroke="none">
            {p.label}
          </text>
        </g>
      ))}
      <text x="20" y="320" fontSize="8" letterSpacing="3" fill="currentColor" stroke="none" opacity="0.6">
        FIG. 03, MARKET COVERAGE
      </text>
    </svg>
  );
}

export function StackedBars({ className = "" }: { className?: string }) {
  const bars = [62, 78, 88, 71, 95, 84, 92, 80, 96, 88, 99, 92];
  return (
    <svg viewBox="0 0 600 200" className={className} fill="none" stroke="currentColor" aria-hidden>
      <line x1="20" y1="170" x2="580" y2="170" strokeOpacity="0.3" />
      {bars.map((h, i) => {
        const x = 30 + i * 46;
        return (
          <g key={i}>
            <rect x={x} y={170 - h * 1.4} width="22" height={h * 1.4} fill="currentColor" opacity={0.85} stroke="none" />
            <rect x={x} y={170 - h * 1.4 - 8} width="22" height="4" fill="currentColor" opacity="0.35" stroke="none" />
          </g>
        );
      })}
      <text x="20" y="194" fontSize="8" letterSpacing="3" fill="currentColor" stroke="none" opacity="0.6">
        FIG. 04, APPOINTMENT THROUGHPUT BY WEEK
      </text>
    </svg>
  );
}

export function GapDiagram({ className = "" }: { className?: string }) {
  const stops = [
    { label: "MARKETING", x: 60 },
    { label: "CRM", x: 180 },
    { label: "SALES TEAM", x: 300 },
    { label: "FOLLOW-UP", x: 420 },
    { label: "MOMENTUM", x: 540 },
  ];
  return (
    <svg viewBox="0 0 600 280" className={className} fill="none" stroke="currentColor" aria-hidden>
      <rect x="0.5" y="0.5" width="599" height="279" strokeOpacity="0.12" />
      {/* Top track, broken */}
      <text x="20" y="40" fontSize="9" letterSpacing="3" fill="currentColor" stroke="none" opacity="0.55">
        WITHOUT VELOCITY
      </text>
      <line x1="60" y1="80" x2="360" y2="80" strokeOpacity="0.5" />
      <line x1="380" y1="80" x2="540" y2="80" strokeOpacity="0.15" strokeDasharray="3 4" />
      {stops.map((s, i) => (
        <g key={s.label}>
          <circle cx={s.x} cy="80" r={i < 3 ? 6 : 4} fill={i < 3 ? "currentColor" : "none"} strokeOpacity={i < 3 ? 1 : 0.4} />
          <text x={s.x} y="62" textAnchor="middle" fontSize="8" letterSpacing="2.5" fill="currentColor" stroke="none" opacity={i < 3 ? 0.9 : 0.4}>
            {s.label}
          </text>
        </g>
      ))}
      <text x="430" y="105" fontSize="8" letterSpacing="2" fill="currentColor" stroke="none" opacity="0.5">
        ↓ momentum decays here
      </text>

      {/* Bottom track, Velocity bridges */}
      <text x="20" y="155" fontSize="9" letterSpacing="3" fill="currentColor" stroke="none" opacity="0.55">
        WITH VELOCITY
      </text>
      {/* Velocity bridge, spans full track above the line */}
      <rect x="60" y="175" width="480" height="28" strokeOpacity="0.85" />
      <text x="300" y="193" textAnchor="middle" fontSize="9" letterSpacing="3" fill="currentColor" stroke="none">
        VELOCITY EXECUTION LAYER
      </text>
      {/* Bracket ticks down to each stop */}
      {stops.map((s) => (
        <line key={`tick-${s.label}`} x1={s.x} y1="203" x2={s.x} y2="220" strokeOpacity="0.4" />
      ))}
      <line x1="60" y1="230" x2="540" y2="230" strokeOpacity="0.6" />
      {stops.map((s) => (
        <g key={s.label}>
          <circle cx={s.x} cy="230" r="6" fill="currentColor" stroke="none" />
          <text x={s.x} y="256" textAnchor="middle" fontSize="8" letterSpacing="2.5" fill="currentColor" stroke="none">
            {s.label}
          </text>
        </g>
      ))}
      <text x="20" y="270" fontSize="8" letterSpacing="3" fill="currentColor" stroke="none" opacity="0.5">
        FIG. 05, THE FOLLOW-THROUGH GAP
      </text>
    </svg>
  );
}

export function DashboardTile({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 360" className={className} fill="none" stroke="currentColor" aria-hidden>
      <rect x="0.5" y="0.5" width="599" height="359" strokeOpacity="0.15" />
      {/* Top row, KPI cells */}
      {[
        { x: 20, label: "CALLS / WK", v: "3,124" },
        { x: 165, label: "CONVOS", v: "612" },
        { x: 310, label: "BOOKED", v: "184" },
        { x: 455, label: "ATTEND %", v: "92" },
      ].map((k) => (
        <g key={k.label}>
          <rect x={k.x} y="20" width="125" height="78" strokeOpacity="0.25" />
          <text x={k.x + 12} y="44" fontSize="8" letterSpacing="2.5" fill="currentColor" stroke="none" opacity="0.6">
            {k.label}
          </text>
          <text x={k.x + 12} y="82" fontSize="26" fontFamily="Playfair Display, serif" fill="currentColor" stroke="none">
            {k.v}
          </text>
        </g>
      ))}
      {/* Chart area */}
      <rect x="20" y="120" width="395" height="220" strokeOpacity="0.2" />
      <line x1="20" y1="300" x2="415" y2="300" strokeOpacity="0.3" />
      <polyline
        points="40,280 80,250 120,260 160,220 200,200 240,210 280,170 320,160 360,140 400,130"
        strokeOpacity="0.85"
      />
      {[280, 250, 260, 220, 200, 210, 170, 160, 140, 130].map((y, i) => (
        <circle key={i} cx={40 + i * 40} cy={y} r="3" fill="currentColor" stroke="none" />
      ))}
      {/* Side panel */}
      <rect x="430" y="120" width="150" height="220" strokeOpacity="0.2" />
      <text x="442" y="142" fontSize="8" letterSpacing="2.5" fill="currentColor" stroke="none" opacity="0.6">
        ENGAGEMENT MIX
      </text>
      {[
        { y: 168, w: 130, label: "Brokers" },
        { y: 200, w: 96, label: "Database" },
        { y: 232, w: 78, label: "Events" },
        { y: 264, w: 56, label: "Re-engage" },
      ].map((b) => (
        <g key={b.label}>
          <rect x="442" y={b.y} width={b.w} height="6" fill="currentColor" stroke="none" opacity="0.85" />
          <text x="442" y={b.y - 4} fontSize="8" letterSpacing="2" fill="currentColor" stroke="none" opacity="0.7">
            {b.label}
          </text>
        </g>
      ))}
      <text x="20" y="354" fontSize="8" letterSpacing="3" fill="currentColor" stroke="none" opacity="0.55">
        FIG. 06, LEADERSHIP DASHBOARD
      </text>
    </svg>
  );
}

export function VerticalRule({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 400" className={className} fill="none" stroke="currentColor" aria-hidden>
      <line x1="20" y1="0" x2="20" y2="400" strokeOpacity="0.3" />
      {Array.from({ length: 21 }).map((_, i) => (
        <line key={i} x1={i % 5 === 0 ? 12 : 16} y1={i * 20} x2="24" y2={i * 20} strokeOpacity={i % 5 === 0 ? 0.6 : 0.25} />
      ))}
    </svg>
  );
}
