import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About — Velocity Affiliates" },
      { name: "description", content: "Velocity Affiliates is an outbound growth infrastructure company serving homebuilders, developers, and multi-community sales organizations across Canada and the U.S." },
    ],
  }),
});

function About() {
  return (
    <div>
      <section className="surface-dark relative">
        <Nav variant="dark" />
        <div className="container-x pt-40 pb-24 md:pt-52 md:pb-32">
          <span className="eyebrow">About</span>
          <h1 className="mt-6 font-display text-5xl md:text-7xl text-surface-foreground max-w-4xl leading-[1.05]">
            We build the outbound layer most sales floors are missing.
          </h1>
        </div>
      </section>

      <section className="container-x py-24 md:py-32 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <span className="eyebrow !text-foreground/50">Who We Are</span>
        </div>
        <div className="md:col-span-7 space-y-5 text-lg text-foreground/80">
          <p>
            Velocity Affiliates is an outbound growth infrastructure company. We exist for one
            reason: to make sure the pipeline you've already paid for actually converts into
            conversations, appointments, and momentum.
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
      </section>

      <section className="surface-dark py-24 md:py-32">
        <div className="container-x grid md:grid-cols-2 gap-12">
          <div>
            <span className="eyebrow">What Drives Us</span>
            <h2 className="mt-5 font-display text-4xl md:text-5xl text-surface-foreground">
              Follow-through is a system, not a personality trait.
            </h2>
          </div>
          <div className="text-surface-foreground/80 space-y-4 text-lg">
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

      <section className="container-x py-24 md:py-32 grid md:grid-cols-3 gap-8">
        {[
          { t: "Operating Markets", d: "Canada & United States" },
          { t: "Offices", d: "Vancouver · Victoria · Kelowna" },
          { t: "Engagement Model", d: "Embedded, retained, portfolio-ready" },
        ].map((b) => (
          <div key={b.t} className="border-t border-foreground/15 pt-6">
            <div className="text-xs uppercase tracking-[0.18em] text-foreground/50">{b.t}</div>
            <div className="mt-2 font-display text-2xl">{b.d}</div>
          </div>
        ))}
      </section>

      <section className="container-x pb-32">
        <div className="rounded-3xl surface-dark p-10 md:p-16 flex flex-col md:flex-row justify-between gap-6 items-start md:items-center">
          <h2 className="font-display text-3xl md:text-4xl text-surface-foreground max-w-xl">
            Let's talk about what's stuck in your pipeline.
          </h2>
          <Link to="/contact" className="btn-accent">Book a Strategy Call →</Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
