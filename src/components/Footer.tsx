import { ArrowUp, Mail } from "lucide-react";
import { InstagramIcon, WhatsAppIcon, YoutubeIcon } from "./ui/BrandIcons";
import { links, navItems, profile, whatsappUrl } from "@/config/site";

const socials = [
  { icon: InstagramIcon, label: "Instagram", href: links.instagram },
  { icon: YoutubeIcon, label: "YouTube", href: links.youtube },
  { icon: WhatsAppIcon, label: "WhatsApp", href: whatsappUrl() },
  { icon: Mail, label: "Email", href: `mailto:${links.email}` },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="hairline-top bg-navy-950">
      <div className="container-x py-14 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-line-strong bg-navy-800/80 font-display text-sm font-medium tracking-[0.15em] text-ink">
                {profile.initials}
              </span>
              <span className="font-display text-xl font-medium tracking-tight text-ink">{profile.name}</span>
            </a>
            <p className="mt-4 text-sm text-ink-muted">Digital Marketer | Content Creator | Video Editor</p>
            <p className="mt-1 max-w-sm text-sm leading-relaxed text-ink-subtle">{profile.tagline}</p>
            <div className="mt-6 flex items-center gap-2">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-line-strong hover:text-ink"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-muted">Navigate</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm text-ink/80 transition-colors hover:text-ink">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-muted">Contact</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href={`mailto:${links.email}`} className="text-ink/80 transition-colors hover:text-ink">
                  {links.email}
                </a>
              </li>
              <li>
                <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="text-ink/80 transition-colors hover:text-ink">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={links.instagram} target="_blank" rel="noopener noreferrer" className="text-ink/80 transition-colors hover:text-ink">
                  {profile.instagramHandle}
                </a>
              </li>
              <li>
                <a href={links.agency} target="_blank" rel="noopener noreferrer" className="text-ink/80 transition-colors hover:text-ink">
                  {profile.agencyName}
                </a>
              </li>
              <li className="pt-1 text-ink-subtle">Germany</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-line pt-6 text-xs text-ink-subtle sm:flex-row sm:items-center">
          <p>© {year} {profile.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <p>Designed & built for international opportunities.</p>
            <a
              href="#home"
              aria-label="Back to top"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-line-strong hover:text-ink"
            >
              <ArrowUp className="h-4 w-4" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
