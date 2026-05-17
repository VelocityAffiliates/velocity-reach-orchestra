import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { SystemDiagram } from "@/components/site/Graphics";
import servicesPortfolio from "@/assets/services-portfolio.jpg";

export const Route = createFileRoute("/services")({
  component: Services,
  head: () => ({
    meta: [
      { title: "Services, Velocity Affiliates" },
      { name: "description", content: "Realtor outreach, database reactivation, event acceleration, appointment coordination, leadership alignment, and sales enablement, built as outbound infrastructure for homebuilders." },
      { property: "og:title", content: "Services, Velocity Affiliates" },
      { property: "og:description", content: "Structured outbound infrastructure for homebuilders." },
    ],
  }),
});

const groups = [
  {
    n: "01",
    title: "Realtor Outreach",
    sub: "Broker activation, run as a discipline.",
    items: [
      ["Broker database activation", "Live, structured outreach across your active and aspirational broker network."],
      ["One-to-one conversations", "Real human dialogue, never bulk email blasts or automated drips."],
      ["Appointment generation", "Booked previews, project tours, and broker-led buyer introductions."],
      ["Geographic targeting", "Outreach calibrated to community catchments and feeder markets."],
      ["Urgency-driven messaging", "Inventory updates, incentive windows, and release timing."],
    ],
  },
  {
    n: "02",
    title: "Database Reactivation",
    sub: "Recover the pipeline you've already paid for.",
    items: [
      ["Dormant lead recovery", "Systematic re-engagement of aged registrants and stalled prospects."],
      ["Nurture recovery", "Re-establish the conversation where automation went silent."],
      ["Pipeline momentum", "Surface real buying signals already sitting inside your CRM."],
      ["Re-engagement cadences", "Multi-touch outreach across call, text, and follow-up."],
      ["Lead prioritization", "Tagging and disposition that reflect actual readiness, not lead age."],
    ],
  },
  {
    n: "03",
    title: "Event Acceleration",
    sub: "RSVPs become attendance. Attendance becomes appointments.",
    items: [
      ["RSVP outreach", "Personal invitation calls in addition to email and SMS."],
      ["Confirmations", "Pre-event confirmation cadence to reduce no-shows."],
      ["Reminders", "Day-of and week-of reminders sequenced for attendance lift."],
      ["Attendance tracking", "Live confirmation status and attendance reporting."],
      ["No-show recovery", "Same-week outreach to re-engage missed registrants."],
      ["Post-event appointments", "Booked previews from event traffic before the momentum fades."],
    ],
  },
  {
    n: "04",
    title: "Appointment Coordination",
    sub: "Protect the moment between interest and walk-in.",
    items: [
      ["Appointment scheduling", "Booked directly to the right calendar inside your sales operation."],
      ["Confirmations", "Multi-touch confirmation to maximize show rates."],
      ["CRM visibility", "Every appointment logged with disposition, source, and notes."],
      ["Seamless sales handoff", "Briefed, ready prospects delivered to your onsite team."],
      ["Reduced no-shows", "Confirmation cadence designed around builder show-rate realities."],
    ],
  },
  {
    n: "05",
    title: "Leadership & Alignment Support",
    sub: "Visibility across marketing, sales, and ownership.",
    items: [
      ["Leadership visibility", "Weekly executive reporting on outbound activity and pipeline movement."],
      ["Workflow alignment", "Shared cadence with marketing, sales, and project leadership."],
      ["Sales / marketing coordination", "A shared operating rhythm between two functions that often drift."],
      ["Operational accountability", "Clear owners, clear cadences, clear reporting."],
      ["Event planning cadence", "Pre-event, event, and post-event coordination across stakeholders."],
    ],
  },
  {
    n: "06",
    title: "Sales Enablement",
    sub: "Equip the floor to close what we deliver.",
    items: [
      ["Scripts & messaging", "Builder-specific scripting tested in live conversations."],
      ["Outbound cadence design", "Touch sequences engineered around buyer and broker behavior."],
      ["Follow-up systems", "Structured handoff and follow-through frameworks."],
      ["Role clarity", "Clean boundaries between Velocity, OSC, and onsite sales."],
      ["Accountability frameworks", "Visible standards across every community in the portfolio."],
    ],
  },
  {
    n: "07",
    title: "CRM & Operational Enablement",
    sub: "Operational systems designed for homebuilders and developers.",
    items: [
      ["CRM workflow alignment", "Configured cadences, dispositions, and stages that mirror how your sales operation actually runs."],
      ["Lead routing & segmentation", "Structured routing logic and segmentation that protect speed-to-lead and project-level accountability."],
      ["Sales & marketing visibility", "Shared operating view across marketing investment, outbound activity, and sales outcomes."],
      ["Appointment tracking systems", "Booked, confirmed, attended, and outcome states tracked end-to-end inside the CRM."],
      ["Follow-up accountability", "Cadence ownership and follow-through standards visible across teams and communities."],
      ["Event workflow coordination", "Pre-event, event-day, and post-event workflows aligned across marketing, sales, and Velocity."],
      ["Team adoption support", "Embedded operating cadence that drives consistent CRM usage across your sales floor."],
      ["Reporting & operational clarity", "Leadership reporting structured around pipeline movement, not vanity activity."],
    ],
  },
];

