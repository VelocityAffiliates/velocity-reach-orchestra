import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { articles, featuredSlug, getArticle } from "@/lib/articles";
import pageInsights from "@/assets/page-insights.jpg";

export const Route = createFileRoute("/blog/")({
  component: BlogPage,
  head: () => ({
    meta: [
      { title: "Insights, Velocity Affiliates" },
      { name: "description", content: "Operational intelligence for builders: sales strategy, realtor engagement, event execution, CRM follow-up, and market intelligence." },
      { property: "og:title", content: "Insights, Velocity Affiliates" },
      { property: "og:description", content: "Thought leadership for homebuilder sales and marketing leaders." },
    ],
  }),
});

const featured = getArticle(featuredSlug)!;
const posts = articles.filter((a) => a.slug !== featuredSlug);

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

      <section className="container-x pb-16 md:pb-24">
        <figure className="relative overflow-hidden">
          <img
            src={pageInsights}
            alt="Open magazine and coffee in warm afternoon light"
            width={1920}
            height={1024}
            loading="lazy"
            className="w-full h-[40vh] md:h-[58vh] object-cover"
          />
        </figure>
      </section>

      <section className="border-y border-border">
        <div className="container-x py-6 flex flex-wrap gap-x-6 gap-y-2 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          {categories.map((c) => (
            <span key={c} className="hover:text-ink transition-colors cursor-pointer">{c}</span>
          ))}
        </div>
      </section>

      <section className="container-x py-20 md:py-28">
        <Link
          to="/blog/$slug"
          params={{ slug: featured.slug }}
          className="grid md:grid-cols-12 gap-10 group"
        >
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
        </Link>
      </section>

      <section className="border-t border-border">
        <div className="container-x">
          {posts.map((p, i) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className={`grid md:grid-cols-12 gap-10 py-12 md:py-14 group ${
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
            </Link>
          ))}
        </div>
      </section>

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
          <a href="https://calendly.com/brooke-velocityaffiliates/introduction-to-velocity-affliates" target="_blank" rel="noopener noreferrer" className="btn-primary">Book a Strategy Call</a>
        </div>
      </section>

      <Footer />
    </div>
  );
}