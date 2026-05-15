import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact, Velocity Affiliates" },
      { name: "description", content: "Book a strategy call with Velocity Affiliates to design the outbound execution layer for your sales organization." },
    ],
  }),
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <div>
      <Nav />
      <section className="container-x pt-40 pb-16 md:pt-56 md:pb-20">
        <span className="eyebrow">Contact</span>
        <h1 className="mt-8 font-display text-5xl md:text-7xl max-w-4xl leading-[1.05]">
          Let's discuss your communities, database, and sales goals.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Tell us about your portfolio, your sales motion, and what's currently going untouched.
          We'll come back with a clear path to launch within two weeks.
        </p>
      </section>

      <section className="border-t border-border">
        <div className="container-x py-20 md:py-28 grid md:grid-cols-12 gap-16">
          <div className="md:col-span-4 space-y-10">
            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Email</div>
              <a href="mailto:brooke@velocityaffiliates.com" className="mt-3 block font-display text-xl">brooke@velocityaffiliates.com</a>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Offices</div>
              <div className="mt-3 font-display text-xl">Vancouver · Victoria · Kelowna</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Markets</div>
              <div className="mt-3 font-display text-xl">Canada &nbsp;·&nbsp; United States</div>
            </div>
          </div>

          <form
            className="md:col-span-8 space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            {sent ? (
              <div className="py-20 text-center border border-border rounded-xl">
                <div className="font-display text-3xl">Thank you.</div>
                <p className="mt-3 text-muted-foreground">We'll be in touch within one business day.</p>
              </div>
            ) : (
              <>
                <div className="grid md:grid-cols-2 gap-6">
                  <Field label="Name" name="name" required />
                  <Field label="Company" name="company" required />
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Phone" name="phone" />
                </div>
                <Field label="Role" name="role" placeholder="VP Sales, Marketing Director, Owner…" />
                <div>
                  <label htmlFor="message" className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                    What do you want Velocity to run?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="mt-3 w-full border-b border-border bg-transparent py-3 outline-none focus:border-foreground transition-colors resize-none"
                  />
                </div>
                <div className="pt-4">
                  <button type="submit" className="btn-primary">Send inquiry</button>
                </div>
              </>
            )}
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}

function Field({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
        {label}{required && " *"}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-3 w-full border-b border-border bg-transparent py-3 outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground/60"
      />
    </div>
  );
}
