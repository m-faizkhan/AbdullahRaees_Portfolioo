import { ArrowUpRight, BadgeCheck, Bell, Play } from "lucide-react";
import { Photo } from "./ui/Photo";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { InstagramIcon, YoutubeIcon } from "./ui/BrandIcons";
import { images, links, profile, youtube } from "@/config/site";

function ProfileCard({
  platform,
  name,
  handle,
  children,
}: {
  platform: "instagram" | "youtube";
  name: string;
  handle: string;
  children: React.ReactNode;
}) {
  const Icon = platform === "instagram" ? InstagramIcon : YoutubeIcon;
  return (
    <div className="card h-full p-6 sm:p-8">
      <div className="flex items-center gap-4">
        <Photo
          sources={images.avatar}
          alt={`${profile.name} profile photo`}
          className="h-16 w-16 shrink-0 rounded-full border border-line-strong"
          placeholderLabel=""
        />
        <div className="min-w-0">
          <p className="flex items-center gap-1.5 truncate font-display text-lg font-medium tracking-tight text-ink">
            {name}
            <BadgeCheck className="h-4 w-4 shrink-0 text-steel-400" strokeWidth={1.75} aria-hidden="true" />
          </p>
          <p className="truncate text-sm text-ink-muted">{handle}</p>
        </div>
        <span className="ml-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line text-steel-300">
          <Icon className="h-4.5 w-4.5" strokeWidth={1.5} />
        </span>
      </div>
      {children}
    </div>
  );
}

export function SocialMedia() {
  return (
    <section id="social" className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="Social Media"
          title={
            <>
              A real audience, <br className="hidden sm:block" />
              built one post at a time.
            </>
          }
          description="Only verified figures are shown. Detailed insights and campaign results are available on request."
        />

        {/* ───────── Instagram ───────── */}
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <ProfileCard platform="instagram" name={profile.name} handle={profile.instagramHandle}>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-line bg-white/[0.02] p-5">
                  <p className="font-display text-3xl font-light tracking-tight text-ink sm:text-4xl">80K+</p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-muted">Followers</p>
                </div>
                <div className="rounded-2xl border border-line bg-white/[0.02] p-5">
                  <p className="font-display text-3xl font-light tracking-tight text-ink sm:text-4xl">100+</p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-muted">Brand Collaborations</p>
                </div>
              </div>
              <ul className="mt-6 space-y-2.5 text-[15px] text-ink/90">
                {["Sponsored content & brand promotions", "Short-form reels and lifestyle content", "Consistent engagement with an active community"].map(
                  (t) => (
                    <li key={t} className="flex items-start gap-3">
                      <span className="mt-2.5 h-px w-4 shrink-0 bg-steel-500" />
                      {t}
                    </li>
                  ),
                )}
              </ul>
              <a href={links.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-8">
                Visit Instagram Profile
                <ArrowUpRight className="btn-arrow h-4 w-4" strokeWidth={1.75} />
              </a>
            </ProfileCard>
          </Reveal>

          {/* Profile Overview Screenshot */}
          <Reveal delay={100}>
            <a
              href={links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="frame group block h-full min-h-[360px]"
              aria-label="Open Instagram profile"
            >
              <Photo
                sources={images.instagramScreenshot}
                alt="Instagram profile overview — @abdullahraeesoffical"
                className="h-full w-full object-cover"
                placeholderLabel="Instagram profile"
              />
              <span className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-navy-950/70 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-steel-200 backdrop-blur-sm">
                Profile overview
              </span>
            </a>
          </Reveal>
        </div>

        {/* ───────── YouTube ───────── */}
        <div className="mt-6 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <ProfileCard platform="youtube" name={youtube.channelName} handle={youtube.handle}>
              {youtube.subscriberCount && (
                <div className="mt-8 rounded-2xl border border-line bg-white/[0.02] p-5">
                  <p className="font-display text-3xl font-light tracking-tight text-ink sm:text-4xl">{youtube.subscriberCount}</p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-muted">Subscribers</p>
                </div>
              )}
              <p className="mt-8 text-[15px] leading-relaxed text-ink-muted">
                Long-form video, vlogs and lifestyle content — the channel complements short-form Instagram work with
                deeper storytelling.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {youtube.topics.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={links.youtubeSubscribe} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  <Bell className="h-4 w-4" strokeWidth={1.75} />
                  Subscribe
                </a>
                <a href={links.youtubeVideos} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  Watch Videos
                  <ArrowUpRight className="btn-arrow h-4 w-4" strokeWidth={1.75} />
                </a>
              </div>
            </ProfileCard>
          </Reveal>

          <Reveal delay={100}>
            {youtube.videoIds.length > 0 ? (
              <div className="grid h-full grid-cols-2 gap-3">
                {youtube.videoIds.slice(0, 4).map((id) => (
                  <a
                    key={id}
                    href={`https://www.youtube.com/watch?v=${id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="frame group relative aspect-video rounded-2xl"
                    aria-label="Watch video on YouTube"
                  >
                    <Photo
                      sources={[`https://i.ytimg.com/vi/${id}/hqdefault.jpg`]}
                      alt="YouTube video thumbnail"
                      className="h-full w-full"
                      placeholderLabel="Video"
                    />
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-navy-950/60 text-ink transition-transform duration-500 group-hover:scale-110">
                        <Play className="ml-0.5 h-5 w-5" strokeWidth={1.5} fill="currentColor" />
                      </span>
                    </span>
                  </a>
                ))}
              </div>
            ) : (
              <a
                href={links.youtubeVideos}
                target="_blank"
                rel="noopener noreferrer"
                className="card card-hover group flex h-full min-h-[320px] flex-col justify-between overflow-hidden p-8"
                style={{ background: "linear-gradient(160deg, #15213a 0%, #0f182b 55%, #0b1221 100%)" }}
              >
                <div className="flex items-start justify-between">
                  <span className="eyebrow">Latest uploads</span>
                  <YoutubeIcon className="h-6 w-6 text-steel-300" strokeWidth={1.25} />
                </div>
                <div className="my-10 flex items-center justify-center">
                  <span className="flex h-20 w-20 items-center justify-center rounded-full border border-white/15 bg-navy-950/50 text-ink transition-transform duration-500 group-hover:scale-110">
                    <Play className="ml-1 h-7 w-7" strokeWidth={1.5} fill="currentColor" />
                  </span>
                </div>
                <div className="flex items-end justify-between gap-6">
                  <div>
                    <p className="font-display text-2xl font-light tracking-tight text-ink">Watch the latest videos</p>
                    <p className="mt-1 text-sm text-ink-muted">Vlogs, daily routines and challenges on {youtube.handle}</p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-steel-200 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" strokeWidth={1.5} />
                </div>
              </a>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
