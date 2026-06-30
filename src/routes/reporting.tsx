import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { DashboardTile, StackedBars } from "@/components/site/Graphics";
import pageReporting from "@/assets/page-reporting.jpg";

export const Route = createFileRoute("/reporting")({
  component: ReportingPage,
  head: () => ({
    meta: [
      { title: "Reporting & Insights, Velocity Affiliates" },
      { name: "description", content: "Leadership visibility without added complexity. Weekly reporting on outbound activity, appointments, broker sentiment, event performance, and database health." },
      { property: "og:title", content: "Reporting & Insights, Velocity Affiliates" },
      { property: "og:description", content: "Strategic intelligence and reporting for builder leadership teams." },
    ],
  }),
});

const streams = [
  { t: "Weekly Reporting", d: "A single executive-level summary of outbound activity, conversations, and appointments — delivered every week without being asked for." },
  { t: "Engagement Themes", d: "What buyers and brokers are actually responding to, in real time across your communities." },
  { t: "Objection Tracking", d: "Recurring resistance patterns across pricing, product, financing, and timing — identified before they become a sales problem." },
  { t: "Appointment Flow", d: "Booking volume, confirmation rates, attendance, and disposition tracking across every active community." },
  { t: "Realtor Sentiment", d: "What brokers are saying, what they're hearing from buyers, and what's driving or stalling their engagement with your communities." },
  { t: "Buyer Reactivation", d: "Who came back, what reactivated them, and what pipeline movement resulted from outbound effort." },
  { t: "Event Performance", d: "RSVP, confirmation, attendance, and post-event appointment conversion — in one place." },
  { t: "Database Health", d: "Coverage, engagement gaps, agent activity, and demand alignment across your CRM." },
  { t: "Operational Trends", d: "Week-over-week patterns that inform marketing positioning, sales strategy, and release timing." },
];

function ReportingPage() {
  return (
    <div>
      <Nav />

      <section className="container-x pt-44 md:pt-56 pb-24">
        <span className="eyebrow">Reporting & Insights</span>
        <h1 className="mt-8 display-xl text-5xl md:text-7xl max-w-5xl">
          Leadership visibility,
          <em className="italic font-normal"> without added complexity.</em>
        </h1>
        <p className="mt-10 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Every week, Velocity gives builder leadership a single, clear view into
          what's happening between marketing, sales, and the buyer — across every
          active community in the portfolio.
        </p>
      </section>

      {/* IMAGE BANNER */}
      <section className="container-x pb-20 md:pb-28">
        <figure className="relative overflow-hidden">
          <img
            src={pageReporting}
            alt="A laptop showing soft analytics in warm morning light"
            width={1920}
            height={1024}
            loading="lazy"
            className="w-full h-[44vh] md:h-[64vh] object-cover"
          />
        </figure>
      </section>

      {/* DASHBOARD */}
      <section className="border-y border-border surface-subtle">
        <div className="container-x py-20 md:py-28">
          <div className="border border-border bg-background p-6 md:p-10">
            <DashboardTile className="w-full h-auto text-ink" />
          </div>
        </div>
      </section>

      {/* STREAMS */}
      <section className="container-x py-28 md:py-36">
        <div className="max-w-2xl mb-14">
          <h2 className="text-4xl md:text-5xl">Nine reporting streams. One operational view.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-border hairline">
          {streams.map((s, i) => (
            <div key={s.t} className="bg-background p-8 md:p-10">
              <span className="font-display text-muted-foreground text-lg">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 text-xl">{s.t}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed text-sm">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* REPORTING STANDARD */}
      <section className="border-y border-border bg-ink text-white">
        <div className="container-x py-28 md:py-36 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <span className="eyebrow text-white/60">Reporting Standard</span>
          </div>
          <div className="md:col-span-8">
            <h2 className="font-display text-3xl md:text-5xl leading-[1.1] text-white">
              Reporting that reflects the work, not the marketing of the work.
            </h2>
            <div className="mt-8 space-y-5 text-white/70 leading-relaxed text-lg max-w-2xl">
              <p>
                Built for VPs of Sales, ownership groups, and project leadership who
                need a clear, weekly read on outbound momentum across every community
                in the portfolio.
              </p>
              <p>
                This is not a vanity report. It is an operational document — specific,
                measurable, and accountable to outcomes your sales team can act on
                immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THROUGHPUT */}
      <section className="container-x py-28 md:py-36">
        <div className="max-w-2xl mb-12">
          <span className="eyebrow">Throughput</span>
          <h2 className="mt-6 text-3xl md:text-4xl">Output measured, weekly.</h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Every week, leadership knows exactly what was contacted, what responded,
            what was booked, and what needs a next step.
          </p>
        </div>
        <StackedBars className="w-full h-auto text-ink" />
      </section>

      {/* SAMPLE REPORT CTA */}
      <section className="border-t border-border">
        <div className="container-x py-24 md:py-32 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-8">
            <h2 className="text-4xl md:text-5xl max-w-2xl">
              See exactly what lands in your leadership inbox.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              Request a sample report and we'll show you what weekly visibility looks
              like across an active builder portfolio.
            </p>
          </div>
          <div className="md:col-span-4 md:flex md:justify-end">
            <a
              href="https://calendly.com/brooke-velocityaffiliates/introduction-to-velocity-affliates"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Request a Sample Report
            </a>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="border-t border-border">
        <div className="container-x py-24 md:py-32 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-8">
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05] max-w-3xl">
              Want this level of visibility across your portfolio?
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
