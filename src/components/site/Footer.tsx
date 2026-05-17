import { Link } from "@tanstack/react-router";
import { Linkedin, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border mt-32 bg-background">
      <div className="container-x pt-20 pb-12 grid gap-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-4 leading-none">
            <img src={logo} alt="Velocity Affiliates" className="h-16 w-16 object-contain" />
            <div className="flex flex-col">
              <span className="font-display text-3xl tracking-[0.01em]">Velocity</span>
              <span className="mt-1 text-[10px] tracking-[0.42em] text-muted-foreground uppercase">
                Affiliates
              </span>
            </div>
          </div>
          <p className="mt-8 max-w-md text-sm text-muted-foreground leading-relaxed">
            Outbound sales execution and momentum infrastructure for homebuilders
            and developers. Realtor outreach, database reactivation, event
            acceleration, and appointment coordination, run as a system.
          </p>
          <div className="mt-8 flex gap-3">
            <a
              href="https://www.linkedin.com/company/velocityaffiliates"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="h-9 w-9 grid place-items-center border border-border hover:border-ink transition-colors"
            >
              <Linkedin size={16} strokeWidth={1.5} />
            </a>
            <a
              href="https://www.instagram.com/velocityaffiliates/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="h-9 w-9 grid place-items-center border border-border hover:border-ink transition-colors"
            >
              <Instagram size={16} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground mb-5">Platform</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/services" className="hover:opacity-60 transition-opacity">Capabilities</Link></li>
            <li><Link to="/results" className="hover:opacity-60 transition-opacity">Execution</Link></li>
            <li><Link to="/reporting" className="hover:opacity-60 transition-opacity">Reporting</Link></li>
            <li><Link to="/blog" className="hover:opacity-60 transition-opacity">Insights</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground mb-5">Company</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/about" className="hover:opacity-60 transition-opacity">Company</Link></li>
            <li><Link to="/markets" className="hover:opacity-60 transition-opacity">Markets</Link></li>
            <li><a href="https://calendly.com/brooke-velocityaffiliates/introduction-to-velocity-affliates" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">Book a Call</a></li>
            <li><Link to="/contact" className="hover:opacity-60 transition-opacity">Connect</Link></li>
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
            <li className="text-muted-foreground">Supporting builder portfolios across North America.</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-x py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          <span>© {new Date().getFullYear()} Velocity Affiliates</span>
          <span>Outbound Execution · Sales Momentum Infrastructure</span>
        </div>
      </div>
    </footer>
  );
}
