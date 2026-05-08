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
      <Nav />
      <section className="container-x pt-40 pb-20 md:pt-56 md:pb-28">
        <span className="eyebrow">Services</span>
        <h1 className="mt-8 font-display text-5xl md:text-7xl max-w-4xl leading-[1.05]">
          Outbound systems, run with operational rigor.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          We design and operate the outbound execution layer your sales team doesn't have the
          bandwidth to build internally — fully integrated into your CRM, your calendar, and your
          reporting.
        </p>
      </section>

      <section className="border-t border-border">
        {groups.map((g) => (
          <div key={g.title} className="border-b border-border">
            <div className="container-x py-20 md:py-24 grid md:grid-cols-12 gap-12">
              <div className="md:col-span-4">
                <span className="eyebrow">{g.title}</span>
              </div>
              <div className="md:col-span-8 grid-lines">
                {g.items.map(([t, d]) => (
                  <div key={t} className="py-8 first:pt-0">
                    <h3 className="text-2xl md:text-3xl">{t}</h3>
                    <p className="mt-3 text-muted-foreground leading-relaxed max-w-2xl">{d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="container-x py-24 md:py-32">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <h2 className="text-3xl md:text-5xl max-w-2xl">
            Built for portfolios. Launched in two weeks.
          </h2>
          <Link to="/contact" className="btn-primary">Start a conversation</Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
