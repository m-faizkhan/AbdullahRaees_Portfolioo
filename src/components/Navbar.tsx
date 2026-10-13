import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { cn } from "@/utils/cn";
import { navItems, profile } from "@/config/site";

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.2, 0.5] },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [ids]);
  return active;
}

const sectionIds = navItems.map((n) => n.href.replace("#", ""));

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-navy-950"
      >
        Skip to content
      </a>

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled ? "border-b border-line bg-navy-950/85 backdrop-blur-md" : "bg-transparent",
        )}
      >
        <nav
          aria-label="Primary"
          className={cn(
            "container-x flex items-center justify-between transition-[height] duration-500",
            scrolled ? "h-16" : "h-20 sm:h-24",
          )}
        >
          {/* Brand */}
          <a href="#home" className="group flex items-center gap-3" aria-label={`${profile.name} — home`}>
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-line-strong bg-navy-800/80 font-display text-sm font-medium tracking-[0.15em] text-ink transition-colors duration-300 group-hover:border-steel-400/60">
              {profile.initials}
            </span>
            <span className="hidden flex-col leading-tight sm:flex">
              <span className="font-display text-[15px] font-medium tracking-tight text-ink">{profile.name}</span>
              <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-muted">Digital Creator</span>
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={cn("nav-link", active === item.href.slice(1) && "is-active")}
                  aria-current={active === item.href.slice(1) ? "page" : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a href="#contact" className="btn btn-primary hidden px-5 py-2.5 text-[13px] sm:inline-flex">
              Let&apos;s Collaborate
              <ArrowUpRight className="btn-arrow h-4 w-4" strokeWidth={1.75} />
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-line-strong lg:hidden"
            >
              <Menu className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        aria-hidden={!open}
        className={cn(
          "fixed inset-0 z-[60] flex flex-col bg-navy-950 transition-[opacity,visibility] duration-500 lg:hidden",
          open ? "visible pointer-events-auto opacity-100" : "invisible pointer-events-none opacity-0",
        )}
      >
        <div className="container-x flex h-20 items-center justify-between">
          <span className="font-display text-lg font-medium tracking-tight text-ink">{profile.name}</span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink"
          >
            <X className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>
        {open && (
          <div className="container-x flex flex-1 flex-col justify-center gap-2 pb-16">
            {navItems.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                style={{ ["--delay" as string]: `${80 + i * 50}ms` }}
                className={cn(
                  "menu-item flex items-center justify-between border-b border-line py-4 font-display text-3xl font-light tracking-tight text-ink/90 transition-colors hover:text-ink",
                  active === item.href.slice(1) && "text-ink",
                )}
              >
                {item.label}
                <span className="text-xs font-medium tracking-[0.2em] text-ink-subtle">0{i + 1}</span>
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              style={{ ["--delay" as string]: `${80 + navItems.length * 50}ms` }}
              className="menu-item btn btn-primary mt-8 self-start"
            >
              Let&apos;s Collaborate
              <ArrowUpRight className="btn-arrow h-4 w-4" strokeWidth={1.75} />
            </a>
          </div>
        )}
      </div>
    </>
  );
}
