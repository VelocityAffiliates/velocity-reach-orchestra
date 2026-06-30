import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { articles, featuredSlug, getArticle } from "@/lib/articles";
import pageInsights from "@/assets/page-insights.jpg";

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

const featured = getArticle(featuredSlug)!;
const posts = articles.filter((a) => a.slug !== featuredSlug);

function InsightsPage() {
  return (
    <div>
      <Nav />

      <section className="container-x pt-44 md:pt-56 pb-24">
        <span className="eyebrow">Insights</span>
        <h1 className="mt-8 display-xl text-5xl md:text-7xl max-w-5xl">
          Operational intelligence
          <em className="italic font-normal"> for builder leadership.</em>
        </h1>
        <p className="mt-10 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Field notes from live outreach campaigns, active builder databases, and
          sales conversations happening across North America — week over week.
        </p>
      </section>

      {/* IMAGE BANNER */}
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

      {/* FEATURED ARTICLE */}
      <section className="container-x py-20 md:py-28 border-t border-border">
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
                Featured
              </div>
            </div>
          </div>
          <div className="md:col-span-5 flex flex-col justify-center">
            <div className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
              {featured.date}
            </div>
            <h2 className="mt-6 text-3xl md:text-4xl group-hover:opacity-70 transition-opacity">
              {featured.t}
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">{featured.d}</p>
            <span className="link-arrow mt-8 self-start">Read →</span>
          </div>
        </Link>
      </section>

      {/* ARTICLE GRID */}
      <section className="border-t border-border">
        <div className="container-x py-20 md:py-28">
          <h2 className="sr-only">All articles</h2>
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {posts.map((p) => (
              <Link
                key={p.slug}
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="group block"
              >
                <div className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                  {p.date}
                </div>
                <h3 className="mt-4 text-2xl md:text-3xl group-hover:opacity-70 transition-opacity">
                  {p.t}
                </h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{p.d}</p>
                <span className="link-arrow mt-6 inline-block">Read →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* EMAIL SIGNUP */}
      <section className="border-t border-border surface-subtle">
        <div className="container-x py-24 md:py-32 grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-7">
            <span className="eyebrow">Subscribe</span>
            <h2 className="mt-6 text-4xl md:text-5xl">
              Receive new field notes monthly.
            </h2>
            <p className="mt-6 text-muted-foreground max-w-xl leading-relaxed">
              Operational intelligence built for builder leadership. Concise.
              Strategic. Worth your inbox.
            </p>
          </div>
          <form
            className="md:col-span-5 flex gap-3 border-b border-ink pb-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-transparent outline-none py-3 placeholder:text-muted-foreground/60"
            />
            <button className="text-[11px] uppercase tracking-[0.22em] hover:opacity-60 transition-opacity">
              Subscribe →
            </button>
          </form>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="border-t border-border">
        <div className="container-x py-24 md:py-32 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-8">
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05] max-w-3xl">
              Want this applied directly to your portfolio?
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              What we publish here is what we see in the field every week. Book a
              call and we'll tell you what we're seeing in your market.
            </p>
          </div>
          <div className="md:col-span-4 md:flex md:justify-end">
            <a
              href="https://calendly.com/brooke-velocityaffiliates/introduction-to-velocity-affliates"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book a Strategy Call
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
