import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const nav = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);

  const linkBase =
    "px-3 py-2 rounded-md text-sm font-medium transition hover:text-accent";
  const active = "text-accent";
  const inactive = "text-slate-300";

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-ink/70 border-b border-white/5">
      <div className="section flex items-center justify-between h-16">
        <NavLink to="/" className="font-display text-xl">
          <span className="text-accent">A</span>had<span className="text-soft">Tech</span>
        </NavLink>

        <button
          className="md:hidden p-2 rounded hover:bg-white/5"
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        <nav className="hidden md:flex items-center gap-1">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                `${linkBase} ${isActive ? active : inactive}`
              }
            >
              {n.label}
            </NavLink>
          ))}
          <a
            href="https://github.com/backendfrontflip"
            target="_blank"
            rel="noreferrer"
            className="ml-2 px-3 py-2 text-sm rounded-md bg-accent/10 text-accent border border-accent/30 hover:shadow-glow"
          >
            GitHub
          </a>
        </nav>
      </div>

      {/* mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-white/5 bg-ink/95">
          <nav className="section py-2 flex flex-col gap-1">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? active : inactive}`
                }
              >
                {n.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
