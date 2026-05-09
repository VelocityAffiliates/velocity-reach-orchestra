import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import hero from "@/assets/hero.jpg";
import neighborhoodAerial from "@/assets/neighborhood-aerial.jpg";
import neighborhoodStreet from "@/assets/neighborhood-street.jpg";
import homeDetail from "@/assets/home-detail.jpg";
import communityPlan from "@/assets/community-plan.jpg";
import {
  CadenceDiagram,
  GridPattern,
  OrbitMark,
  StackedBars,
  GapDiagram,
  DashboardTile,
} from "@/components/site/Graphics";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Velocity Affiliates — Outbound Sales Execution for Homebuilders" },
      { name: "description", content: "Velocity Affiliates turns broker databases, prospect leads, and event traffic into booked appointments and consistent sales momentum for homebuilders and developers." },
      { property: "og:title", content: "Velocity Affiliates — Outbound Sales Execution for Homebuilders" },
      { property: "og:description", content: "Realtor outreach, database reactivation, event acceleration, and appointment coordination — built as infrastructure for builder sales teams." },
    ],
  }),
});

const services = [
  { n: "01", t: "Realtor Outreach", d: "Live broker engagement designed to create urgency, drive appointments, and increase community awareness across your active markets." },
  { n: "02", t: "Database Reactivation", d: "Human-first outreach that revives dormant pipelines and identifies real buying momentum already sitting inside your CRM." },
  { n: "03", t: "Event Acceleration", d: "Pre-event invites, confirmations, reminders, and post-event follow-through built into a single structured cadence." },
  { n: "04", t: "Appointment Coordination", d: "CRM-logged appointments and seamless sales handoff systems designed to protect momentum from contact to walk-in." },
];

const reasons = [
  "Fills calendars with qualified buyer and broker appointments",
  "Restores momentum across stalled communities",
  "Strengthens accountability across the sales floor",
  "Creates leadership visibility into outbound activity",
  "Improves morale by removing follow-up overload",
  "Supports — never replaces — your onsite sales team",
  "Scales across portfolios and multiple markets",
  "Built around builder sales psychology, not generic SDR playbooks",
];

