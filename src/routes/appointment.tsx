import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/appointment")({
  component: AppointmentPage,
  head: () => ({
    meta: [
      { title: "Book an Appointment — Velocity Affiliates" },
      { name: "description", content: "Schedule a strategy call with the Velocity Affiliates team." },
      { property: "og:title", content: "Book an Appointment — Velocity Affiliates" },
      { property: "og:description", content: "Schedule a 30-minute strategy call." },
    ],
  }),
});

function AppointmentPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <div>
      <Nav />

      <section className="container-x pt-44 md:pt-56 pb-20">
        <span className="eyebrow">Book An Appointment</span>
        <h1 className="mt-8 display-xl text-5xl md:text-7xl max-w-4xl">
          Schedule a 30-minute
          <em className="italic font-normal"> strategy call.</em>
        </h1>
        <p className="mt-10 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Walk us through your portfolio, your sales motion, and where momentum
          is leaking. We'll outline what an embedded outbound program would look
          like for your projects.
        </p>
      </section>

      <section className="border-t border-border">
        <div className="container-x py-20 md:py-28 grid md:grid-cols-12 gap-12">
          <aside className="md:col-span-4 space-y-10">
            <div>
              <span className="eyebrow">What to Expect</span>
              <ul className="mt-6 space-y-4 text-sm leading-relaxed">
                <li className="flex gap-3">
                  <span className="font-display text-muted-foreground">01</span>
                  Portfolio + sales motion review
                </li>
                <li className="flex gap-3">
                  <span className="font-display text-muted-foreground">02</span>
                  Identify follow-through gaps
                </li>
                <li className="flex gap-3">
                  <span className="font-display text-muted-foreground">03</span>
                  Outline a fit-for-purpose program
                </li>
              </ul>
            </div>
            <div>
              <span className="eyebrow">Direct</span>
              <p className="mt-6 text-sm">
                <a href="mailto:brooke@velocityaffiliates.com" className="link-arrow !text-sm">
                  brooke@velocityaffiliates.com
                </a>
              </p>
            </div>
          </aside>

          <div className="md:col-span-8">
            {submitted ? (
              <div className="border border-border p-10 md:p-14">
                <span className="eyebrow">Received</span>
                <h2 className="mt-6 text-3xl md:text-4xl">Thank you.</h2>
                <p className="mt-5 text-muted-foreground leading-relaxed">
                  We'll be in touch within one business day to confirm a time.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8"
              >
                <Field label="Full Name" name="name" required />
                <Field label="Company" name="company" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone" name="phone" type="tel" />
                <Field label="Role" name="role" />
                <Field label="Markets / Region" name="market" />
                <div className="md:col-span-2">
                  <label className="block text-[11px] uppercase tracking-[0.28em] text-muted-foreground mb-3">
                    Preferred Time
                  </label>
                  <select className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-ink transition-colors">
                    <option>Mornings (PT)</option>
                    <option>Afternoons (PT)</option>
                    <option>Flexible</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-[11px] uppercase tracking-[0.28em] text-muted-foreground mb-3">
                    Briefly, what's the situation?
                  </label>
                  <textarea
                    rows={5}
                    className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-ink transition-colors resize-none"
                  />
                </div>
                <div className="md:col-span-2 pt-4">
                  <button type="submit" className="btn-primary">Request Appointment</button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-[11px] uppercase tracking-[0.28em] text-muted-foreground mb-3"
      >
        {label}
        {required && <span className="ml-1">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-ink transition-colors"
      />
    </div>
  );
}
