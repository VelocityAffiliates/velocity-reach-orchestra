import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { StackedBars } from "@/components/site/Graphics";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
  head: () => ({
    meta: [
      { title: "Projects & Case Studies, Velocity Affiliates" },
      { name: "description", content: "Selected projects and outbound execution programs delivered for builders, developers, and sales organizations." },
      { property: "og:title", content: "Projects, Velocity Affiliates" },
      { property: "og:description", content: "Selected execution programs across residential development." },
    ],
  }),
});

const projects = [
  {
    n: "01",
    t: "Master-Planned Community",
    region: "Lower Mainland, BC",
    type: "Multi-Phase Release",
    metric: "120% of forecast",
    body: "Dedicated outbound program across registered database and broker network ahead of Phase 2 release. Drove sales pace 4 months ahead of projection.",
  },
  {
    n: "02",
    t: "Concrete High-Rise Tower",
    region: "Vancouver, BC",
    type: "Pre-Sale Launch",
    metric: "1,800+ touches",
    body: "Pre-launch broker activation and database warm-up. Booked appointment volume sustained from launch weekend through three release events.",
  },
  {
    n: "03",
    t: "Townhome Community",
    region: "Fraser Valley, BC",
    type: "Standing Inventory",
    metric: "Sold out in 9 weeks",
    body: "Inventory acceleration program: structured re-engagement of aged registrants, paired with broker incentive outreach. Closed remaining inventory ahead of construction completion.",
  },
  {
    n: "04",
    t: "Lakefront Development",
    region: "Okanagan, BC",
    type: "Event Engine",
    metric: "92% RSVP rate",
    body: "Invitation, confirmation, and reminder cadence for two preview events. Delivered consistent attendance from out-of-market buyers.",
  },
];

function ProjectsPage() {
  return (
    <div>
      <Nav />

      <section className="container-x pt-44 md:pt-56 pb-24">
        <span className="eyebrow">Projects</span>
        <h1 className="mt-8 display-xl text-5xl md:text-7xl max-w-5xl">
          Selected execution
          <em className="italic font-normal"> programs.</em>
        </h1>
        <p className="mt-10 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Representative engagements across multi-phase communities, towers,
          townhome programs, and event-driven release campaigns.
        </p>
      </section>

      <section className="border-y border-border surface-subtle">
        <div className="container-x py-20 md:py-24 grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-4">
            <span className="eyebrow">Portfolio Pace</span>
            <h2 className="mt-6 text-3xl md:text-4xl">Sales motion across active engagements.</h2>
          </div>
          <div className="md:col-span-8">
            <StackedBars className="w-full h-auto text-ink" />
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="container-x">
          {projects.map((p, i) => (
            <article
              key={p.n}
              className={`grid md:grid-cols-12 gap-10 py-16 md:py-24 ${
                i > 0 ? "border-t border-border" : ""
              }`}
            >
              <div className="md:col-span-4">
                <div className="font-display text-muted-foreground text-xl">{p.n}</div>
                <div className="mt-8 text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                  {p.region}
                </div>
                <div className="mt-2 text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                  {p.type}
                </div>
              </div>
              <div className="md:col-span-5">
                <h2 className="text-3xl md:text-4xl">{p.t}</h2>
                <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
                  {p.body}
                </p>
              </div>
              <div className="md:col-span-3 md:text-right">
                <div className="font-display text-3xl md:text-4xl">{p.metric}</div>
                <div className="mt-3 text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                  Outcome
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border">
        <div className="container-x py-24 md:py-32 flex flex-wrap items-end justify-between gap-6">
          <h2 className="text-4xl md:text-5xl max-w-2xl">
            Considering Velocity for an upcoming release?
          </h2>
          <Link to="/appointment" className="btn-primary">Book a Call</Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
