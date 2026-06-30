import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { OrbitMark } from "@/components/site/Graphics";
import brookePhoto from "@/assets/brooke-scott.png.asset.json";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About, Velocity Affiliates" },
      { name: "description", content: "Built from inside the builder world. Founded by Brooke Scott after 25+ years inside builder sales and developer operations across North America." },
      { property: "og:title", content: "About, Velocity Affiliates" },
      { property: "og:description", content: "The execution layer between your CRM and your sales floor, founded by Brooke Scott." },
      { property: "og:image", content: brookePhoto.url },
      { name: "twitter:image", content: brookePhoto.url },
    ],
  }),
});

function About() {
  return (
    <div>
      <Nav />

      {/* HERO */}
      <section className="container-x pt-44 md:pt-56 pb-24 grid md:grid-cols-12 gap-12 items-end">
        <div className="md:col-span-9">
          <span className="eyebrow">About</span>
          <h1 className="mt-8 display-xl text-5xl md:text-7xl">
            Built from inside
            <em className="italic font-normal"> the builder world.</em>
          </h1>
          <div className="mt-10 max-w-2xl space-y-5 text-lg text-muted-foreground leading-relaxed">
            <p>
              Brooke Scott founded Velocity after 25+ years working inside
              builder sales and developer operations across North America.
              She has sat in the sales office, run the outbound programs,
              managed the CRM, and watched warm leads go cold because nobody
              owned the follow-through layer.
            </p>
            <p className="text-foreground">
              Velocity exists because she got tired of watching that happen.
            </p>
          </div>
        </div>
        <div className="md:col-span-3 flex md:justify-end">
          <OrbitMark className="w-40 h-40 text-ink" />
        </div>
      </section>

      {/* FOUNDER PHOTO + BIO */}
      <section className="border-y border-border">
        <div className="container-x py-20 md:py-28 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-6">
            <figure className="relative overflow-hidden">
              <img
                src={brookePhoto.url}
                alt="Brooke Scott, Founder of Velocity Affiliates"
                width={1536}
                height={1024}
                className="w-full h-auto object-cover"
              />
            </figure>
          </div>
          <div className="md:col-span-6">
            <span className="eyebrow">Founder</span>
            <h2 className="mt-6 font-display text-4xl md:text-5xl leading-tight">
              Brooke Scott
            </h2>
            <p className="mt-3 text-muted-foreground text-lg">
              Founder, Velocity Affiliates
            </p>
            <div className="mt-8 space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                Brooke brings 25+ years of builder sales and developer
                operations experience to every engagement. She has worked
                across master-planned communities, concrete towers, townhome
                releases, and multi-phase portfolios — and understands the
                gap between what marketing generates and what sales actually
                converts.
              </p>
              <p className="text-foreground">
                Velocity is not a call center. It is not a marketing agency.
                It is the execution layer that sits between your CRM and
                your sales floor — running daily, reporting weekly, and
                protecting momentum at every stage of the pipeline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE GAP */}
      <section className="surface-subtle border-b border-border">
        <div className="container-x py-24 md:py-32 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <span className="eyebrow">The Gap</span>
            <h2 className="mt-6 text-4xl md:text-5xl">A quiet operational gap.</h2>
          </div>
          <div className="md:col-span-7 space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Most builders are not losing deals because of poor marketing
              or weak product. They are losing deals because outbound
              follow-through is inconsistent.
            </p>
            <p>
              Sales teams are correctly focused on walk-ins, appointments,
              and contracts. Nobody is systematically working the database,
              reactivating dormant prospects, following up after events, or
              keeping Realtors engaged between releases.
            </p>
            <p className="text-foreground font-display text-2xl md:text-3xl leading-snug">
              That gap is where momentum dies. Velocity closes it.
            </p>
          </div>
        </div>
      </section>

      {/* OPERATIONAL NOT PROMOTIONAL */}
      <section className="container-x py-28 md:py-36 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <span className="eyebrow">Operational. Not Promotional.</span>
          <h2 className="mt-6 text-4xl md:text-5xl">
            Operational.
            <em className="italic font-normal"> Not promotional.</em>
          </h2>
        </div>
        <div className="md:col-span-7 space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            Velocity does not run brand awareness campaigns or generate new
            leads. We work what you already have — your database, your
            Realtor relationships, your event RSVPs, your dormant pipeline —
            and we turn that existing asset into booked appointments and
            measurable momentum.
          </p>
          <p className="text-foreground font-display text-2xl md:text-3xl leading-snug">
            Every engagement is tracked, reported, and accountable to
            outcomes. Not activity. Outcomes.
          </p>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="border-t border-border">
        <div className="container-x py-24 md:py-32 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-8">
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05]">
              Let's talk about your portfolio.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              We'll come back with a clear path to launch within two weeks.
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
