import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About — Velocity Affiliates" },
      { name: "description", content: "Velocity Affiliates is an outbound growth infrastructure company serving homebuilders, developers, and multi-community sales organizations." },
    ],
  }),
});

function About() {
  return (
    <div>
      <Nav />
      <section className="container-x pt-40 pb-20 md:pt-56 md:pb-28">
        <span className="eyebrow">About</span>
        <h1 className="mt-8 font-display text-5xl md:text-7xl max-w-4xl leading-[1.05]">
          We build the outbound layer most sales floors are missing.
        </h1>
      </section>

      <section className="border-t border-border">
        <div className="container-x py-24 md:py-32 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <span className="eyebrow">Who We Are</span>
          </div>
          <div className="md:col-span-8 space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p className="text-foreground text-2xl md:text-3xl font-display leading-snug">
              Velocity Affiliates is an outbound growth infrastructure company. We exist to make
              sure the pipeline you've already paid for actually converts into conversations,
              appointments, and momentum.
            </p>
            <p>
              We work primarily with homebuilders, developers, and multi-community sales
              organizations who need disciplined execution across realtors, prospects, events, and
              aging databases — without distracting their on-site sales teams.
            </p>
            <p>
              We are not a marketing agency, not a call center, and not a coaching firm. We are an
              embedded execution partner that operates quietly inside your sales motion.
            </p>
          </div>
        </div>
      </section>

      <section className="surface-subtle border-y border-border">
        <div className="container-x py-24 md:py-32 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <span className="eyebrow">What Drives Us</span>
            <h2 className="mt-6 text-4xl md:text-5xl">
              Follow-through is a system, not a personality trait.
            </h2>
          </div>
          <div className="md:col-span-7 text-muted-foreground space-y-5 text-lg leading-relaxed md:pt-3">
            <p>
              Most outbound failure isn't about scripts or talent — it's about the absence of
              consistent structure. We design and operate that structure for you.
            </p>
            <p>
              Every touch is logged. Every campaign has a feedback loop. Every appointment lands
              on the right calendar. That's the standard.
            </p>
          </div>
        </div>
      </section>

      <section className="container-x py-24 md:py-32 grid md:grid-cols-3 gap-px bg-border hairline rounded-xl overflow-hidden">
        {[
          { t: "Operating Markets", d: "Canada & United States" },
          { t: "Offices", d: "Vancouver · Victoria · Kelowna" },
          { t: "Engagement Model", d: "Embedded · retained · portfolio-ready" },
        ].map((b) => (
          <div key={b.t} className="bg-background p-8">
            <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">{b.t}</div>
            <div className="mt-3 font-display text-2xl">{b.d}</div>
          </div>
        ))}
      </section>

      <section className="container-x pb-24 md:pb-32">
        <div className="flex flex-col md:flex-row justify-between gap-6 items-start md:items-center border-t border-border pt-16">
          <h2 className="font-display text-3xl md:text-5xl max-w-xl">
            Let's talk about what's stuck in your pipeline.
          </h2>
          <Link to="/contact" className="btn-primary">Book a strategy call</Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
