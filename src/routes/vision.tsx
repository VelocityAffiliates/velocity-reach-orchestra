import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Counter } from "@/components/site/Counter";
import { OrbitMark, SystemDiagram, GridPattern } from "@/components/site/Graphics";

export const Route = createFileRoute("/vision")({
  component: VisionPage,
  head: () => ({
    meta: [
      { title: "Vision — Velocity Affiliates" },
      { name: "description", content: "Our vision: become the operational standard for outbound execution in residential development and sales." },
      { property: "og:title", content: "Vision — Velocity Affiliates" },
      { property: "og:description", content: "The operating philosophy behind Velocity's outbound execution model." },
    ],
  }),
});

function VisionPage() {
  return (
    <div>
      <Nav />

      <section className="container-x pt-44 md:pt-56 pb-24">
        <span className="eyebrow">Our Vision</span>
        <h1 className="mt-8 display-xl text-5xl md:text-7xl max-w-5xl">
          Become the operational standard for outbound execution
          <em className="italic font-normal"> in residential development.</em>
        </h1>
        <p className="mt-10 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Velocity exists to give builders, developers, and sales organizations the
          one capability the industry consistently underbuilds: disciplined,
          human-led follow-through at scale.
        </p>
      </section>

      <section className="border-y border-border surface-subtle">
        <div className="container-x py-24 md:py-32 grid md:grid-cols-2 gap-12">
          <div>
            <span className="eyebrow">Mission</span>
            <h2 className="mt-6 text-3xl md:text-4xl">
              Turn marketing investment into measurable sales motion.
            </h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed md:pt-3">
            Marketing creates pipeline. Sales closes contracts. The operational
            space in between — broker activation, database reactivation, event
            traffic, appointment coordination — is where most projects quietly
            lose months of momentum. Velocity owns that layer.
          </p>
        </div>
      </section>

      <section className="container-x py-28 md:py-36">
        <div className="max-w-3xl">
          <span className="eyebrow">Operating Principles</span>
          <h2 className="mt-6 text-4xl md:text-5xl">A discipline, not a service.</h2>
        </div>
        <div className="mt-16 grid md:grid-cols-2 gap-px bg-border hairline">
          {[
            { t: "Embedded, not external", d: "We operate as part of your sales organization — aligned to your tone, CRM, and standards." },
            { t: "Human, not automated", d: "Every conversation is conducted live. Cadences are structured; the delivery is human." },
            { t: "Operational, not promotional", d: "We build systems and run them. Reporting reflects the work, not the marketing." },
            { t: "Strategic, not tactical", d: "Campaigns are designed around portfolio momentum, not isolated weekly tasks." },
          ].map((p) => (
            <div key={p.t} className="bg-background p-10">
              <h3 className="text-2xl">{p.t}</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border surface-subtle">
        <div className="container-x py-24 md:py-32 grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-14">
          <Counter to={98} suffix="%" label="CRM-Logged Activity" />
          <Counter to={14} label="Day Avg Launch" />
          <Counter to={3} label="Active Markets" />
        </div>
      </section>

      <section className="container-x py-28 md:py-36 grid md:grid-cols-12 gap-10 items-end">
        <div className="md:col-span-8">
          <h2 className="text-4xl md:text-5xl">
            The standard we hold ourselves to is the one our clients are held to.
          </h2>
        </div>
        <div className="md:col-span-4 md:text-right">
          <Link to="/services" className="link-arrow">Explore Services →</Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
