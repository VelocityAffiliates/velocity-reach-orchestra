import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { DashboardTile, StackedBars } from "@/components/site/Graphics";

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
  { t: "Weekly Reporting", d: "A single executive-level summary of outbound activity, conversations, and appointments." },
  { t: "Engagement Themes", d: "What buyers and brokers are actually saying, surfaced from live conversations." },
  { t: "Objection Tracking", d: "Recurring resistance points across pricing, product, financing, and timing." },
  { t: "Appointment Flow", d: "Booking, confirmation, attendance, and disposition across every community." },
  { t: "Realtor Sentiment", d: "Where brokers are leaning, what they're hearing, and how they're positioning your projects." },
  { t: "Buyer Hesitation", d: "Patterns in market hesitation, read in real time, not in retrospect." },
  { t: "Event Performance", d: "RSVP, confirmation, attendance, and post-event appointment conversion." },
  { t: "Database Health", d: "Engagement coverage across active, aged, and dormant segments of your CRM." },
  { t: "Operational Trends", d: "Portfolio-wide patterns that should inform marketing and release strategy." },
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
          Velocity operates as a strategic intelligence and reporting partner, giving
          builder leadership a single, consistent view into what's happening between
          marketing, sales, and the buyer.
        </p>
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
          <span className="eyebrow">What Leadership Sees</span>
          <h2 className="mt-6 text-4xl md:text-5xl">Nine reporting streams. One operating view.</h2>
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

      {/* TONE BLOCK */}
      <section className="border-y border-border bg-ink text-white">
        <div className="container-x py-28 md:py-36 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <span className="eyebrow text-white/60">Operating Standard</span>
          </div>
          <div className="md:col-span-8">
            <p className="font-display text-3xl md:text-5xl leading-[1.1] text-white">
              Reporting that reflects the work, not the marketing of the work.
            </p>
            <p className="mt-8 text-white/70 leading-relaxed text-lg max-w-2xl">
              Built for VPs of Sales, ownership groups, and project leadership who
              need a clear, weekly read on outbound momentum across every
              community in the portfolio.
            </p>
          </div>
        </div>
      </section>

      {/* THROUGHPUT */}
      <section className="container-x py-28 md:py-36">
        <div className="max-w-2xl mb-12">
          <span className="eyebrow">Throughput</span>
          <h2 className="mt-6 text-3xl md:text-4xl">Output measured, weekly.</h2>
        </div>
        <StackedBars className="w-full h-auto text-ink" />
      </section>

      <section className="border-t border-border">
        <div className="container-x py-24 md:py-32 flex flex-wrap items-end justify-between gap-6">
          <h2 className="text-4xl md:text-5xl max-w-2xl">
            See the reporting we deliver to leadership teams.
          </h2>
          <Link to="/appointment" className="btn-primary">Request a Sample</Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
