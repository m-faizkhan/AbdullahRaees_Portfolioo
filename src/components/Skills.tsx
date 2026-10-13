import {
  Clapperboard,
  Compass,
  Handshake,
  LayoutGrid,
  MessageSquare,
  PenTool,
  Smartphone,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { skills, tools } from "@/config/site";

const iconMap: Record<string, LucideIcon> = {
  Clapperboard,
  Compass,
  Handshake,
  LayoutGrid,
  MessageSquare,
  PenTool,
  Smartphone,
  TrendingUp,
  Users,
};

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="Skills & Tools"
          title={
            <>
              Everything a brand needs <br className="hidden sm:block" />
              to show up well online.
            </>
          }
          description="From concept and strategy to editing, design and publishing — delivered with the tools professional teams already use."
        />

        {/* Skills */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, i) => {
            const Icon = iconMap[skill.icon] ?? Compass;
            return (
              <Reveal key={skill.name} delay={(i % 3) * 90}>
                <article className="card card-hover group h-full p-6 sm:p-7">
                  <div className="flex items-start justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-white/[0.03] text-steel-300 transition-colors duration-300 group-hover:border-steel-400/60 group-hover:text-steel-200">
                      <Icon className="h-5 w-5" strokeWidth={1.5} />
                    </span>
                    <span className="font-display text-xs font-medium tracking-[0.2em] text-ink-subtle">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-xl font-normal tracking-tight text-ink">{skill.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{skill.blurb}</p>
                  <span className="mt-6 block h-px w-10 bg-steel-500/60 transition-all duration-500 group-hover:w-16 group-hover:bg-steel-400" />
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Tools */}
        <div className="mt-20">
          <Reveal>
            <div className="mb-8 flex items-end justify-between">
              <div>
                <span className="eyebrow">Tools</span>
                <h3 className="mt-3 font-display text-2xl font-light tracking-tight text-ink sm:text-3xl">Production stack</h3>
              </div>
              <span className="hidden text-xs font-medium uppercase tracking-[0.2em] text-ink-subtle sm:block">
                {tools.length} tools
              </span>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool, i) => (
              <Reveal key={tool.name} delay={(i % 3) * 80}>
                <div className="card card-hover group flex items-center gap-5 p-5">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-line-strong bg-navy-700/70 font-display text-lg font-medium tracking-tight text-ink transition-colors duration-300 group-hover:bg-navy-600/80">
                    {tool.mono}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate font-medium text-ink">{tool.name}</p>
                    <p className="text-xs font-medium uppercase tracking-[0.14em] text-ink-muted">{tool.category}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
