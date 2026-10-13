import { Award, BookOpen, Building2, CalendarDays, GraduationCap, MapPin } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { education } from "@/config/site";

const details = [
  { icon: Building2, label: "Institution", value: education.institution },
  { icon: CalendarDays, label: "Completed", value: education.completed },
  { icon: Award, label: "Grade", value: education.grade },
  { icon: GraduationCap, label: "Issued by", value: education.issuedBy },
  { icon: MapPin, label: "Location", value: education.issuedLocation },
];

export function Education() {
  return (
    <section id="education" className="section section-gradient hairline-top">
      <div className="container-x">
        <SectionHeading
          eyebrow="Education"
          title={
            <>
              Formal training in <br className="hidden sm:block" />
              information systems & web.
            </>
          }
          description="A technical foundation that supports the creative work — from responsive design and SEO to full-stack web fundamentals."
        />

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Diploma */}
          <Reveal>
            <article className="card card-hover h-full p-6 sm:p-8 lg:p-10">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <span className="eyebrow">Diploma</span>
                  <h3 className="mt-4 font-display text-2xl font-normal leading-tight tracking-tight text-ink sm:text-3xl">
                    {education.degree}
                  </h3>
                </div>
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-line bg-white/[0.03] text-steel-300">
                  <GraduationCap className="h-6 w-6" strokeWidth={1.5} />
                </span>
              </div>

              <dl className="mt-8 divide-y divide-line border-y border-line">
                {details.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-4 py-4">
                    <Icon className="h-4 w-4 shrink-0 text-steel-400" strokeWidth={1.5} />
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-muted">{label}</dt>
                    <dd className="ml-auto text-right text-sm font-medium text-ink">{value}</dd>
                  </div>
                ))}
              </dl>
            </article>
          </Reveal>

          {/* Additional training */}
          <Reveal delay={120}>
            <article className="card card-hover h-full p-6 sm:p-8 lg:p-10">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <span className="eyebrow">Additional Training</span>
                  <h3 className="mt-4 font-display text-2xl font-normal leading-tight tracking-tight text-ink sm:text-3xl">
                    {education.training.name}
                  </h3>
                  <p className="mt-2 text-sm text-ink-muted">{education.institution}</p>
                </div>
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-line bg-white/[0.03] text-steel-300">
                  <BookOpen className="h-6 w-6" strokeWidth={1.5} />
                </span>
              </div>

              <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-muted">Subjects covered</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {education.training.subjects.map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
