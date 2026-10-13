import { ArrowUpRight, Check, MapPin } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { experience } from "@/config/site";

export function Experience() {
  return (
    <section id="experience" className="section section-gradient hairline-top">
      <div className="container-x">
        <SectionHeading
          eyebrow="Professional Experience"
          title={
            <>
              Five years of building brands — <br className="hidden sm:block" />
              including my own.
            </>
          }
          description="Agency leadership on one side, a personal brand with a real audience on the other. Both inform how I plan, produce and publish."
        />

        <div className="relative ml-2 border-l border-line pl-8 sm:ml-4 sm:pl-12">
          <div className="space-y-10">
            {experience.map((item, idx) => (
              <Reveal key={item.role} delay={idx * 100}>
                <article className="relative">
                  <span className="timeline-dot -left-[37px] sm:-left-[53px]" aria-hidden="true" />
                  <div className="card card-hover p-6 sm:p-8 lg:p-10">
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                      <div className="max-w-2xl">
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-steel-400">
                          <span>{item.period}</span>
                          <span className="inline-flex items-center gap-1.5 text-ink-muted">
                            <MapPin className="h-3.5 w-3.5" strokeWidth={1.75} />
                            {item.location}
                          </span>
                        </div>
                        <h3 className="mt-4 font-display text-2xl font-normal tracking-tight text-ink sm:text-3xl">{item.role}</h3>
                        <p className="mt-1.5 text-base font-medium text-steel-200">{item.company}</p>
                        <p className="mt-4 text-[15px] leading-relaxed text-ink-muted">{item.summary}</p>
                      </div>

                      {"metrics" in item && item.metrics && (
                        <div className="flex gap-8 lg:flex-col lg:gap-5 lg:text-right">
                          {item.metrics.map((m) => (
                            <div key={m.label}>
                              <p className="font-display text-3xl font-light tracking-tight text-ink">{m.value}</p>
                              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-muted">{m.label}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="mt-8 grid gap-x-8 gap-y-3 border-t border-line pt-7 sm:grid-cols-2">
                      {item.responsibilities.map((r) => (
                        <div key={r} className="flex items-start gap-3 text-[15px] text-ink/90">
                          <span className="mt-[3px] flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full border border-steel-500/50 text-steel-300">
                            <Check className="h-2.5 w-2.5" strokeWidth={2.5} />
                          </span>
                          {r}
                        </div>
                      ))}
                    </div>

                    <div className="mt-8">
                      <a href={item.cta.href} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                        {item.cta.label}
                        <ArrowUpRight className="btn-arrow h-4 w-4" strokeWidth={1.75} />
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
