import { ArrowUpRight, Mail } from "lucide-react";
import { Photo } from "./ui/Photo";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { WhatsAppIcon } from "./ui/BrandIcons";
import { images, links, mediaKit, profile, whatsappUrl } from "@/config/site";

export function MediaKit() {
  return (
    <section id="media-kit" className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="Influencer Media Kit"
          title={
            <>
              Partner with a creator <br className="hidden sm:block" />
              brands already trust.
            </>
          }
          description="A snapshot for brand and agency teams. Full audience insights, rate card and case studies are shared on request."
          aside={
            <a href="#contact" className="btn btn-primary">
              Request Collaboration
              <ArrowUpRight className="btn-arrow h-4 w-4" strokeWidth={1.75} />
            </a>
          }
        />

        <div className="grid gap-6 lg:grid-cols-12">
          {/* Portrait */}
          <Reveal className="lg:col-span-4">
            <div className="frame aspect-[4/5] h-full min-h-[380px]">
              <Photo sources={images.mediaKit} alt={`${profile.name} — media kit portrait`} className="h-full w-full" />
              <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/10 bg-navy-950/75 px-4 py-3 backdrop-blur-sm">
                <p className="font-display text-sm font-medium text-ink">{profile.name}</p>
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-ink-muted">{profile.instagramHandle}</p>
              </div>
            </div>
          </Reveal>

          {/* Metrics + opportunities */}
          <div className="grid gap-6 lg:col-span-8">
            <div className="grid gap-4 sm:grid-cols-3">
              {mediaKit.metrics.map((m, i) => (
                <Reveal key={m.label} delay={i * 90}>
                  <div className="card h-full p-6">
                    <p className="font-display text-4xl font-light tracking-tight text-ink sm:text-5xl">{m.value}</p>
                    <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-muted">{m.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            {mediaKit.insights.length > 0 && (
              <Reveal>
                <div className="card grid gap-4 p-6 sm:grid-cols-3">
                  {mediaKit.insights.map((ins) => (
                    <div key={ins.label}>
                      <p className="font-display text-2xl font-light text-ink">{ins.value}</p>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-muted">{ins.label}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            )}

            <Reveal delay={120}>
              <div className="card p-6 sm:p-8">
                <span className="eyebrow">Collaboration Opportunities</span>
                <div className="mt-6 grid gap-x-10 gap-y-6 sm:grid-cols-2">
                  {mediaKit.opportunities.map((o, i) => (
                    <div key={o.title} className="flex gap-4">
                      <span className="font-display text-sm font-medium tracking-[0.2em] text-ink-subtle">0{i + 1}</span>
                      <div>
                        <p className="font-medium text-ink">{o.title}</p>
                        <p className="mt-1 text-sm leading-relaxed text-ink-muted">{o.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-3 border-t border-line pt-7">
                  <a href={`mailto:${links.email}?subject=Collaboration%20with%20Abdullah%20Raees`} className="btn btn-primary">
                    <Mail className="h-4 w-4" strokeWidth={1.75} />
                    Contact for Collaboration
                  </a>
                  <a href={whatsappUrl("Hi Abdullah, I'd like to discuss a brand collaboration.")} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                    <WhatsAppIcon className="h-4 w-4" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
