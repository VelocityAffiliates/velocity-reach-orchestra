import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border mt-32 bg-background">
      <div className="container-x pt-20 pb-12 grid gap-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex flex-col leading-none">
            <span className="font-display text-3xl tracking-[0.01em]">Velocity</span>
            <span className="mt-1 text-[10px] tracking-[0.42em] text-muted-foreground uppercase">
              Affiliates
            </span>
          </div>
          <p className="mt-8 max-w-md text-sm text-muted-foreground leading-relaxed">
            The outbound execution layer between marketing and sales. Structured human
            outreach systems for homebuilders, developers, and sales organizations.
          </p>
          <div className="mt-8 flex gap-3">
            {["LinkedIn", "Instagram", "X"].map((s) => (
              <a
                key={s}
                href="#"
                aria-label={s}
                className="h-9 w-9 grid place-items-center border border-border hover:border-ink transition-colors text-[10px] uppercase tracking-widest"
              >
                {s[0]}
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground mb-5">Explore</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/vision" className="hover:opacity-60 transition-opacity">Vision</Link></li>
            <li><Link to="/services" className="hover:opacity-60 transition-opacity">Services</Link></li>
            <li><Link to="/markets" className="hover:opacity-60 transition-opacity">Markets</Link></li>
            <li><Link to="/projects" className="hover:opacity-60 transition-opacity">Projects</Link></li>
            <li><Link to="/insights" className="hover:opacity-60 transition-opacity">Insights</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground mb-5">Company</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/about" className="hover:opacity-60 transition-opacity">About</Link></li>
            <li><Link to="/approach" className="hover:opacity-60 transition-opacity">Approach</Link></li>
            <li><Link to="/appointment" className="hover:opacity-60 transition-opacity">Book a Call</Link></li>
            <li><Link to="/contact" className="hover:opacity-60 transition-opacity">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground mb-5">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="mailto:brooke@velocityaffiliates.com" className="hover:opacity-60 transition-opacity">
                brooke@velocityaffiliates.com
              </a>
            </li>
            <li className="text-muted-foreground">
              Vancouver · Victoria · Kelowna
            </li>
            <li className="text-muted-foreground">
              Canada &nbsp;·&nbsp; United States
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-x py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          <span>© {new Date().getFullYear()} Velocity Affiliates</span>
          <span>Outbound Growth Infrastructure</span>
        </div>
      </div>
    </footer>
  );
}
