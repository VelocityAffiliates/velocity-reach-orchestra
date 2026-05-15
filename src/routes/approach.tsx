import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/approach")({
  component: Approach,
  head: () => ({
    meta: [
      { title: "Approach, Velocity Affiliates" },
      { name: "description", content: "How Velocity operates as an embedded outbound execution partner: align, execute, deliver." },
    ],
  }),
});

function Approach() {
  return (
    <div>
      <Nav />
      <section className="container-x pt-40 pb-20 md:pt-56 md:pb-28 max-w-5xl">
        <span className="eyebrow">Our Approach</span>
        <h1 className="mt-8 font-display text-5xl md:text-7xl leading-[1.05]">
          Operational rigor, applied to outbound.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          We don't replace your sales team, we feed it. Our team works as a structured layer
          inside your operation, with clear role boundaries and consistent execution.
        </p>
      </section>

      <section className="border-t border-border">
        <div className="container-x py-20 md:py-24 grid md:grid-cols-3 gap-px bg-border hairline rounded-xl overflow-hidden">
          {[
            { n: "01", t: "Align", d: "Community onboarding, script development, CRM mapping, ownership boundaries, and campaign planning across your portfolio." },
            { n: "02", t: "Execute", d: "Daily live human calling with urgency-driven messaging. Cadences, dispositions, and tagging are managed inside your CRM, not ours." },
            { n: "03", t: "Deliver", d: "Booked appointments, real-time conversation themes, and weekly consolidated reporting that gives leadership visibility into pipeline health." },
          ].map((s) => (
            <div key={s.n} className="bg-background p-10">
              <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">{s.n}</div>
              <h3 className="mt-4 text-3xl">{s.t}</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="surface-subtle border-y border-border">
        <div className="container-x py-24 md:py-32 grid md:grid-cols-2 gap-16">
          <div>
            <span className="eyebrow">Built For</span>
            <ul className="mt-8 grid-lines text-lg">
              {[
                "Homebuilders & master-planned developers",
                "Multi-community sales organizations",
                "New-home & pre-sale teams",
                "Marketing leaders inheriting decaying databases",
                "VPs of Sales who need execution, not theory",
              ].map((x) => <li key={x} className="py-4">{x}</li>)}
            </ul>
          </div>
          <div>
            <span className="eyebrow">Operating Principles</span>
            <ul className="mt-8 grid-lines">
              {[
                ["Human callers, never bots.", "Every conversation is live and accountable."],
                ["Inside your systems.", "CRM-logged activity and reporting your team can audit."],
                ["Clear role boundaries.", "No brokerage activity, no transactional crossover."],
                ["Portfolio-ready.", "Outreach scaled across multiple communities and markets."],
                ["Visible momentum.", "Weekly reporting, engagement themes, and pipeline signals."],
              ].map(([t, d]) => (
                <li key={t} className="py-4">
                  <span className="font-medium">{t}</span>{" "}
                  <span className="text-muted-foreground">{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container-x py-24 md:py-32 text-center max-w-3xl mx-auto">
        <span className="eyebrow">Get Started</span>
        <h2 className="mt-6 font-display text-4xl md:text-5xl">
          See what disciplined outbound looks like inside your operation.
        </h2>
        <Link to="/contact" className="btn-primary mt-10">Book a strategy call</Link>
      </section>
      <Footer />
    </div>
  );
}
