import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Counter } from "@/components/site/Counter";
import pageExecution from "@/assets/page-execution.jpg";

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

const disciplines = [
  {
    n: "01",
    title: "Realtor Outreach",
    problem: "Most Realtors in your market haven't heard from your communities in months.",
    bullets: [
      "Active broker engagement across your markets",
      "Urgency creation around new releases and incentives",
      "Realtor sentiment and objection reporting",
      "Appointment and tour coordination",
    ],
  },
  {
    n: "02",
    title: "Database Reactivation",
    problem: "Your CRM has warm leads in it right now. Most of them are going cold.",
    bullets: [
      "Human-first outreach to dormant prospects",
      "Buying momentum identification",
      "Re-engagement cadences tied to your release calendar",
      "CRM-logged activity and outcome tracking",
    ],
  },
  {
    n: "03",
    title: "Event Acceleration",
    problem: "Most builders measure event success by attendance. The real number is conversion.",
    bullets: [
      "Pre-event invitation and RSVP campaigns",
      "Confirmation and reminder cadences",
      "Day-of attendance tracking and engagement",
      "Post-event follow-up within 72 hours",
    ],
  },
  {
    n: "04",
    title: "Appointment Coordination",
    problem: "A booked appointment means nothing if it doesn't show up in the CRM with a next step attached.",
    bullets: [
      "Confirmed, CRM-logged appointment delivery",
      "Seamless sales team handoff",
      "No-show recovery outreach",
      "Appointment-to-walk-in tracking",
    ],
  },
];

const stats = [
  { t: "Multi-Market", d: "Active builder portfolio support" },
  { t: "100% Human", d: "Conversations — never bots" },
  { t: "CRM-Integrated", d: "Visibility and workflow alignment" },
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
          Velocity runs the outbound layer your sales team doesn't have capacity
          for. Four disciplines, executed daily, reported weekly, accountable to
          outcomes.
        </p>
      </section>

      {/* IMAGE BANNER */}
      <section className="container-x pb-20 md:pb-28">
        <figure className="relative overflow-hidden">
          <img
            src={pageExecution}
            alt="Warm sunlight pouring into a modern new-home sales gallery"
            width={1920}
            height={1024}
            loading="lazy"
            className="w-full h-[44vh] md:h-[64vh] object-cover"
          />
        </figure>
      </section>

      {/* FOUR DISCIPLINES */}
      <section className="border-t border-border">
        <div className="container-x py-24 md:py-32">
          <span className="eyebrow">What We Run</span>
          <div className="mt-12 grid md:grid-cols-4 gap-10 gap-y-12">
            {disciplines.map((d) => (
              <div key={d.n} className="border-t border-border pt-8">
                <div className="font-display text-muted-foreground text-xl">{d.n}</div>
                <h3 className="mt-6 text-2xl">{d.title}</h3>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  {d.problem}
                </p>
                <ul className="mt-6 space-y-3 text-sm text-muted-foreground leading-relaxed">
                  {d.bullets.map((b) => (
                    <li key={b} className="pl-4 -indent-4">
                      — {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS BLOCK */}
      <section className="border-y border-border bg-ink text-white">
        <div className="container-x py-24 md:py-32 grid md:grid-cols-12 gap-x-10 gap-y-14 items-start">
          <div className="md:col-span-4">
            <div className="font-display text-6xl md:text-7xl text-white tabular-nums leading-none">
              100,000+
            </div>
            <div className="mt-5 text-[11px] tracking-[0.28em] uppercase text-white/55">
              Human-led outreach interactions annually
            </div>
          </div>
          <div className="md:col-span-8 grid sm:grid-cols-3 gap-px bg-white/15">
            {stats.map((s) => (
              <div key={s.t} className="bg-ink p-7">
                <h3 className="text-lg text-white">{s.t}</h3>
                <p className="mt-3 text-sm text-white/65 leading-relaxed">{s.d}</p>
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

      {/* OPERATIONAL MOMENTUM */}
      <section className="border-t border-border">
        <div className="container-x py-24 md:py-32">
          <div className="max-w-2xl mb-14">
            <span className="eyebrow">Operational Output</span>
            <h2 className="mt-6 text-4xl md:text-5xl">
              Operational momentum,
              <br />
              measured weekly.
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-14 border-t border-border pt-14">
            <Counter to={100000} suffix="+" label="Human-Led Outreach Interactions Annually" />
            <Counter to={10000} suffix="+" label="Event RSVPs Coordinated" />
            <Counter to={3000} suffix="+" label="Appointments Coordinated" />
            <Counter to={98} suffix="%" label="CRM-Logged Activity" />
          </div>
        </div>
      </section>

      {/* INFRASTRUCTURE */}
      <section className="border-t border-border surface-subtle">
        <div className="container-x py-28 md:py-36 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-3xl md:text-4xl leading-tight">
              This is not a campaign.
              <br />
              It's infrastructure.
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6 space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Velocity doesn't run one-off pushes. We embed inside your operation
              — aligned to your release calendar, your CRM, and your sales team's
              rhythm — and we run outbound execution continuously, across your
              full portfolio.
            </p>
            <p>
              Every week, leadership sees exactly what was contacted, what
              responded, what was booked, and what needs a next step.
            </p>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="border-t border-border">
        <div className="container-x py-24 md:py-32 flex flex-wrap items-end justify-between gap-6">
          <h2 className="text-4xl md:text-5xl max-w-2xl">
            Looking for this kind of execution
            <br />
            inside your portfolio?
          </h2>
          <a
            href="https://calendly.com/brooke-velocityaffiliates/introduction-to-velocity-affliates"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Book a Strategy Call
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
