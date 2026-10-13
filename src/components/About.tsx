import { ArrowUpRight, Briefcase, Building2, Globe2, MapPin } from "lucide-react";
import { Photo } from "./ui/Photo";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { aboutParagraphs, images, links, profile } from "@/config/site";

const facts = [
  { icon: MapPin, label: "Location", value: "Germany" },
  { icon: Globe2, label: "Origin", value: "Pakistan" },
  { icon: Building2, label: "Founder", value: profile.agencyName },
  { icon: Briefcase, label: "Experience", value: "5 Years" },
];

export function About() {
  return (
    <section id="about" className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="About Me"
          title={
            <>
              A creator with the mindset <br className="hidden sm:block" />
              of a marketer.
            </>
          }
        />

        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Visual + facts */}
          <div className="space-y-6">
            <Reveal>
              <div className="frame aspect-[4/5] max-w-md">
                <Photo sources={images.about} alt={`Portrait of ${profile.name}`} className="h-full w-full" />
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="card max-w-md divide-y divide-line">
                {facts.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-4 px-5 py-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line bg-white/[0.03] text-steel-300">
                      <Icon className="h-4 w-4" strokeWidth={1.5} />
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-muted">{label}</span>
                    <span className="ml-auto text-sm font-medium text-ink">{value}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Copy */}
          <div>
            <Reveal>
              <p className="font-display text-2xl font-light leading-snug tracking-tight text-ink sm:text-[1.75rem]">
                “{aboutParagraphs[0]}”
              </p>
            </Reveal>
            <div className="mt-8 space-y-5 text-[15.5px] leading-[1.8] text-ink-muted sm:text-base">
              {aboutParagraphs.slice(1).map((p, i) => (
                <Reveal key={i} delay={80 + i * 60}>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={200}>
              <div className="mt-10 flex flex-wrap gap-2">
                {["Full-time roles", "Freelance projects", "Brand collaborations", "Agency partnerships"].map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a href="#contact" className="btn btn-primary">
                  Let&apos;s Collaborate
                  <ArrowUpRight className="btn-arrow h-4 w-4" strokeWidth={1.75} />
                </a>
                <a href={links.agency} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  {profile.agencyName}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
