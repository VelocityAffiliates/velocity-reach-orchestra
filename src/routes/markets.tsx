import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { MapPlot } from "@/components/site/Graphics";

export const Route = createFileRoute("/markets")({
  component: MarketsPage,
  head: () => ({
    meta: [
      { title: "Markets — Velocity Affiliates" },
      { name: "description", content: "Markets and industries Velocity Affiliates serves: homebuilders, developers, master-planned communities, and sales organizations." },
      { property: "og:title", content: "Markets — Velocity Affiliates" },
      { property: "og:description", content: "Industries we serve and the regions we operate in." },
    ],
  }),
});

const sectors = [
  { n: "01", t: "Homebuilders", d: "Production and semi-custom builders running multi-community sales programs." },
  { n: "02", t: "Developers", d: "Master-planned communities, mid- and high-density residential, mixed-use." },
  { n: "03", t: "Sales Organizations", d: "Brokerage teams and in-house sales centers needing dedicated outbound capacity." },
  { n: "04", t: "Project Marketing", d: "Marketing partners requiring an aligned execution layer for buyer and broker programs." },
];

const regions = [
  { city: "Vancouver", region: "British Columbia" },
  { city: "Victoria", region: "Vancouver Island" },
  { city: "Kelowna", region: "Okanagan" },
  { city: "Calgary", region: "Alberta" },
  { city: "Toronto", region: "Ontario" },
  { city: "Pacific NW", region: "United States" },
];

function MarketsPage() {
  return (
    <div>
      <Nav />

      <section className="container-x pt-44 md:pt-56 pb-24">
        <span className="eyebrow">Markets</span>
        <h1 className="mt-8 display-xl text-5xl md:text-7xl max-w-5xl">
          Built for residential development
          <em className="italic font-normal"> at every scale.</em>
        </h1>
        <p className="mt-10 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          We serve organizations that sell housing — from regional builders to
          national developers — with the structured outbound capacity their
          internal teams are unable to operate at scale.
        </p>
      </section>

      <section className="border-y border-border surface-subtle">
        <div className="container-x py-24 md:py-32">
          <span className="eyebrow">Industries</span>
          <h2 className="mt-6 text-4xl md:text-5xl max-w-3xl">
            Operationally aligned to how housing actually sells.
          </h2>
          <div className="mt-16 grid md:grid-cols-2 gap-px bg-border hairline">
            {sectors.map((s) => (
              <div key={s.n} className="bg-background p-10">
                <span className="font-display text-muted-foreground text-xl">{s.n}</span>
                <h3 className="mt-8 text-2xl">{s.t}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-28 md:py-36">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <span className="eyebrow">Where We Operate</span>
            <h2 className="mt-6 text-4xl md:text-5xl">Active markets.</h2>
          </div>
          <Link to="/contact" className="link-arrow">Discuss your market →</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-border hairline">
          {regions.map((r) => (
            <div key={r.city} className="bg-background p-10">
              <h3 className="text-3xl">{r.city}</h3>
              <p className="mt-3 text-sm uppercase tracking-[0.22em] text-muted-foreground">
                {r.region}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