function Home() {
  return (
    <div>
      <Nav />

      {/* HERO */}
      <section className="relative pt-44 md:pt-52">
        <div className="container-x">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <span className="eyebrow justify-center">Outbound Execution · Built for Homebuilders</span>
            <h1 className="mt-8 display-xl text-5xl md:text-7xl lg:text-[88px]">
              Outbound Sales Execution
              <em className="italic font-normal"> for Homebuilders.</em>
            </h1>
            <p className="mt-8 max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
              Velocity Affiliates turns broker databases, prospect leads, and event
              traffic into booked appointments, measurable engagement, and consistent
              sales momentum.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link to="/appointment" className="btn-primary">Book a Strategy Call</Link>
              <Link to="/services" className="btn-outline">See How We Work</Link>
            </div>
          </div>

          <div className="mt-20 md:mt-28 relative overflow-hidden">
            <img
              src={hero}
              alt="Architectural twilight tower"
              width={1920}
              height={1080}
              className="w-full h-[52vh] md:h-[68vh] object-cover"
            />
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="container-x py-28 md:py-36 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <span className="eyebrow">The Reality</span>
          <h2 className="mt-6 text-4xl md:text-5xl leading-[1.05]">
            Builders don't have a lead problem.
            <em className="italic font-normal"> They have a follow-through problem.</em>
          </h2>
        </div>
        <div className="md:col-span-7 space-y-5 text-lg text-muted-foreground leading-relaxed md:pt-2">
          <p>
            Databases quietly decay. Realtors stop hearing from your communities.
            Events lose momentum after the RSVP. Onsite teams are correctly focused
            on walk-ins and contracts — not outbound discipline at scale.
          </p>
          <p>
            Marketing and sales drift apart. Leadership loses visibility into what's
            actually happening between the lead and the appointment. Accountability
            becomes inconsistent. Nobody truly owns outbound follow-through.
          </p>
          <p className="text-foreground">
            Most builders already own the leads they need. The problem is nobody
            consistently works them.
          </p>
        </div>
      </section>

      {/* THE GAP — diagram */}
      <section className="border-y border-border surface-subtle relative overflow-hidden">
        <GridPattern className="absolute inset-0 w-full h-full text-ink" />
        <div className="container-x py-28 md:py-36 relative">
          <div className="max-w-3xl">
            <span className="eyebrow">The Follow-Through Gap</span>
            <h2 className="mt-6 text-4xl md:text-5xl leading-[1.05]">
              Where momentum quietly disappears — and how Velocity closes it.
            </h2>
          </div>
          <div className="mt-16">
            <GapDiagram className="w-full h-auto text-ink" />
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-px bg-border hairline">
            {[
              { t: "Outbound Execution", d: "Live, daily calling against active and dormant databases — at builder volume." },
              { t: "Event Systems", d: "Invitation, confirmation, reminder, and recovery cadences built around your release calendar." },
              { t: "Appointment Coordination", d: "Booked, CRM-logged appointments delivered ready for the sales floor to close." },
            ].map((b) => (
              <div key={b.t} className="bg-background p-8">
                <h3 className="text-xl">{b.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT VELOCITY DOES */}
      <section className="container-x py-28 md:py-36">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="eyebrow">What Velocity Does</span>
            <h2 className="mt-6 text-4xl md:text-5xl">Four disciplines, run as infrastructure.</h2>
          </div>
          <Link to="/services" className="link-arrow">All Services →</Link>
        </div>
        <div className="mt-16 grid md:grid-cols-2 gap-px bg-border hairline">
          {services.map((s) => (
            <div key={s.n} className="bg-background p-10 md:p-12 transition-colors hover:bg-subtle">
              <div className="flex items-baseline justify-between">
                <span className="font-display text-muted-foreground text-xl">{s.n}</span>
                <span className="h-px w-10 bg-border" />
              </div>
              <h3 className="mt-10 text-3xl">{s.t}</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COMMUNITIES — imagery triptych */}
      <section className="border-t border-border">
        <div className="container-x py-24 md:py-32">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="eyebrow">The Communities We Support</span>
              <h2 className="mt-6 text-4xl md:text-5xl leading-[1.05]">
                Inside the neighborhoods
                <em className="italic font-normal"> builders are bringing to life.</em>
              </h2>
            </div>
            <p className="max-w-sm text-sm text-muted-foreground leading-relaxed">
              From master-planned communities to single-tower releases, our outbound
              programs are built around the rhythm of real residential development.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-12 gap-6">
            <figure className="md:col-span-7 relative overflow-hidden">
              <img
                src={neighborhoodAerial}
                alt="Aerial view of a modern residential neighborhood at golden hour"
                width={1600}
                height={1024}
                loading="lazy"
                className="w-full h-[44vh] md:h-[60vh] object-cover"
              />
              <figcaption className="mt-3 text-[10px] uppercase tracking-[0.28em] text-muted-foreground flex justify-between">
                <span>Fig. 01 — Master-Planned Community</span>
                <span>Aerial / Golden Hour</span>
              </figcaption>
            </figure>
            <figure className="md:col-span-5 relative overflow-hidden">
              <img
                src={homeDetail}
                alt="Architectural detail of a modern home with wood cladding and an olive tree"
                width={1080}
                height={1500}
                loading="lazy"
                className="w-full h-[44vh] md:h-[60vh] object-cover"
              />
              <figcaption className="mt-3 text-[10px] uppercase tracking-[0.28em] text-muted-foreground flex justify-between">
                <span>Fig. 02 — Single-Family Detail</span>
                <span>Exterior</span>
              </figcaption>
            </figure>
            <figure className="md:col-span-12 relative overflow-hidden mt-2">
              <img
                src={neighborhoodStreet}
                alt="Quiet streetscape of modern townhomes with warm wood and white facades"
                width={1600}
                height={900}
                loading="lazy"
                className="w-full h-[40vh] md:h-[56vh] object-cover"
              />
              <figcaption className="mt-3 text-[10px] uppercase tracking-[0.28em] text-muted-foreground flex justify-between">
                <span>Fig. 03 — Townhome Streetscape</span>
                <span>Morning Light</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-ink text-white">
        <div className="container-x py-28 md:py-36">
          <div className="max-w-2xl">
            <span className="eyebrow text-white/60">Built for Builders</span>
            <h2 className="mt-6 text-4xl md:text-5xl text-white">
              Operating at builder volume.
            </h2>
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-14 border-t border-white/15 pt-14">
            <div>
              <div className="font-display text-5xl md:text-6xl tabular-nums">100,000+</div>
              <div className="mt-4 text-[11px] tracking-[0.28em] uppercase text-white/55">Outbound Calls Annually</div>
            </div>
            <div>
              <div className="font-display text-5xl md:text-6xl tabular-nums">3,000+</div>
              <div className="mt-4 text-[11px] tracking-[0.28em] uppercase text-white/55">Calls / Week Capacity</div>
            </div>
            <div>
              <div className="font-display text-5xl md:text-6xl tabular-nums">CA · US</div>
              <div className="mt-4 text-[11px] tracking-[0.28em] uppercase text-white/55">Builder Coverage</div>
            </div>
            <div>
              <div className="font-display text-5xl md:text-6xl tabular-nums">100%</div>
              <div className="mt-4 text-[11px] tracking-[0.28em] uppercase text-white/55">Human Callers · Never Bots</div>
            </div>
            <div>
              <div className="font-display text-5xl md:text-6xl tabular-nums">CRM</div>
              <div className="mt-4 text-[11px] tracking-[0.28em] uppercase text-white/55">Integrated Visibility</div>
            </div>
            <div>
              <div className="font-display text-5xl md:text-6xl tabular-nums">Portfolio</div>
              <div className="mt-4 text-[11px] tracking-[0.28em] uppercase text-white/55">Level Campaign Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="container-x py-28 md:py-36">
        <div className="max-w-2xl">
          <span className="eyebrow">How It Works</span>
          <h2 className="mt-6 text-4xl md:text-5xl">Align. Launch. Deliver.</h2>
        </div>
        <div className="mt-16 grid md:grid-cols-3 gap-px bg-border hairline">
          {[
            { s: "01", t: "Align", d: "Community onboarding, scripting, CRM coordination, and campaign strategy across your portfolio and release calendar." },
            { s: "02", t: "Launch", d: "Outbound calling, texting, reminders, event activation, and appointment engagement — running daily inside your operation." },
            { s: "03", t: "Deliver", d: "Booked appointments, leadership visibility, live market feedback, and measurable pipeline movement — week over week." },
          ].map((step) => (
            <div key={step.s} className="bg-background p-10 md:p-12">
              <div className="font-display text-5xl text-muted-foreground">{step.s}</div>
              <h3 className="mt-8 text-3xl">{step.t}</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">{step.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-20 max-w-4xl mx-auto">
          <CadenceDiagram className="w-full h-auto text-ink" />
        </div>
      </section>

      {/* MARKET INTEL */}
      <section className="border-y border-border surface-subtle">
        <div className="container-x py-28 md:py-36 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <span className="eyebrow">Market Intelligence</span>
            <h2 className="mt-6 text-4xl md:text-5xl leading-[1.05]">
              Real conversations.
              <em className="italic font-normal"> Real market intelligence.</em>
            </h2>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
              Every week, Velocity has thousands of live conversations with buyers
              and brokers across your communities. That activity becomes a live
              intelligence layer between your database and your leadership team.
            </p>
            <Link to="/reporting" className="link-arrow mt-10">See Reporting →</Link>
          </div>
          <div className="md:col-span-7 grid sm:grid-cols-2 gap-px bg-border hairline self-start">
            {[
              "Buyer objections",
              "Pricing resistance",
              "Realtor feedback",
              "Market hesitation",
              "Incentive response",
              "Event sentiment",
              "Inventory friction",
              "Competitive movement",
            ].map((t) => (
              <div key={t} className="bg-background p-6">
                <div className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">Signal</div>
                <div className="mt-2 text-lg">{t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DASHBOARD */}
      <section className="container-x py-28 md:py-36 grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-5">
          <span className="eyebrow">Leadership Visibility</span>
          <h2 className="mt-6 text-4xl md:text-5xl leading-[1.05]">
            Outbound activity, made visible.
          </h2>
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
            Weekly consolidated reporting — call volume, conversations, appointments
            booked, attendance rates, and feedback themes. Built for sales leadership
            review, not vanity dashboards.
          </p>
        </div>
        <div className="md:col-span-7">
          <div className="border border-border p-6 md:p-8">
            <DashboardTile className="w-full h-auto text-ink" />
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="border-y border-border surface-subtle">
        <div className="container-narrow py-28 md:py-36 text-center">
          <span className="eyebrow justify-center">Client</span>
          <blockquote className="mt-10 font-display text-3xl md:text-[40px] leading-[1.2] tracking-[-0.01em]">
            "Brooke and her team became an indispensable extension of our sales team.
            They built urgency, qualified serious buyers, and delivered ready-to-act
            prospects. We surpassed projections months ahead of schedule."
          </blockquote>
          <div className="mt-12 text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
            Cathy Grant — Sales Director
          </div>
        </div>
      </section>

      {/* WHY VELOCITY */}
      <section className="container-x py-28 md:py-36">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <span className="eyebrow">Why Builders Choose Velocity</span>
            <h2 className="mt-6 text-4xl md:text-5xl">Strategic. Operational. Aligned.</h2>
            <OrbitMark className="mt-12 w-40 h-40 text-ink" />
          </div>
          <div className="md:col-span-8">
            <ul className="grid sm:grid-cols-2 gap-x-12">
              {reasons.map((r, i) => (
                <li key={r} className={`py-5 border-b border-border flex gap-5 ${i < 2 ? "" : ""}`}>
                  <span className="font-display text-muted-foreground text-sm pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base leading-relaxed">{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* THROUGHPUT */}
      <section className="border-t border-border surface-subtle">
        <div className="container-x py-24 md:py-28">
          <StackedBars className="w-full h-auto text-ink" />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-border bg-ink text-white">
        <div className="container-x py-28 md:py-36 text-center max-w-4xl mx-auto">
          <span className="eyebrow justify-center text-white/60">Next Step</span>
          <h2 className="mt-8 font-display text-4xl md:text-6xl leading-[1.05] text-white">
            Marketing creates the lead.
            <em className="italic font-normal block mt-2"> Velocity makes sure the conversation happens.</em>
          </h2>
          <div className="mt-12">
            <Link
              to="/appointment"
              className="inline-flex items-center gap-2 bg-white text-ink px-8 py-4 text-[11px] uppercase tracking-[0.22em] hover:bg-white/90 transition-colors"
            >
              Schedule a Strategy Call
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

