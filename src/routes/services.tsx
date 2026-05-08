import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/services")({
  component: Services,
  head: () => ({
    meta: [
      { title: "Services — Velocity Affiliates" },
      { name: "description", content: "Outbound calling, event RSVP campaigns, database reactivation, appointment coordination, CRM execution, and reporting — built as infrastructure." },
    ],
  }),
});

const groups = [
  {
    title: "Outreach Execution",
    items: [
      ["High-Volume Outbound Calling", "Structured daily call volume across multiple databases, with cadences designed for engagement, not noise."],
      ["Realtor & Broker Outreach", "Broker activation campaigns that re-engage agents, communicate inventory, and surface real opportunities."],
      ["Prospect Re-Engagement", "Live human conversations across nurture and aged leads to qualify intent and create urgency."],
    ],
  },
  {
    title: "Appointment & Event Engine",
    items: [
      ["Event RSVP Campaigns", "Pre-event invites, confirmations, reminder cadences, and post-event follow-through built into the call workflow."],
      ["Appointment Coordination", "Booked, confirmed, and CRM-logged appointments delivered for clean sales handoff."],
      ["Follow-Up Systems", "Multi-touch sequences that hold prospects accountable to next steps — without leaning on the sales team."],
    ],
  },
  {
    title: "Sales Operations Support",
    items: [
      ["CRM Organization & Execution", "Hygiene, tagging, pipeline structure, and daily activity logging so your data reflects reality."],
      ["Reporting & Feedback Loops", "Weekly consolidated reporting and on-the-ground feedback themes from real conversations."],
      ["Team Accountability & Communication", "Cadences, check-ins, and structured communication that keep outbound momentum visible across leadership."],
    ],
  },
];

function Services() {
  return (
    <div>
      <section className="surface-dark relative">
        <Nav variant="dark" />
        <div className="container-x pt-40 pb-24 md:pt-52 md:pb-32">
          <span className="eyebrow">Services</span>
          <h1 className="mt-6 font-display text-5xl md:text-7xl text-surface-foreground max-w-4xl leading-[1.05]">
            Outbound systems, run with operational rigor.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-surface-foreground/75">
            We design and operate the outbound execution layer your sales team doesn't have the
            bandwidth to build internally — fully integrated into your CRM, your calendar, and
            your reporting.
          </p>
        </div>
      </section>

      <section className="container-x py-24 md:py-32 space-y-24">
        {groups.map((g) => (
          <div key={g.title} className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-4">
              <span className="eyebrow !text-foreground/50">{g.title}</span>
              <div className="mt-6 h-px w-16 bg-accent" />
            </div>
            <div className="md:col-span-8 space-y-px bg-border rounded-2xl overflow-hidden border border-border">
              {g.items.map(([t, d]) => (
                <div key={t} className="bg-card p-8 hover:bg-secondary transition-colors">
                  <h3 className="text-2xl">{t}</h3>
                  <p className="mt-3 text-foreground/70">{d}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="container-x pb-32">
        <div className="rounded-3xl surface-dark p-10 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <span className="eyebrow">Engagement</span>
            <h2 className="mt-4 text-3xl md:text-4xl text-surface-foreground max-w-xl">
              Built for portfolios. Launched in two weeks.
            </h2>
          </div>
          <Link to="/contact" className="btn-accent">Start a Conversation →</Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
