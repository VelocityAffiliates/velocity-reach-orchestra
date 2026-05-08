import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border mt-32">
      <div className="container-x py-20 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="font-display text-xl">Velocity Affiliates</div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground leading-relaxed">
            The outbound execution layer between your marketing and your sales floor.
            Structured human outreach systems for builders, developers, and sales organizations.
          </p>
        </div>
        <div className="md:col-span-3">
          <h4 className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-4">Company</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/services" className="hover:text-muted-foreground">Services</Link></li>
            <li><Link to="/approach" className="hover:text-muted-foreground">Approach</Link></li>
            <li><Link to="/about" className="hover:text-muted-foreground">About</Link></li>
            <li><Link to="/contact" className="hover:text-muted-foreground">Contact</Link></li>
          </ul>
        </div>
        <div className="md:col-span-4">
          <h4 className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-4">Contact</h4>
          <ul className="space-y-2.5 text-sm">
            <li><a href="mailto:brooke@velocityaffiliates.com" className="hover:text-muted-foreground">brooke@velocityaffiliates.com</a></li>
            <li className="text-muted-foreground">Vancouver · Victoria · Kelowna</li>
            <li className="text-muted-foreground">Canada &nbsp;·&nbsp; United States</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-x py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Velocity Affiliates</span>
          <span>Outbound growth infrastructure</span>
        </div>
      </div>
    </footer>
  );
}
