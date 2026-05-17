import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { OrbitMark } from "@/components/site/Graphics";
import pageCompany from "@/assets/page-company.jpg";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About, Velocity Affiliates" },
      { name: "description", content: "Built from inside the builder world. Velocity Affiliates is the outbound execution and momentum infrastructure company for homebuilders and developers." },
      { property: "og:title", content: "About, Velocity Affiliates" },
      { property: "og:description", content: "Operational infrastructure for builder sales momentum, founded by Brooke Scott." },
    ],
  }),
});

const differences = [
  { t: "Massive outbound volume", d: "Thousands of live conversations every week, sustained across portfolios." },
  { t: "Human-first outreach", d: "Every call is conducted by a real person trained in builder sales psychology." },
  { t: "Live appointment coordination", d: "Confirmed, CRM-logged, ready for sales handoff, never a thrown lead." },
  { t: "Event acceleration systems", d: "Invitation, confirmation, reminder, and recovery cadences run as a single motion." },
  { t: "Builder specialization", d: "We work exclusively with homebuilders, developers, and their sales partners." },
  { t: "Leadership-level reporting", d: "Weekly visibility your VPs and ownership group can actually act on." },
  { t: "Execution speed", d: "Programs typically launch within two weeks of alignment." },
  { t: "Operational visibility", d: "Reporting that reflects the work, not the marketing of the work." },
];

