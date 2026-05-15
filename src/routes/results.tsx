import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Counter } from "@/components/site/Counter";

export const Route = createFileRoute("/results")({
  component: ResultsPage,
  head: () => ({
    meta: [
      { title: "Execution — Velocity Affiliates" },
      { name: "description", content: "Structured outreach, appointment coordination, and operational support across active builder and developer portfolios." },
      { property: "og:title", content: "Execution — Velocity Affiliates" },
      { property: "og:description", content: "Consistent execution across active portfolios." },
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
    body: "Dedicated outbound program across registered database and broker network ahead of Phase 2 release. Supported absorption pacing ahead of original release projections.",
  },
  {
    n: "02",
    t: "Concrete High-Rise Tower",
    region: "Vancouver, BC",
    type: "Pre-Sale Launch",
    metric: "1,800+",
    metricLabel: "broker touches",
    body: "Pre-launch broker activation and database warm-up. Sustained appointment volume from launch weekend through three release events.",
  },
  {
    n: "03",
    t: "Townhome Community",
    region: "Fraser Valley, BC",
    type: "Standing Inventory",
    metric: "9 wks",
    metricLabel: "to sold out",
    body: "Inventory acceleration program: structured re-engagement of aged registrants paired with broker incentive outreach. Supported accelerated inventory absorption ahead of construction completion.",
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

const positioning = [
  { t: "Human-Led Outreach", d: "Live conversations conducted by trained operators, never automated dialers." },
  { t: "CRM-Integrated Execution", d: "Activity, dispositions, and appointments logged inside your existing system of record." },
  { t: "Portfolio-Level Support", d: "Operating across multiple communities and release calendars in parallel." },
  { t: "Leadership Visibility", d: "Weekly executive reporting that reflects real activity and pipeline movement." },
];

function ResultsPage() {
  return (
    <div>
      <Nav />

      <section className="container-x pt-44 md:pt-56 pb-24">
        <span className="eyebrow">Execution</span>
        <h1 className="mt-8 display-xl text-5xl md:text-7xl max-w-5xl">
          Consistent execution
          <em className="italic font-normal"> across active portfolios.</em>
        </h1>
        <p className="mt-10 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Structured outreach, appointment coordination, and operational support
          across active builder and developer portfolios.
        </p>
      </section>

      {/* HEADLINE METRIC + POSITIONING */}
      <section className="border-y border-border bg-ink text-white">
        <div className="container-x py-24 md:py-32 grid md:grid-cols-12 gap-x-10 gap-y-14 items-start">
          <div className="md:col-span-4">
            <div className="font-display text-6xl md:text-7xl text-white tabular-nums leading-none">100k+</div>
            <div className="mt-5 text-[11px] tracking-[0.28em] uppercase text-white/55">Live Outreach Calls Annually</div>
          </div>
          <div className="md:col-span-8 grid sm:grid-cols-2 gap-px bg-white/15">
            {positioning.map((p) => (
              <div key={p.t} className="bg-ink p-7">
                <h3 className="text-lg text-white">{p.t}</h3>
                <p className="mt-3 text-sm text-white/65 leading-relaxed">{p.d}</p>
              </div>
            ))}
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
            <Counter to={612} label="Live Conversations / Wk" />
            <Counter to={184} label="Appointments / Wk" />
            <Counter to={98} suffix="%" label="CRM-Logged Activity" />
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="container-x py-24 md:py-32 flex flex-wrap items-end justify-between gap-6">
          <h2 className="text-4xl md:text-5xl max-w-2xl">
            Looking for this kind of execution inside your portfolio?
          </h2>
          <Link to="/appointment" className="btn-primary">Book a Call</Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
