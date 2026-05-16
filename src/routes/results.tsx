import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Counter } from "@/components/site/Counter";

export const Route = createFileRoute("/results")({
  component: ResultsPage,
  head: () => ({
    meta: [
      { title: "Execution, Velocity Affiliates" },
      { name: "description", content: "Structured outreach, appointment coordination, and operational support across active builder and developer portfolios." },
      { property: "og:title", content: "Execution, Velocity Affiliates" },
      { property: "og:description", content: "Consistent execution across active portfolios." },
    ],
  }),
});

const cases = [
  {
    n: "01",
    t: "Master-Planned Community",
    region: "Southern California",
    type: "Multi-Phase Release",
    metric: "120%",
    metricLabel: "of forecast",
    body: "Dedicated outbound execution program supporting broker engagement, database reactivation, appointment coordination, and leadership visibility ahead of Phase 2 release. Activity, dispositions, and pipeline movement reported weekly to the project leadership team.",
  },
  {
    n: "02",
    t: "Concrete High-Rise Tower",
    region: "Bay Area, California",
    type: "Pre-Sale Launch",
    metric: "1,800+",
    metricLabel: "broker touches",
    body: "Pre-launch broker activation paired with structured database warm-up and CRM workflow alignment across the sales operation. Sustained appointment volume and consistent reporting cadence from launch weekend through three release events.",
  },
  {
    n: "03",
    t: "Townhome Community",
    region: "Inland Empire, California",
    type: "Standing Inventory",
    metric: "9 wks",
    metricLabel: "to sold out",
    body: "Inventory acceleration program coordinating structured re-engagement of aged registrants, broker incentive outreach, and appointment routing into the onsite sales team. Operational rhythm maintained between marketing, sales, and ownership through weekly leadership reporting.",
  },
  {
    n: "04",
    t: "Lakefront Development",
    region: "Okanagan, BC",
    type: "Event Engine",
    metric: "92%",
    metricLabel: "RSVP confirmation",
    body: "End-to-end event coordination across two preview weekends, including invitation, confirmation, reminder, and post-event appointment cadences. Attendance and follow-through tracked inside the CRM and surfaced through leadership-level reporting.",
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
            <div className="font-display text-6xl md:text-7xl text-white tabular-nums leading-none">100,000+</div>
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
                <div className="mt-8 text-[11px] uppercase tracking-[0.28em] text-muted-foreground">{p.type}</div>
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
            <h2 className="mt-6 text-4xl md:text-5xl">Operational momentum, measured weekly.</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-14 border-t border-border pt-14">
            <Counter to={100000} suffix="+" label="Human-Led Outreach Interactions Annually" />
            <Counter to={10000} suffix="+" label="Event RSVPs Coordinated" />
            <Counter to={3000} suffix="+" label="Appointments Coordinated" />
            <Counter to={98} suffix="%" label="CRM-Logged Activity" />
          </div>
        </div>
      </section>

      {/* OPERATIONAL INTEGRATION */}
      <section className="border-t border-border surface-subtle">
        <div className="container-x py-28 md:py-36 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <span className="eyebrow">Operational Integration</span>
            <h2 className="mt-6 text-3xl md:text-4xl leading-tight">
              Beyond outbound execution alone.
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6 space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p className="text-foreground font-display text-2xl md:text-3xl leading-snug">
              Velocity supports more than outbound execution alone.
            </p>
            <p>
              Across active builder portfolios, our role often extends into
              CRM workflow refinement, reporting visibility, appointment
              coordination systems, sales and marketing alignment, and
              operational support for leadership teams managing multiple
              communities simultaneously.
            </p>
            <p>
              The objective is to create clearer execution, stronger
              visibility, and more consistent operational rhythm across
              the portfolio.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="container-x py-24 md:py-32 flex flex-wrap items-end justify-between gap-6">
          <h2 className="text-4xl md:text-5xl max-w-2xl">
            Looking for this kind of execution inside your portfolio?
          </h2>
          <a href="https://calendly.com/brooke-velocityaffiliates/introduction-to-velocity-affliates" target="_blank" rel="noopener noreferrer" className="btn-primary">Book a Call</a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
