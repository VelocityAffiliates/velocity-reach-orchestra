import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Counter } from "@/components/site/Counter";
import hero from "@/assets/hero.jpg";
import { SystemDiagram, CadenceDiagram, GridPattern, OrbitMark, StackedBars } from "@/components/site/Graphics";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Velocity Affiliates — Outbound Execution for Builders & Developers" },
      { name: "description", content: "The outbound execution layer between marketing and sales. Structured human outreach for homebuilders, developers, and sales organizations." },
      { property: "og:title", content: "Velocity Affiliates — Outbound Execution for Builders & Developers" },
      { property: "og:description", content: "Structured human outreach systems that turn pipeline into booked appointments and momentum." },
    ],
  }),
});

const services = [
  { n: "01", t: "Outbound Calling", d: "Live human callers running structured cadences across active and dormant databases." },
  { n: "02", t: "Realtor Outreach", d: "Broker activation and prospect re-engagement to create urgency and qualify intent." },
  { n: "03", t: "Event Engine", d: "Invites, confirmations, reminder cadence, and post-event follow-through built in." },
  { n: "04", t: "Database Reactivation", d: "Systematic outreach across nurture and aged leads to surface forgotten pipeline." },
  { n: "05", t: "Appointment Coordination", d: "Booked, confirmed, CRM-logged appointments delivered ready for your team to close." },
  { n: "06", t: "Sales Operations", d: "CRM organization, follow-up cadences, accountability, and reporting your team will use." },
];

function Home() {
  return (
    <div>
      <Nav />

      {/* HERO */}
      <section className="relative pt-44 md:pt-52">
        <div className="container-x">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <span className="eyebrow justify-center">Outbound Execution Partner</span>
            <h1 className="mt-8 display-xl text-5xl md:text-7xl lg:text-[88px]">
              Operationally <em className="italic font-normal">Intelligent</em><br />
              Outbound Execution.
            </h1>
            <p className="mt-8 max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
              The strategic layer between marketing and sales — turning existing pipeline into
              booked appointments, event traffic, and momentum for builders and developers.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link to="/appointment" className="btn-primary">Book a Call</Link>
              <Link to="/services" className="btn-outline">Our Services</Link>
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

      {/* COUNTERS */}
      <section className="container-x py-28 md:py-36">
        <div className="max-w-2xl mb-16">
          <span className="eyebrow">By the Numbers</span>
          <h2 className="mt-6 text-4xl md:text-5xl">
            A discipline of follow-through, measured at scale.
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-14 border-t border-border pt-14">
          <Counter to={250000} suffix="+" label="Outbound Touches" />
          <Counter to={14} label="Day Avg Launch" />
          <Counter to={100} suffix="%" label="Live Human Callers" />
          <Counter to={3} label="Markets Covered" />
        </div>
      </section>

      {/* DIAGRAM — Execution Layer */}
      <section className="border-y border-border surface-subtle relative overflow-hidden">
        <GridPattern className="absolute inset-0 w-full h-full text-ink" />
        <div className="container-x py-28 md:py-36 grid md:grid-cols-12 gap-12 relative">
          <div className="md:col-span-4">
            <span className="eyebrow">The Execution Layer</span>
            <h2 className="mt-6 text-4xl md:text-5xl leading-[1.05]">
              Between marketing<br />and the sales floor.
            </h2>
            <p className="mt-8 text-muted-foreground leading-relaxed">
              We sit in the operational gap most organizations leave open —
              translating leads, brokers, and registrants into booked appointments.
            </p>
          </div>
          <div className="md:col-span-8">
            <SystemDiagram className="w-full h-auto text-ink" />
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="border-b border-border">
        <div className="container-x py-28 md:py-36 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <span className="eyebrow">The Discipline</span>
            <h2 className="mt-6 text-4xl md:text-5xl leading-[1.05]">
              You already paid for the pipeline.
            </h2>
            <OrbitMark className="mt-12 w-40 h-40 text-ink" />
          </div>
          <div className="md:col-span-7 space-y-5 text-lg text-muted-foreground leading-relaxed md:pt-2">
            <p>
              Builders and developers spend heavily generating traffic, leads, and broker
              relationships. Without consistent follow-through, databases decay, events
              underperform, and momentum quietly disappears.
            </p>
            <p>
              Sales teams are correctly focused on walk-ins, contracts, and active buyers.
              Structured outbound engagement at scale rarely gets the attention it requires.
            </p>
            <p className="text-foreground">
              Velocity becomes the dedicated outbound and appointment coordination arm operating
              quietly behind your team — driving engagement, broker activation, and booked
              appointments across every community in your portfolio.
            </p>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="container-x py-28 md:py-36">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="eyebrow">Capabilities</span>
            <h2 className="mt-6 text-4xl md:text-5xl">
              Structured human outreach, run as infrastructure.
            </h2>
          </div>
          <Link to="/services" className="link-arrow">All Services →</Link>
        </div>
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border hairline">
          {services.map((s) => (
            <div key={s.n} className="bg-background p-8 md:p-10 transition-colors hover:bg-subtle">
              <div className="flex items-baseline justify-between">
                <span className="font-display text-muted-foreground text-xl">{s.n}</span>
                <span className="h-px w-10 bg-border" />
              </div>
              <h3 className="mt-10 text-2xl">{s.t}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-y border-border surface-subtle">
        <div className="container-x py-28 md:py-36">
          <div className="max-w-2xl">
            <span className="eyebrow">The Process</span>
            <h2 className="mt-6 text-4xl md:text-5xl">Align. Execute. Deliver.</h2>
          </div>
          <div className="mt-16 grid md:grid-cols-3 gap-px bg-border hairline">
            {[
              { s: "01", t: "Align", d: "Onboarding, scripting, CRM coordination, and campaign planning tailored to your portfolio and sales motion." },
              { s: "02", t: "Execute", d: "High-volume outbound calling with urgency-driven messaging, structured cadences, and live human callers." },
              { s: "03", t: "Deliver", d: "Booked appointments, real-time feedback themes, and weekly consolidated reporting your team can act on." },
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
        </div>
      </section>

      {/* THROUGHPUT */}
      <section className="container-x py-28 md:py-36">
        <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
          <div className="md:col-span-7">
            <span className="eyebrow">Throughput</span>
            <h2 className="mt-6 text-4xl md:text-5xl">
              Output measured, weekly.
            </h2>
          </div>
          <p className="md:col-span-5 text-muted-foreground leading-relaxed">
            Every program ships consolidated reporting — call volume, conversations,
            appointments booked, and feedback themes — built for sales leadership
            review, not vanity dashboards.
          </p>
        </div>
        <StackedBars className="w-full h-auto text-ink" />
      </section>
      <section className="container-narrow py-28 md:py-36 text-center">
        <span className="eyebrow justify-center">Client</span>
        <blockquote className="mt-10 font-display text-3xl md:text-[40px] leading-[1.2] tracking-[-0.01em]">
          “Brooke and her team became an indispensable extension of our sales team.
          They built urgency, qualified serious buyers, and delivered ready-to-act
          prospects. We surpassed projections months ahead of schedule.”
        </blockquote>
        <div className="mt-12 text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
          Cathy Grant — Sales Director
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border">
        <div className="container-x py-28 md:py-36 grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-8">
            <span className="eyebrow">Next Step</span>
            <h2 className="mt-6 text-4xl md:text-6xl leading-[1.05]">
              Outbound that actually shows up on the calendar.
            </h2>
          </div>
          <div className="md:col-span-4 md:text-right">
            <Link to="/appointment" className="btn-primary">Book a Strategy Call</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
