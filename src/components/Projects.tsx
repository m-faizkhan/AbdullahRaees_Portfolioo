import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, ExternalLink, PenTool, Play, X } from "lucide-react";
import { cn } from "@/utils/cn";
import { Photo } from "./ui/Photo";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { InstagramIcon } from "./ui/BrandIcons";
import { projectCategories, projects, type Project, type ProjectCategory } from "@/config/site";

type Filter = "All" | ProjectCategory;

function Cover({ project }: { project: Project }) {
  if (project.thumbnail?.length) {
    return (
      <Photo
        sources={project.thumbnail}
        alt={project.title}
        className="h-full w-full"
        placeholderLabel={project.type === "reel" ? "Instagram Reel" : project.title}
      />
    );
  }
  return (
    <div
      className="flex h-full w-full flex-col items-center justify-center gap-4 p-6 text-center"
      style={{ background: "linear-gradient(160deg, #15213a 0%, #0f182b 55%, #0b1221 100%)" }}
    >
      {project.type === "profile" ? (
        <>
          <InstagramIcon className="h-9 w-9 text-steel-300" strokeWidth={1.25} />
          <span className="font-display text-xl font-light tracking-tight text-ink">{project.handle}</span>
        </>
      ) : (
        <>
          <PenTool className="h-9 w-9 text-steel-300" strokeWidth={1.25} />
          <span className="font-display text-xl font-light tracking-tight text-ink">Graphics & Posters</span>
        </>
      )}
    </div>
  );
}

function ReelModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} preview`}
      className="fixed inset-0 z-[70] flex items-center justify-center bg-navy-950/90 p-4"
      onClick={onClose}
    >
      <div
        className="relative flex w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-line-strong bg-navy-900 md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative mx-auto w-full max-w-[400px] bg-black md:mx-0">
          <iframe
            title={project.title}
            src={`https://www.instagram.com/reel/${project.reelId}/embed/`}
            className="aspect-[9/16] max-h-[82vh] w-full"
            allow="encrypted-media; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </div>
        <div className="flex flex-1 flex-col justify-between gap-6 p-6 md:p-8">
          <div>
            <span className="eyebrow">{project.label}</span>
            <h3 className="mt-4 font-display text-2xl font-normal tracking-tight text-ink sm:text-3xl">{project.title}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">{project.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.categories.map((c) => (
                <span key={c} className="chip">
                  {c}
                </span>
              ))}
            </div>
            <p className="mt-6 text-xs leading-relaxed text-ink-subtle">
              If the preview does not load in your browser, open the reel directly on Instagram.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={project.href} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Open on Instagram
              <ExternalLink className="btn-arrow h-4 w-4" strokeWidth={1.75} />
            </a>
            <button type="button" onClick={onClose} className="btn btn-secondary">
              Close
            </button>
          </div>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close preview"
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-line bg-navy-950/70 text-ink transition-colors hover:border-line-strong"
        >
          <X className="h-4 w-4" strokeWidth={1.75} />
        </button>
      </div>
    </div>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<Filter>("All");
  const [activeReel, setActiveReel] = useState<Project | null>(null);

  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.categories.includes(filter))),
    [filter],
  );

  return (
    <section id="projects" className="section section-gradient hairline-top">
      <div className="container-x">
        <SectionHeading
          eyebrow="Portfolio"
          title={
            <>
              Selected work across video, <br className="hidden sm:block" />
              design and social.
            </>
          }
          description="Featured reels, brand collaborations and content examples. Each item links to the original post or profile on Instagram."
        />

        {/* Filters */}
        <Reveal>
          <div className="mb-10 flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
            {(["All", ...projectCategories] as Filter[]).map((f) => (
              <button
                key={f}
                role="tab"
                aria-selected={filter === f}
                type="button"
                onClick={() => setFilter(f)}
                className={cn(
                  "rounded-full border px-4 py-2 text-[13px] font-medium transition-all duration-300",
                  filter === f
                    ? "border-ink bg-ink text-navy-950"
                    : "border-line text-ink-muted hover:border-line-strong hover:text-ink",
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" key={filter}>
          {visible.map((project, i) => {
            const isReel = project.type === "reel";
            const coverClass = "relative block aspect-[4/5] w-full overflow-hidden text-left";
            const coverInner = (
              <>
                <div className="h-full w-full transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]">
                  <Cover project={project} />
                </div>
                {/* Label */}
                <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-navy-950/70 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-steel-200 backdrop-blur-sm">
                  {project.label}
                </span>
                {isReel && (
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-navy-950/60 text-ink backdrop-blur-sm transition-transform duration-500 group-hover:scale-110">
                      <Play className="ml-0.5 h-6 w-6" strokeWidth={1.5} fill="currentColor" />
                    </span>
                  </span>
                )}
                <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-navy-950/70 text-ink opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:opacity-100">
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
                </span>
              </>
            );

            return (
              <Reveal key={project.id} delay={(i % 3) * 90}>
                <article className="card card-hover group flex h-full flex-col overflow-hidden text-left">
                  {isReel ? (
                    <button
                      type="button"
                      onClick={() => setActiveReel(project)}
                      aria-label={`Preview ${project.title}`}
                      className={coverClass}
                    >
                      {coverInner}
                    </button>
                  ) : (
                    <a href={project.href} target="_blank" rel="noopener noreferrer" className={coverClass}>
                      {coverInner}
                    </a>
                  )}

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-xl font-normal tracking-tight text-ink">{project.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{project.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.categories.map((c) => (
                        <span key={c} className="chip px-3 py-1 text-[11px]">
                          {c}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 text-[13px] font-semibold text-steel-200 transition-colors hover:text-ink"
                    >
                      {isReel ? "Watch on Instagram" : "View on Instagram"}
                      <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={150}>
          <p className="mt-10 text-center text-xs leading-relaxed text-ink-subtle">
            Brand accounts are shown as collaborations and content examples. Ownership or full management of any brand is
            not implied.
          </p>
        </Reveal>
      </div>

      {activeReel && <ReelModal project={activeReel} onClose={() => setActiveReel(null)} />}
    </section>
  );
}
