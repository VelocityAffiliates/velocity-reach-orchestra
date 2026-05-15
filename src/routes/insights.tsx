import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/insights")({
  component: InsightsPage,
  head: () => ({
    meta: [
      { title: "Insights, Velocity Affiliates" },
      { name: "description", content: "Field notes and operational perspective on outbound execution, broker engagement, and sales follow-through." },
      { property: "og:title", content: "Insights, Velocity Affiliates" },
      { property: "og:description", content: "Operational perspective on outbound and sales execution." },
    ],
  }),
});

const posts = [
  {
    cat: "Operations",
    date: "Apr 2026",
    t: "The Economics of Database Decay",
    d: "Why every untouched lead in your CRM has a measurable monthly cost, and the cadence required to recover it.",
  },
  {
    cat: "Broker Strategy",
    date: "Mar 2026",
    t: "Broker Activation as Infrastructure",
    d: "Treating broker engagement as a recurring operational discipline, not a launch-week sprint.",
  },
  {
    cat: "Events",
    date: "Feb 2026",
    t: "RSVPs Are Not Attendance",
    d: "The four-touch confirmation cadence we use to deliver predictable event traffic.",
  },
  {
    cat: "Sales Floor",
    date: "Jan 2026",
    t: "Why Outbound Belongs Outside the Sales Center",
    d: "Protecting the sales floor's focus by separating active-buyer work from systematic outreach.",
  },
];

function InsightsPage() {
  return (
    <div>
      <Nav />

      <section className="container-x pt-44 md:pt-56 pb-24">
        <span className="eyebrow">Insights</span>
        <h1 className="mt-8 display-xl text-5xl md:text-7xl max-w-5xl">
          Field notes from the
          <em className="italic font-normal"> execution layer.</em>
        </h1>
        <p className="mt-10 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Operational perspective on outbound discipline, broker engagement,
          event traffic, and the systems that turn pipeline into pace.
        </p>
      </section>

      <section className="border-t border-border">
        <div className="container-x">
          {posts.map((p, i) => (
            <article
              key={p.t}
              className={`grid md:grid-cols-12 gap-10 py-12 md:py-16 group cursor-pointer ${
                i > 0 ? "border-t border-border" : ""
              }`}
            >
              <div className="md:col-span-3 flex flex-col gap-2">
                <span className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                  {p.cat}
                </span>
                <span className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                  {p.date}
                </span>
              </div>
              <div className="md:col-span-7">
                <h2 className="text-3xl md:text-4xl group-hover:opacity-70 transition-opacity">
                  {p.t}
                </h2>
                <p className="mt-5 text-muted-foreground leading-relaxed">{p.d}</p>
              </div>
              <div className="md:col-span-2 md:text-right md:pt-3">
                <span className="link-arrow">Read →</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border surface-subtle">
        <div className="container-x py-24 md:py-32 grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-8">
            <span className="eyebrow">Subscribe</span>
            <h2 className="mt-6 text-4xl md:text-5xl">
              Receive new field notes monthly.
            </h2>
          </div>
          <div className="md:col-span-4 md:text-right">
            <Link to="/contact" className="btn-outline">Get In Touch</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