function Services() {
  return (
    <div>
      <Nav />
      <section className="container-x pt-44 md:pt-56 pb-20">
        <span className="eyebrow">Capabilities</span>
        <h1 className="mt-8 display-xl text-5xl md:text-7xl max-w-5xl">
          Structured outbound execution
          <em className="italic font-normal"> for homebuilders and developers.</em>
        </h1>
        <p className="mt-10 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Seven interlocking disciplines operating as a single execution system
          across your portfolio. Fully integrated into your CRM, calendars,
          reporting, and sales workflow.
        </p>
      </section>

      <section className="border-y border-border surface-subtle">
        <div className="container-x py-20 md:py-24">
          <SystemDiagram className="w-full max-w-4xl mx-auto h-auto text-ink" />
        </div>
      </section>

      <section className="border-b border-border">
        {groups.map((g) => (
          <div key={g.n} className="border-b border-border last:border-b-0">
            <div className="container-x py-20 md:py-28 grid md:grid-cols-12 gap-12">
              <div className="md:col-span-4">
                <div className="font-display text-muted-foreground text-xl">{g.n}</div>
                <h2 className="mt-8 text-3xl md:text-4xl">{g.title}</h2>
                <p className="mt-5 text-muted-foreground leading-relaxed">{g.sub}</p>
                {g.n === "07" && (
                  <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
                    Velocity works alongside builder leadership teams to improve
                    operational clarity, CRM usage, reporting visibility, and
                    sales coordination across active portfolios.
                  </p>
                )}
              </div>
              <div className="md:col-span-8">
                <ul className="grid sm:grid-cols-2 gap-px bg-border hairline">
                  {g.items.map(([t, d]) => (
                    <li key={t} className="bg-background p-7">
                      <h3 className="text-lg">{t}</h3>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{d}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="border-t border-border">
        <div className="container-x py-24 md:py-32">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <h2 className="text-3xl md:text-5xl max-w-2xl">
              A single execution system across your portfolio.
            </h2>
            <a href="https://calendly.com/brooke-velocityaffiliates/introduction-to-velocity-affliates" target="_blank" rel="noopener noreferrer" className="btn-primary">Start a Conversation</a>
          </div>
          <figure className="mt-16 md:mt-20 border-t border-border pt-12 md:pt-16">
            <img
              src={servicesPortfolio}
              alt="Aerial twilight view of a master-planned residential community"
              loading="lazy"
              width={1920}
              height={1080}
              className="w-full h-[44vh] md:h-[60vh] object-cover"
            />
          </figure>
        </div>
      </section>
      <Footer />
    </div>
  );
}