function About() {
  return (
    <div>
      <Nav />

      <section className="container-x pt-44 md:pt-56 pb-24 grid md:grid-cols-12 gap-12 items-end">
        <div className="md:col-span-9">
          <span className="eyebrow">About</span>
          <h1 className="mt-8 display-xl text-5xl md:text-7xl">
            Built from inside
            <em className="italic font-normal"> the builder world.</em>
          </h1>
          <p className="mt-10 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Velocity Affiliates provides homebuilders and developers with one
            capability the industry consistently underbuilds: disciplined,
            human-led execution at scale.
          </p>
        </div>
        <div className="md:col-span-3 flex md:justify-end">
          <OrbitMark className="w-40 h-40 text-ink" />
        </div>
      </section>

      {/* IMAGE BANNER */}
      <section className="container-x pb-20 md:pb-28">
        <figure className="relative overflow-hidden">
          <img
            src={pageCompany}
            alt="Modern collaborative office in warm sunlight"
            width={1920}
            height={1024}
            loading="lazy"
            className="w-full h-[44vh] md:h-[64vh] object-cover"
          />
        </figure>
      </section>

      {/* OUR STORY */}
      <section className="border-y border-border">
        <div className="container-x py-24 md:py-32 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <span className="eyebrow">Our Story</span>
            <h2 className="mt-6 text-3xl md:text-4xl">Founded by Brooke Scott.</h2>
          </div>
          <div className="md:col-span-8 space-y-5 text-lg text-muted-foreground leading-relaxed">
            <p>
              Velocity was founded by Brooke Scott, drawing on more than 25
              years of real estate leadership across builders, developers, and
              sales organizations in North America.
            </p>
            <p>
              After years working alongside marketing departments and onsite
              sales teams, one pattern repeated across nearly every project:
            </p>
            <p className="text-foreground text-2xl font-display leading-snug">
              Builders were generating leads, but no one truly owned outbound
              follow-through at scale.
            </p>
          </div>
        </div>
      </section>

      {/* FOUNDER PERSPECTIVE */}
      <section className="border-b border-border">
        <div className="container-x py-24 md:py-32 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <span className="eyebrow">Founder Perspective</span>
            <h2 className="mt-6 text-3xl md:text-4xl leading-tight">
              The gap that built Velocity.
            </h2>
          </div>
          <div className="md:col-span-8 space-y-5 text-lg text-muted-foreground leading-relaxed">
            <p>
              After more than two decades inside builder sales environments,
              Brooke Scott saw the same operational gap repeatedly:
            </p>
            <ul className="space-y-2 text-foreground">
              <li>Marketing generated leads.</li>
              <li>Sales teams focused on active buyers.</li>
              <li>But nobody consistently owned outbound follow-through at scale.</li>
            </ul>
            <p>
              Velocity was built to solve that specific problem, creating
              disciplined engagement systems that keep databases active,
              brokers connected, and leadership informed across active
              portfolios.
            </p>
            <p>
              Today, Velocity supports builders and developers across North
              America through a combination of structured outreach,
              appointment coordination, operational visibility, and embedded
              advisory support.
            </p>
          </div>
        </div>
      </section>

      {/* WHY VELOCITY EXISTS */}
      <section className="surface-subtle border-b border-border">
        <div className="container-x py-24 md:py-32">
          <div className="max-w-2xl">
            <span className="eyebrow">Why Velocity Exists</span>
            <h2 className="mt-6 text-4xl md:text-5xl">A quiet operational gap.</h2>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-px bg-border hairline">
            {[
              ["Dead databases", "CRMs full of leads no one is consistently working."],
              ["Overloaded sales teams", "Onsite teams correctly focused on contracts and walk-ins."],
              ["Disconnected marketing", "Marketing investment that never reaches a live conversation."],
              ["Weak nurture systems", "Pipelines that decay between launch events."],
              ["Event coordination gaps", "RSVPs that never become attendance, or appointments."],
              ["Limited leadership visibility", "Activity assumed, not actually measured."],
            ].map(([t, d]) => (
              <div key={t} className="bg-background p-8">
                <h3 className="text-xl">{t}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
          <p className="mt-14 max-w-3xl text-xl md:text-2xl font-display leading-snug">
            Velocity is structured outbound execution for homebuilders and developers.
          </p>
        </div>
      </section>

      {/* WHAT MAKES US DIFFERENT */}
      <section className="container-x py-28 md:py-36">
        <div className="max-w-2xl">
          <span className="eyebrow">What Makes Velocity Different</span>
          <h2 className="mt-6 text-4xl md:text-5xl">Operational, not promotional.</h2>
        </div>
        <div className="mt-16 grid md:grid-cols-2 gap-px bg-border hairline">
          {differences.map((d) => (
            <div key={d.t} className="bg-background p-10">
              <h3 className="text-2xl">{d.t}</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">{d.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="border-y border-border bg-ink text-white">
        <div className="container-x py-28 md:py-36 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <span className="eyebrow text-white/60">Our Philosophy</span>
          </div>
          <div className="md:col-span-8 space-y-8">
            <p className="font-display text-3xl md:text-5xl leading-[1.1] text-white">
              We are not a call center.
            </p>
            <p className="font-display text-3xl md:text-5xl leading-[1.1] text-white/70">
              We are not transactional salespeople.
            </p>
            <p className="font-display text-3xl md:text-5xl leading-[1.1] text-white">
              We provide structured outbound execution for homebuilders and developers.
            </p>
          </div>
        </div>
      </section>

      {/* MARKETS + LEADERSHIP */}
      <section className="container-x py-28 md:py-36 grid md:grid-cols-2 gap-16">
        <div>
          <span className="eyebrow">Markets Served</span>
          <h2 className="mt-6 text-3xl md:text-4xl">North America.</h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Portfolio-level builder support across British Columbia, Alberta,
            Ontario, and Pacific Northwest U.S. markets.
          </p>
          <Link to="/markets" className="link-arrow mt-8">View Markets →</Link>
        </div>
        <div>
          <span className="eyebrow">Leadership & Alignment</span>
          <h2 className="mt-6 text-3xl md:text-4xl">Built around your operation.</h2>
          <ul className="mt-8 space-y-4 text-muted-foreground">
            {[
              "Working directly alongside leadership teams",
              "Marketing alignment and shared cadence",
              "Sales enablement and accountability frameworks",
              "Operational rhythm with weekly visibility",
              "Embedded, never outsourced",
            ].map((x) => (
              <li key={x} className="border-b border-border pb-3">
                {x}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* OPERATIONAL ADVISORY */}
      <section className="border-y border-border surface-subtle">
        <div className="container-x py-24 md:py-32 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <span className="eyebrow">Operational Advisory</span>
            <h2 className="mt-6 text-3xl md:text-4xl leading-tight">
              Embedded operational partnership for builder leadership teams.
            </h2>
          </div>
          <div className="md:col-span-8 space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Velocity supports builder leadership teams with the operational
              infrastructure behind sustained sales momentum, integrated
              directly into the way your organization already runs.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Because our team operates inside live builder databases every
              day, leadership gains visibility that most traditional
              consultants never see.
            </p>
            <ul className="grid sm:grid-cols-2 gap-px bg-border hairline">
              {[
                "Sales and marketing alignment",
                "CRM workflow refinement",
                "Outbound cadence strategy",
                "Event system planning",
                "Reporting structure development",
                "Appointment process optimization",
                "Sales enablement systems",
                "Team accountability frameworks",
                "Leadership working sessions",
                "Broker engagement strategy",
                "Pipeline visibility and follow-through systems",
              ].map((t) => (
                <li key={t} className="bg-background p-5 text-base">
                  {t}
                </li>
              ))}
            </ul>
            <p className="text-foreground font-display text-xl md:text-2xl leading-snug max-w-2xl">
              This support is grounded in live execution, not theory, slide
              decks, or disconnected consulting models.
            </p>
          </div>
        </div>
      </section>

      {/* SALES ENABLEMENT SYSTEMS */}
      <section className="border-b border-border">
        <div className="container-x py-24 md:py-32 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <span className="eyebrow">Sales Enablement Systems</span>
            <h2 className="mt-6 text-3xl md:text-4xl leading-tight">
              Built for builder sales environments.
            </h2>
          </div>
          <div className="md:col-span-8 space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Velocity supports onsite sales teams and leadership groups with
              operational enablement designed to improve outbound
              consistency, follow-through discipline, appointment handling,
              and CRM adoption across active communities.
            </p>
            <ul className="grid sm:grid-cols-2 gap-px bg-border hairline">
              {[
                "Outbound cadence frameworks",
                "Follow-up structure and accountability",
                "CRM workflow consistency",
                "Appointment handling processes",
                "Broker engagement strategy",
                "Script refinement and objection handling",
                "Event conversion systems",
                "Sales and marketing alignment",
                "Leadership reporting cadence",
                "Team workflow optimization",
              ].map((t) => (
                <li key={t} className="bg-background p-5 text-base">
                  {t}
                </li>
              ))}
            </ul>
            <p className="text-foreground font-display text-xl md:text-2xl leading-snug max-w-2xl">
              This work is grounded in live field execution across active
              builder portfolios, not generic sales theory.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x pb-24 md:pb-32">
        <div className="flex flex-col md:flex-row justify-between gap-6 items-start md:items-center border-t border-border pt-16">
          <h2 className="font-display text-3xl md:text-5xl max-w-xl">
            Let's talk about momentum across your portfolio.
          </h2>
          <a href="https://calendly.com/brooke-velocityaffiliates/introduction-to-velocity-affliates" target="_blank" rel="noopener noreferrer" className="btn-primary">Book a Strategy Call</a>
        </div>
      </section>
      <Footer />
    </div>
  );
}
