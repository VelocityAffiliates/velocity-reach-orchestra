import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/approach")({
  component: Approach,
  head: () => ({
    meta: [
      { title: "Approach — Velocity Affiliates" },
      { name: "description", content: "How Velocity operates as an embedded outbound execution partner: align, execute, deliver. Built for builders, developers, and sales organizations." },
    ],
  }),
});

function Approach() {
  return (
    <div>
      <section className="surface-dark relative">
        <Nav variant="dark" />
        <div className="container-x pt-40 pb-24 md:pt-52 md:pb-32 max-w-5xl">
          <span className="eyebrow">Our Approach</span>
          <h1 className="mt-6 font-display text-5xl md:text-7xl text-surface-foreground leading-[1.05]">
            Operational rigor, applied to outbound.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-surface-foreground/75">
            We don't replace your sales team — we feed it. Our team works as a structured layer
            inside your operation, with clear role boundaries and consistent execution.
          </p>
        </div>
      </section>

      <section className="container-x py-24 md:py-32">
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { n: "01", t: "Align", d: "Community onboarding, script development, CRM mapping, ownership boundaries, and campaign planning across your portfolio." },
            { n: "02", t: "Execute", d: "Daily live human calling with urgency-driven messaging. Cadences, dispositions, and tagging are managed inside your CRM, not ours." },
            { n: "03", t: "Deliver", d: "Booked appointments, real-time conversation themes, and weekly consolidated reporting that gives leadership visibility into pipeline health." },
          ].map((s) => (
            <div key={s.n} className="border-t border-foreground/15 pt-8">
              <div className="font-display text-accent text-3xl">{s.n}</div>
              <h3 className="mt-4 text-3xl">{s.t}</h3>
              <p className="mt-3 text-foreground/70">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x pb-24 md:pb-32">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="rounded-2xl border border-border p-10 bg-card">
            <span className="eyebrow !text-foreground/50">Built For</span>
            <ul className="mt-6 space-y-3 text-lg">
              <li>Homebuilders & master-planned developers</li>
              <li>Multi-community sales organizations</li>
              <li>New-home & pre-sale teams</li>
              <li>Marketing leaders inheriting decaying databases</li>
              <li>VPs of Sales who need execution, not theory</li>
            </ul>
          </div>
          <div className="rounded-2xl surface-dark p-10">
            <span className="eyebrow">Operating Principles</span>
            <ul className="mt-6 space-y-4 text-surface-foreground/85">
              <li><strong className="text-surface-foreground">Human callers, never bots.</strong> Every conversation is live and accountable.</li>
              <li><strong className="text-surface-foreground">Inside your systems.</strong> CRM-logged activity and reporting your team can audit.</li>
              <li><strong className="text-surface-foreground">Clear role boundaries.</strong> No brokerage activity, no transactional crossover.</li>
              <li><strong className="text-surface-foreground">Portfolio-ready.</strong> Outreach scaled across multiple communities and markets.</li>
              <li><strong className="text-surface-foreground">Visible momentum.</strong> Weekly reporting, engagement themes, and pipeline signals.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container-x pb-32">
        <div className="rounded-3xl border border-border p-10 md:p-16 text-center">
          <span className="eyebrow">Get Started</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl max-w-3xl mx-auto">
            See what disciplined outbound looks like inside your operation.
          </h2>
          <Link to="/contact" className="btn-primary mt-8">Book a Strategy Call →</Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
