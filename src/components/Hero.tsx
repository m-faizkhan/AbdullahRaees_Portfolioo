import type { CSSProperties } from "react";
import { ArrowDown, ArrowRight, MapPin } from "lucide-react";
import { Photo } from "./ui/Photo";
import { InstagramIcon as Instagram, WhatsAppIcon, YoutubeIcon as Youtube } from "./ui/BrandIcons";
import { useCountUp } from "@/hooks/useCountUp";
import { heroStats, images, links, profile, whatsappUrl } from "@/config/site";

const d = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

function NumberStat({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) {
  const { ref, value: n } = useCountUp<HTMLDivElement>(value, 1500, delay);
  return (
    <div ref={ref} className="flex flex-col gap-1.5">
      <span className="font-display text-3xl font-light tracking-tight text-ink sm:text-[2.1rem]">
        {n}
        <span className="text-steel-300">{suffix}</span>
      </span>
      <span className="text-[12px] font-medium leading-snug text-ink-muted">{label}</span>
    </div>
  );
}

function TextStat({ text, label }: { text: string; label: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="font-display text-2xl font-light tracking-tight text-ink sm:text-[1.65rem]">{text}</span>
      <span className="text-[12px] font-medium leading-snug text-ink-muted">{label}</span>
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" className="hero-gradient relative overflow-hidden pt-28 sm:pt-36 lg:pt-40">
      <div className="container-x">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          {/* Copy */}
          <div className="order-2 lg:order-1">
            <div className="hero-in" style={d(0)}>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-line-strong bg-white/[0.03] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-steel-200">
                <MapPin className="h-3.5 w-3.5 text-steel-400" strokeWidth={1.75} />
                {profile.location} · {profile.availability}
              </span>
            </div>

            <h1
              className="hero-in mt-7 font-display text-[clamp(3.2rem,8.5vw,6.4rem)] font-light leading-[0.98] tracking-[-0.02em] text-ink"
              style={d(100)}
            >
              {profile.firstName}
              <br />
              <span className="font-normal text-steel-200">{profile.lastName}</span>
            </h1>

            <p className="hero-in mt-6 text-[13px] font-semibold uppercase tracking-[0.2em] text-steel-400 sm:text-sm" style={d(200)}>
              {profile.roles.map((role, i) => (
                <span key={role}>
                  {role}
                  {i < profile.roles.length - 1 && <span className="mx-2.5 text-ink-subtle">|</span>}
                </span>
              ))}
            </p>

            <p className="hero-in mt-6 max-w-xl text-lg leading-relaxed text-ink-muted sm:text-xl" style={d(300)}>
              {profile.tagline}
            </p>

            {/* CTAs */}
            <div className="hero-in mt-9 flex flex-wrap items-center gap-3" style={d(400)}>
              <a href="#projects" className="btn btn-primary">
                Explore My Work
                <ArrowRight className="btn-arrow h-4 w-4" strokeWidth={1.75} />
              </a>
              <a href="#contact" className="btn btn-secondary">
                Contact Me
              </a>
            </div>
            <div className="hero-in mt-3 flex flex-wrap items-center gap-2" style={d(480)}>
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="btn btn-ghost px-4 py-2.5 text-[13px]">
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp
              </a>
              <a href={links.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-ghost px-4 py-2.5 text-[13px]">
                <Instagram className="h-4 w-4" strokeWidth={1.75} />
                Instagram
              </a>
              <a href={links.youtube} target="_blank" rel="noopener noreferrer" className="btn btn-ghost px-4 py-2.5 text-[13px]">
                <Youtube className="h-4 w-4" strokeWidth={1.75} />
                YouTube
              </a>
            </div>
          </div>

          {/* Portrait */}
          <div className="order-1 lg:order-2">
            <div className="hero-in relative mx-auto w-full max-w-[300px] sm:max-w-[360px] lg:ml-auto lg:max-w-[440px]" style={d(150)}>
              <div className="frame aspect-[4/5]">
                <Photo
                  sources={images.hero}
                  alt={`${profile.name} — digital marketer and content creator`}
                  className="h-full w-full"
                  loading="eager"
                  fetchPriority="high"
                />
                {/* Caption card */}
                <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl border border-white/10 bg-navy-950/75 px-4 py-3 backdrop-blur-sm">
                  <div>
                    <p className="font-display text-sm font-medium text-ink">{profile.name}</p>
                    <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-ink-muted">
                      Founder · {profile.agencyName}
                    </p>
                  </div>
                  <span className="font-display text-xl font-light text-steel-200">80K+</span>
                </div>
              </div>
              {/* Edge label */}
              <div className="pointer-events-none absolute -left-3 top-10 hidden -rotate-90 origin-left text-[10px] font-semibold uppercase tracking-[0.3em] text-ink-subtle lg:block">
                Portfolio — {new Date().getFullYear()}
              </div>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="hero-in mt-16 sm:mt-20 lg:mt-24" style={d(650)}>
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 border-y border-line py-8 sm:grid-cols-3 lg:grid-cols-6 lg:py-10">
            {heroStats.map((s, i) =>
              s.kind === "number" ? (
                <NumberStat key={s.label} value={s.value} suffix={s.suffix} label={s.label} delay={i * 120} />
              ) : (
                <TextStat key={s.label} text={s.text} label={s.label} />
              ),
            )}
          </div>
        </div>

        <div className="flex items-center justify-between py-6 text-[11px] font-medium uppercase tracking-[0.22em] text-ink-subtle">
          <span>Scroll to explore</span>
          <a href="#about" aria-label="Scroll to About section" className="flex h-9 w-9 items-center justify-center rounded-full border border-line transition-colors hover:border-line-strong hover:text-ink">
            <ArrowDown className="h-4 w-4 animate-bounce [animation-duration:2.2s]" strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </section>
  );
}
