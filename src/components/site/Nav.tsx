import { Link } from "@tanstack/react-router";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/approach", label: "Approach" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav({ variant = "light" }: { variant?: "light" | "dark" }) {
  const text = variant === "dark" ? "text-surface-foreground" : "text-foreground";
  return (
    <header className={`absolute top-0 inset-x-0 z-30 ${text}`}>
      <div className="container-x flex items-center justify-between py-6">
        <Link to="/" className="flex items-center gap-2 font-display text-xl tracking-tight">
          <span className="inline-block h-2 w-2 rounded-full bg-accent" />
          Velocity<span className="opacity-60">Affiliates</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-accent" }}
              className="hover:text-accent transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link to="/contact" className="hidden md:inline-flex btn-accent !py-2 !px-4 text-sm">
          Book a Strategy Call
        </Link>
      </div>
    </header>
  );
}
