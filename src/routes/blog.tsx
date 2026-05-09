import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/blog")({
  component: BlogPage,
  head: () => ({
    meta: [
      { title: "Insights — Velocity Affiliates" },
      { name: "description", content: "Operational intelligence for builders: sales strategy, realtor engagement, event execution, CRM follow-up, and market intelligence." },
      { property: "og:title", content: "Insights — Velocity Affiliates" },
      { property: "og:description", content: "Thought leadership for homebuilder sales and marketing leaders." },
    ],
  }),
});

const featured = {
  cat: "Builder Sales Strategy",
  date: "May 2026",
  t: "Builders Don't Need More Leads. They Need More Follow-Through.",
  d: "Why the next decade of builder sales performance will be defined by outbound discipline — not lead volume. A look at the operational gap quietly costing builders absorption.",
};

const posts = [
  { cat: "CRM & Follow-Up", date: "May 2026", t: "Why Builder Databases Quietly Die", d: "The economics of database decay and the cadence required to recover it." },
  { cat: "Sales Enablement", date: "Apr 2026", t: "The Hidden Cost of Weak Follow-Up", d: "What every untouched lead in your CRM actually costs across a release cycle." },
  { cat: "Market Intelligence", date: "Apr 2026", t: "What Live Buyer Conversations Reveal About the Market", d: "Patterns we're hearing across pricing, financing, and timing — in real time." },
  { cat: "Event Strategy", date: "Mar 2026", t: "Why Events Fail After the RSVP", d: "The four-touch confirmation cadence behind predictable event attendance." },
  { cat: "Builder Marketing", date: "Mar 2026", t: "The Operational Gap Between Marketing and Sales", d: "Where pipeline goes dark — and how to close the loop without adding headcount." },
  { cat: "CRM & Follow-Up", date: "Feb 2026", t: "Why Most Builder CRMs Are Underutilized", d: "Tagging, hygiene, and accountability frameworks that turn CRMs into operating tools." },
  { cat: "Realtor Engagement", date: "Feb 2026", t: "How Realtor Outreach Drives Absorption", d: "Treating broker engagement as recurring infrastructure, not a launch-week sprint." },
  { cat: "Database Reactivation", date: "Jan 2026", t: "Reviving the Pipeline You've Already Paid For", d: "A framework for systematic re-engagement of aged registrants and dormant leads." },
];

const categories = [
  "Builder Sales Strategy",
  "Realtor Engagement",
  "Event Strategy",
  "CRM & Follow-Up",
  "Sales Enablement",
  "Builder Marketing",
  "Database Reactivation",
  "Market Intelligence",
];

function BlogPage() {
  return (
    <div>
      <Nav />

      <section className="container-x pt-44 md:pt-56 pb-20">
        <span className="eyebrow">Insights</span>
        <h1 className="mt-8 display-xl text-5xl md:text-7xl max-w-5xl">
          Operational intelligence
          <em className="italic font-normal"> for builder leadership.</em>
        </h1>
        <p className="mt-10 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Field notes and strategic perspective on outbound discipline, broker
          engagement, event traffic, CRM follow-through, and the systems that
          turn pipeline into pace.
        </p>
      </section>

      {/* CATEGORY BAR */}
      <section className="border-y border-border">
        <div className="container-x py-6 flex flex-wrap gap-x-6 gap-y-2 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          {categories.map((c) => (
            <span key={c} className="hover:text-ink transition-colors cursor-pointer">{c}</span>
          ))}
        </div>
      </section>

      {/* FEATURED */}
      <section className="container-x py-20 md:py-28">
        <article className="grid md:grid-cols-12 gap-10 group cursor-pointer">
          <div className="md:col-span-7">
            <div className="aspect-[16/10] bg-ink/95 relative overflow-hidden">
              <div className="absolute inset-0 grid place-items-center">
                <div className="text-white/85 font-display text-3xl md:text-4xl px-10 text-center leading-snug">
                  {featured.t}
                </div>
              </div>
              <div className="absolute top-6 left-6 text-[10px] tracking-[0.28em] uppercase text-white/55">
                Featured Essay
              </div>
            </div>
          </div>
          <div className="md:col-span-5 flex flex-col justify-center">
            <div className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
              {featured.cat} · {featured.date}
            </div>
            <h2 className="mt-6 text-3xl md:text-4xl group-hover:opacity-70 transition-opacity">
              {featured.t}
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">{featured.d}</p>
            <span className="link-arrow mt-8 self-start">Read Essay →</span>
          </div>
        </article>
      </section>

      {/* GRID */}
      <section className="border-t border-border">
        <div className="container-x">
          {posts.map((p, i) => (
            <article
              key={p.t}
              className={`grid md:grid-cols-12 gap-10 py-12 md:py-14 group cursor-pointer ${
                i > 0 ? "border-t border-border" : ""
              }`}
            >
              <div className="md:col-span-3 flex flex-col gap-2">
                <span className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">{p.cat}</span>
                <span className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">{p.date}</span>
              </div>
              <div className="md:col-span-7">
                <h3 className="text-2xl md:text-3xl group-hover:opacity-70 transition-opacity">{p.t}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{p.d}</p>
              </div>
              <div className="md:col-span-2 md:text-right md:pt-3">
                <span className="link-arrow">Read →</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="border-t border-border surface-subtle">
        <div className="container-x py-24 md:py-32 grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-7">
            <span className="eyebrow">Subscribe</span>
            <h2 className="mt-6 text-4xl md:text-5xl">
              Receive new field notes monthly.
            </h2>
            <p className="mt-6 text-muted-foreground max-w-xl leading-relaxed">
              Operational intelligence built for builder leadership teams.
              Concise. Strategic. Worth your inbox.
            </p>
          </div>
          <form
            className="md:col-span-5 flex gap-3 border-b border-ink pb-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="you@company.com"
              className="flex-1 bg-transparent outline-none py-3 placeholder:text-muted-foreground/60"
            />
            <button className="text-[11px] uppercase tracking-[0.22em] hover:opacity-60 transition-opacity">
              Subscribe →
            </button>
          </form>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="container-x py-20 md:py-28 flex flex-wrap items-end justify-between gap-6">
          <h2 className="text-3xl md:text-5xl max-w-2xl">Want this perspective applied to your portfolio?</h2>
          <Link to="/appointment" className="btn-primary">Book a Strategy Call</Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
