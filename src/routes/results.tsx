import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Counter } from "@/components/site/Counter";
import { StackedBars, DashboardTile } from "@/components/site/Graphics";

export const Route = createFileRoute("/results")({
  component: ResultsPage,
  head: () => ({
    meta: [
      { title: "Results — Velocity Affiliates" },
      { name: "description", content: "Real momentum. Measurable results. Outbound call volume, appointments booked, event attendance, broker engagement, and pipeline movement across builder programs." },
      { property: "og:title", content: "Results — Velocity Affiliates" },
      { property: "og:description", content: "Operational outcomes from builder outbound programs." },
    ],
  }),
});

const cases = [
  {
    n: "01",
    t: "Master-Planned Community",
    region: "Lower Mainland, BC",
    type: "Multi-Phase Release",
    metric: "120%",
    metricLabel: "of forecast",
    body: "Dedicated outbound program across registered database and broker network ahead of Phase 2 release. Drove sales pace four months ahead of projection.",
  },
  {
    n: "02",
    t: "Concrete High-Rise Tower",
    region: "Vancouver, BC",
    type: "Pre-Sale Launch",
    metric: "1,800+",
    metricLabel: "broker touches",
    body: "Pre-launch broker activation and database warm-up. Booked appointment volume sustained from launch weekend through three release events.",
  },
  {
    n: "03",
    t: "Townhome Community",
    region: "Fraser Valley, BC",
    type: "Standing Inventory",
    metric: "9 wks",
    metricLabel: "to sold out",
    body: "Inventory acceleration program: structured re-engagement of aged registrants, paired with broker incentive outreach. Closed remaining inventory ahead of construction completion.",
  },
  {
    n: "04",
    t: "Lakefront Development",
    region: "Okanagan, BC",
    type: "Event Engine",
    metric: "92%",
    metricLabel: "RSVP confirmation",
    body: "Invitation, confirmation, and reminder cadence for two preview events. Delivered consistent attendance from out-of-market buyers.",
  },
];

function ResultsPage() {
  return (
    <div>
      <Nav />

      <section className="container-x pt-44 md:pt-56 pb-24">
        <span className="eyebrow">Results</span>
        <h1 className="mt-8 display-xl text-5xl md:text-7xl max-w-5xl">
          Real momentum.
          <em className="italic font-normal"> Measurable results.</em>
        </h1>
        <p className="mt-10 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          A snapshot of outbound activity, attendance, and pipeline movement
          across active engagements with builders and developers.
        </p>
      </section>

      {/* HEADLINE METRICS */}
      <section className="border-y border-border bg-ink text-white">
        <div className="container-x py-24 md:py-32 grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-14">
          <div>
            <div className="font-display text-5xl md:text-6xl text-white tabular-nums">100k+</div>
            <div className="mt-4 text-[11px] tracking-[0.28em] uppercase text-white/55">Outbound Calls / Year</div>
          </div>
          <div>
            <div className="font-display text-5xl md:text-6xl text-white tabular-nums">3,000</div>
            <div className="mt-4 text-[11px] tracking-[0.28em] uppercase text-white/55">Calls / Week Capacity</div>
          </div>
          <div>
            <div className="font-display text-5xl md:text-6xl text-white tabular-nums">92%</div>
            <div className="mt-4 text-[11px] tracking-[0.28em] uppercase text-white/55">Avg Event Confirmation</div>
          </div>
          <div>
            <div className="font-display text-5xl md:text-6xl text-white tabular-nums">14d</div>
            <div className="mt-4 text-[11px] tracking-[0.28em] uppercase text-white/55">Avg Program Launch</div>
          </div>
        </div>
      </section>

      {/* DASHBOARD */}
      <section className="container-x py-28 md:py-36 grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-5">
          <span className="eyebrow">Program Snapshot</span>
          <h2 className="mt-6 text-4xl md:text-5xl leading-[1.05]">
            Activity, conversations, appointments — week over week.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Every builder engagement is run with the same operational discipline:
            measurable activity, transparent reporting, and clear ownership.
          </p>
        </div>
        <div className="md:col-span-7">
          <div className="border border-border p-6 md:p-8">
            <DashboardTile className="w-full h-auto text-ink" />
          </div>
        </div>
      </section>

      {/* THROUGHPUT */}
      <section className="border-y border-border surface-subtle">
        <div className="container-x py-20 md:py-24 grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-4">
            <span className="eyebrow">Portfolio Pace</span>
            <h2 className="mt-6 text-3xl md:text-4xl">Sales motion across active engagements.</h2>
          </div>
          <div className="md:col-span-8">
            <StackedBars className="w-full h-auto text-ink" />
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section>
        <div className="container-x">
          {cases.map((p, i) => (
            <article
              key={p.n}
              className={`grid md:grid-cols-12 gap-10 py-16 md:py-24 ${
                i > 0 ? "border-t border-border" : ""
              }`}
            >
              <div className="md:col-span-4">
                <div className="font-display text-muted-foreground text-xl">{p.n}</div>
                <div className="mt-8 text-[11px] uppercase tracking-[0.28em] text-muted-foreground">{p.region}</div>
                <div className="mt-2 text-[11px] uppercase tracking-[0.28em] text-muted-foreground">{p.type}</div>
              </div>
              <div className="md:col-span-5">
                <h2 className="text-3xl md:text-4xl">{p.t}</h2>
                <p className="mt-6 text-muted-foreground leading-relaxed text-lg">{p.body}</p>
              </div>
              <div className="md:col-span-3 md:text-right">
                <div className="font-display text-4xl md:text-5xl">{p.metric}</div>
                <div className="mt-3 text-[11px] uppercase tracking-[0.28em] text-muted-foreground">{p.metricLabel}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SECONDARY METRICS */}
      <section className="border-t border-border">
        <div className="container-x py-24 md:py-32">
          <div className="max-w-2xl mb-14">
            <span className="eyebrow">Operational Output</span>
            <h2 className="mt-6 text-4xl md:text-5xl">Measured at scale.</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-14 border-t border-border pt-14">
            <Counter to={250000} suffix="+" label="Outbound Touches" />
            <Counter to={612} label="Live Convos / Wk" />
            <Counter to={184} label="Appointments / Wk" />
            <Counter to={98} suffix="%" label="CRM-Logged Activity" />
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="container-x py-24 md:py-32 flex flex-wrap items-end justify-between gap-6">
          <h2 className="text-4xl md:text-5xl max-w-2xl">
            Looking for this kind of motion inside your portfolio?
          </h2>
          <Link to="/appointment" className="btn-primary">Book a Call</Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
