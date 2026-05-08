import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Stat } from "@/components/site/Stat";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Velocity Affiliates — Outbound Execution for Builders & Sales Teams" },
      { name: "description", content: "Structured human outreach systems that turn existing pipeline into booked appointments, event traffic, and consistent follow-through." },
    ],
  }),
});

const services = [
  { n: "01", t: "High-Volume Outbound Calling", d: "Live human callers running structured cadences across active and dormant databases." },
  { n: "02", t: "Realtor & Prospect Outreach", d: "Broker activation and prospect re-engagement designed to create urgency and qualify intent." },
  { n: "03", t: "Event RSVP Campaigns", d: "Invites, confirmations, reminder cadence, and post-event follow-through built directly into call campaigns." },
  { n: "04", t: "Database Reactivation", d: "Systematic outreach across nurture and aged leads to surface forgotten pipeline." },
  { n: "05", t: "Appointment Coordination", d: "Booked, confirmed, and CRM-logged appointments delivered ready for your sales team to close." },
  { n: "06", t: "Sales Process Support", d: "CRM organization, follow-up systems, accountability cadences, and reporting loops your team will actually use." },
];

function Home() {
  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="relative surface-dark overflow-hidden">
        <Nav variant="dark" />
        <img
          src={heroImg}
          alt=""
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface/40 via-surface/70 to-surface" />
        <div className="container-x relative pt-40 pb-28 md:pt-52 md:pb-40">
          <span className="eyebrow">Outbound Execution Partner</span>
          <h1 className="mt-6 max-w-4xl font-display text-5xl md:text-7xl leading-[1.02]">
            The execution layer between your marketing and your sales floor.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-surface-foreground/75">
            Velocity Affiliates builds and operates outbound systems that turn existing pipeline
            into booked appointments, event traffic, and momentum — for homebuilders, developers,
            and sales organizations.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/contact" className="btn-accent">Book a Strategy Call →</Link>
            <Link to="/services" className="btn-ghost text-surface-foreground">See what we run</Link>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            <Stat value="2 wks" label="Avg. Launch Time" />
            <Stat value="100%" label="Live Human Callers" />
            <Stat value="CRM" label="Logged & Reportable" />
            <Stat value="Multi-site" label="Portfolio Coverage" />
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="container-x py-24 md:py-32 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <span className="eyebrow">The Gap</span>
          <h2 className="mt-5 text-4xl md:text-5xl">You already paid for the pipeline.</h2>
        </div>
        <div className="md:col-span-7 space-y-5 text-lg text-foreground/75 md:pt-2">
          <p>
            Builders and sales organizations spend heavily generating traffic, leads, and broker
            relationships. But without consistent follow-through, databases decay, events
            underperform, and momentum quietly disappears.
          </p>
          <p>
            Sales teams are focused — correctly — on walk-ins, contracts, and active buyers.
            Outbound engagement at scale rarely gets the structured attention it requires.
          </p>
          <p className="text-foreground font-medium">
            Velocity becomes the dedicated outbound and appointment coordination arm operating
            quietly behind your team — driving engagement, broker activation, and booked
            appointments across every community in your portfolio.
          </p>
        </div>
      </section>

      <div className="container-x"><div className="rule" /></div>

      {/* WHAT WE ARE / NOT */}
      <section className="container-x py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="rounded-2xl border border-border p-10 bg-card">
            <span className="eyebrow !text-foreground/50">What Velocity Is</span>
            <ul className="mt-6 space-y-4 text-lg">
              {[
                "An embedded execution partner",
                "Outbound growth infrastructure",
                "A strategic layer between marketing & sales",
                "Operationally elite and structured",
                "A team that creates follow-through at scale",
              ].map((x) => (
                <li key={x} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                  {x}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl p-10 surface-dark">
            <span className="eyebrow">What Velocity Is Not</span>
            <ul className="mt-6 space-y-4 text-lg text-surface-foreground/85">
              {[
                "A cold-calling shop",
                "A telemarketing firm",
                "A virtual assistant service",
                "A generic marketing agency",
                "A coaching business",
              ].map((x) => (
                <li key={x} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-surface-foreground/40 shrink-0" />
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="surface-dark py-24 md:py-32">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="eyebrow">Capabilities</span>
              <h2 className="mt-5 text-4xl md:text-5xl text-surface-foreground max-w-2xl">
                Structured human outreach, run as infrastructure.
              </h2>
            </div>
            <Link to="/services" className="btn-ghost text-surface-foreground">All Services →</Link>
          </div>
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
            {services.map((s) => (
              <div key={s.n} className="surface-dark p-8 hover:bg-white/[0.03] transition-colors">
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-accent text-2xl">{s.n}</span>
                  <span className="h-px w-10 bg-white/15" />
                </div>
                <h3 className="mt-6 text-2xl text-surface-foreground">{s.t}</h3>
                <p className="mt-3 text-surface-foreground/70">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="container-x py-24 md:py-32">
        <span className="eyebrow">How It Works</span>
        <h2 className="mt-5 text-4xl md:text-5xl max-w-2xl">Simple. Strategic. Scalable.</h2>
        <div className="mt-14 grid md:grid-cols-3 gap-10">
          {[
            { s: "Step 01", t: "Align", d: "Community onboarding, scripting, CRM coordination, and campaign planning tailored to your portfolio and sales motion." },
            { s: "Step 02", t: "Execute", d: "High-volume outbound calling with urgency-driven messaging, structured cadences, and live human callers." },
            { s: "Step 03", t: "Deliver", d: "Booked appointments, real-time feedback themes, and weekly consolidated reporting your sales team can act on." },
          ].map((step, i) => (
            <div key={step.s} className="relative">
              <div className="font-display text-7xl text-accent/30">{String(i + 1).padStart(2, "0")}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.18em] text-foreground/50">{step.s}</div>
              <h3 className="mt-3 text-2xl">{step.t}</h3>
              <p className="mt-3 text-foreground/70">{step.d}</p>
            </div>
          ))}
        </div>
        <p className="mt-12 text-foreground/60">Campaigns typically launch within two weeks of onboarding.</p>
      </section>

      {/* TESTIMONIAL */}
      <section className="container-x pb-24 md:pb-32">
        <div className="rounded-3xl surface-dark p-10 md:p-16 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 h-60 w-60 rounded-full bg-accent/20 blur-3xl" />
          <span className="eyebrow">Client</span>
          <blockquote className="mt-6 font-display text-2xl md:text-3xl text-surface-foreground leading-snug max-w-4xl">
            “Brooke and her team became an indispensable extension of our sales team.
            They built urgency, qualified serious buyers, and delivered ready-to-act prospects and
            agents. We surpassed projections months ahead of schedule.”
          </blockquote>
          <div className="mt-8 text-sm uppercase tracking-[0.18em] text-surface-foreground/60">
            Cathy Grant
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x pb-32">
        <div className="grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <span className="eyebrow">Next Step</span>
            <h2 className="mt-5 text-4xl md:text-6xl">
              Ready for outbound that actually shows up on the calendar?
            </h2>
          </div>
          <div className="md:col-span-4 md:text-right">
            <Link to="/contact" className="btn-primary">Book a Strategy Call →</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
