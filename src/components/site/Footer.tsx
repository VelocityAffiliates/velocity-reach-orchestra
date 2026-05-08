import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="surface-dark mt-24">
      <div className="container-x py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-display text-2xl">
            <span className="inline-block h-2 w-2 rounded-full bg-accent" />
            Velocity Affiliates
          </div>
          <p className="mt-4 max-w-md text-sm text-surface-foreground/70">
            The outbound execution layer between your marketing and your sales floor.
            Structured human outreach systems for builders, developers, and sales organizations.
          </p>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.18em] text-accent mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-surface-foreground/80">
            <li><Link to="/services" className="hover:text-accent">Services</Link></li>
            <li><Link to="/approach" className="hover:text-accent">Approach</Link></li>
            <li><Link to="/about" className="hover:text-accent">About</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.18em] text-accent mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-surface-foreground/80">
            <li>brooke@velocityaffiliates.com</li>
            <li>Vancouver · Victoria · Kelowna</li>
            <li>Canada &nbsp;|&nbsp; United States</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-surface-foreground/50">
          <span>© {new Date().getFullYear()} Velocity Affiliates. All rights reserved.</span>
          <span>Outbound growth infrastructure for the built world.</span>
        </div>
      </div>
    </footer>
  );
}
