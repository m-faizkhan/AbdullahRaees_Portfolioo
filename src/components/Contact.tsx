import { useState, type FormEvent } from "react";
import { ArrowUpRight, Building2, Mail, MapPin, Send } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { InstagramIcon, WhatsAppIcon, YoutubeIcon } from "./ui/BrandIcons";
import { links, profile, whatsappUrl, WHATSAPP_NUMBER_WITH_COUNTRY_CODE } from "@/config/site";

const channels = [
  {
    icon: WhatsAppIcon,
    label: "WhatsApp",
    value: WHATSAPP_NUMBER_WITH_COUNTRY_CODE ? `+${WHATSAPP_NUMBER_WITH_COUNTRY_CODE}` : "Message on WhatsApp",
    href: whatsappUrl("Hi Abdullah, I found your portfolio and would like to get in touch."),
    external: true,
  },
  { icon: Mail, label: "Email", value: links.email, href: `mailto:${links.email}`, external: false },
  { icon: InstagramIcon, label: "Instagram", value: profile.instagramHandle, href: links.instagram, external: true },
  { icon: YoutubeIcon, label: "YouTube", value: profile.youtubeHandle, href: links.youtube, external: true },
  { icon: Building2, label: "Agency", value: profile.agencyHandle, href: links.agency, external: true },
];

type Intent = "Job opportunity" | "Brand collaboration" | "Freelance project" | "Other";

export function Contact() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [intent, setIntent] = useState<Intent>("Job opportunity");
  const [message, setMessage] = useState("");

  const composed = () =>
    `Hi Abdullah,\n\nMy name is ${name || "—"}${company ? ` from ${company}` : ""}.\nTopic: ${intent}\n\n${message}`;

  const sendWhatsApp = (e: FormEvent) => {
    e.preventDefault();
    window.open(whatsappUrl(composed()), "_blank", "noopener,noreferrer");
  };

  const sendEmail = () => {
    const subject = encodeURIComponent(`${intent} — ${name || "Portfolio enquiry"}`);
    window.location.href = `mailto:${links.email}?subject=${subject}&body=${encodeURIComponent(composed())}`;
  };

  const inputClass =
    "w-full rounded-xl border border-line bg-white/[0.03] px-4 py-3 text-[15px] text-ink placeholder:text-ink-subtle transition-colors duration-300 focus:border-steel-400/70 focus:bg-white/[0.05] focus:outline-none";

  return (
    <section id="contact" className="section section-gradient hairline-top">
      <div className="container-x">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Let&apos;s build something <br className="hidden sm:block" />
              worth watching.
            </>
          }
          description="Open to full-time roles, freelance projects and brand collaborations in Germany and remotely. Replies are usually quick."
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Channels */}
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {channels.map(({ icon: Icon, label, value, href, external }, i) => (
              <Reveal key={label} delay={i * 60}>
                <a
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="card card-hover group flex items-center gap-4 p-5"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line bg-white/[0.03] text-steel-300 transition-colors duration-300 group-hover:border-steel-400/60 group-hover:text-steel-200">
                    <Icon className="h-[18px] w-[18px]" strokeWidth={1.5} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-muted">{label}</span>
                    <span className="block truncate text-[15px] font-medium text-ink">{value}</span>
                  </span>
                  <ArrowUpRight
                    className="ml-auto h-4 w-4 shrink-0 text-ink-subtle transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                    strokeWidth={1.75}
                  />
                </a>
              </Reveal>
            ))}
            <Reveal delay={320}>
              <div className="flex items-center gap-3 px-2 pt-2 text-sm text-ink-muted">
                <MapPin className="h-4 w-4 text-steel-400" strokeWidth={1.5} />
                Germany · Available for professional opportunities
              </div>
            </Reveal>
          </div>

          {/* Composer */}
          <Reveal delay={120}>
            <form onSubmit={sendWhatsApp} className="card p-6 sm:p-8 lg:p-10">
              <span className="eyebrow">Send a message</span>
              <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                Compose your message here — it opens in WhatsApp or your email client, ready to send.
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-muted">Your name</span>
                  <input className={inputClass} value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name" required />
                </label>
                <label className="block">
                  <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-muted">Company / Brand</span>
                  <input className={inputClass} value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Optional" />
                </label>
              </div>

              <div className="mt-5">
                <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-muted">I&apos;m reaching out about</span>
                <div className="flex flex-wrap gap-2">
                  {(["Job opportunity", "Brand collaboration", "Freelance project", "Other"] as Intent[]).map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setIntent(opt)}
                      aria-pressed={intent === opt}
                      className={
                        intent === opt
                          ? "rounded-full border border-ink bg-ink px-4 py-2 text-[13px] font-medium text-navy-950 transition-all duration-300"
                          : "rounded-full border border-line px-4 py-2 text-[13px] font-medium text-ink-muted transition-all duration-300 hover:border-line-strong hover:text-ink"
                      }
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <label className="mt-5 block">
                <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-muted">Message</span>
                <textarea
                  className={`${inputClass} min-h-[140px] resize-y`}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me a little about the role, project or campaign."
                  required
                />
              </label>

              <div className="mt-7 flex flex-wrap gap-3">
                <button type="submit" className="btn btn-primary">
                  <WhatsAppIcon className="h-4 w-4" />
                  Send via WhatsApp
                </button>
                <button type="button" onClick={sendEmail} className="btn btn-secondary">
                  <Send className="h-4 w-4" strokeWidth={1.75} />
                  Send via Email
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
