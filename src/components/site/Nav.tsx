import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const links = [
  { to: "/services", label: "Services" },
  { to: "/results", label: "Execution" },
  { to: "/reporting", label: "Reporting" },
  { to: "/blog", label: "Insights" },
  { to: "/about", label: "Company" },
  { to: "/contact", label: "Connect" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-30 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-background/0"
      }`}
    >
      <div className="container-x">
        <div className="flex items-center justify-between md:justify-center pt-6 pb-4 md:pt-7 md:pb-5 relative">
          <Link to="/" className="flex flex-col items-center leading-none">
            <span className="font-display text-2xl md:text-[28px] tracking-[0.02em]">
              Velocity
            </span>
            <span className="mt-1 text-[10px] tracking-[0.42em] text-muted-foreground uppercase">
              Affiliates
            </span>
          </Link>
          <a
            href="https://calendly.com/brooke-velocityaffiliates/introduction-to-velocity-affliates"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex absolute right-0 top-1/2 -translate-y-1/2 text-[11px] uppercase tracking-[0.22em] border border-ink px-4 py-2 hover:bg-ink hover:text-white transition-colors"
          >
            Book a Call
          </a>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden absolute right-0 top-1/2 -translate-y-1/2 p-2"
          >
            <span className="block w-5 h-px bg-ink mb-[5px]" />
            <span className="block w-5 h-px bg-ink mb-[5px]" />
            <span className="block w-5 h-px bg-ink" />
          </button>
        </div>
        <nav className="hidden md:flex items-center justify-center gap-8 lg:gap-10 border-t border-border py-4">
          {links.map((l) => (
            <Link key={l.to} to={l.to} activeOptions={{ exact: false }} className="nav-link">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background animate-fade-in">
          <nav className="container-x py-6 flex flex-col gap-4">
            {links.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="nav-link">
                {l.label}
              </Link>
            ))}
            <a href="https://calendly.com/brooke-velocityaffiliates/introduction-to-velocity-affliates" target="_blank" rel="noopener noreferrer" className="btn-primary mt-4 justify-center">
              Book a Call
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
