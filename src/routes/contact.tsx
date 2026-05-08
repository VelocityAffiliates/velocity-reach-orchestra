import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact — Velocity Affiliates" },
      { name: "description", content: "Book a strategy call with Velocity Affiliates to design the outbound execution layer for your sales organization." },
    ],
  }),
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <div>
      <section className="surface-dark relative">
        <Nav variant="dark" />
        <div className="container-x pt-40 pb-20 md:pt-52 md:pb-28">
          <span className="eyebrow">Contact</span>
          <h1 className="mt-6 font-display text-5xl md:text-7xl text-surface-foreground max-w-4xl leading-[1.05]">
            Let's design your outbound execution layer.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-surface-foreground/75">
            Tell us about your portfolio, your sales motion, and what's currently going untouched.
            We'll come back with a clear path to launch within two weeks.
          </p>
        </div>
      </section>

      <section className="container-x py-24 md:py-32 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5 space-y-10">
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-foreground/50">Email</div>
            <a href="mailto:brooke@velocityaffiliates.com" className="mt-2 block font-display text-2xl hover:text-accent">brooke@velocityaffiliates.com</a>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-foreground/50">Offices</div>
            <div className="mt-2 font-display text-2xl">Vancouver · Victoria · Kelowna</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-foreground/50">Markets</div>
            <div className="mt-2 font-display text-2xl">Canada &nbsp;|&nbsp; United States</div>
          </div>
          <div className="rule" />
          <p className="text-foreground/70">
            Prefer a direct intro? Send a note with your portfolio size, current CRM, and the
            campaign you'd like to launch first.
          </p>
        </div>

        <form
          className="md:col-span-7 rounded-2xl border border-border bg-card p-8 md:p-10 space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          {sent ? (
            <div className="py-16 text-center">
              <div className="font-display text-3xl">Thank you.</div>
              <p className="mt-3 text-foreground/70">We'll be in touch within one business day.</p>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 gap-5">
                <Field label="Name" name="name" required />
                <Field label="Company" name="company" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone" name="phone" />
              </div>
              <Field label="Role" name="role" placeholder="VP Sales, Marketing Director, Owner…" />
              <div>
                <label className="text-xs uppercase tracking-[0.18em] text-foreground/50">What do you want Velocity to run?</label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 outline-none focus:border-accent transition-colors"
                />
              </div>
              <button type="submit" className="btn-accent">Send Inquiry →</button>
            </>
          )}
        </form>
      </section>
      <Footer />
    </div>
  );
}

function Field({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs uppercase tracking-[0.18em] text-foreground/50">{label}{required && <span className="text-accent"> *</span>}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 outline-none focus:border-accent transition-colors"
      />
    </div>
  );
}
