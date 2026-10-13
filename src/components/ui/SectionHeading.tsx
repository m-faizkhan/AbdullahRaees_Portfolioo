import type { ReactNode } from "react";
import { cn } from "@/utils/cn";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  /** Optional element rendered to the right of the heading on large screens */
  aside?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  aside,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-14 flex flex-col gap-8 lg:mb-20 lg:flex-row lg:items-end lg:justify-between",
        align === "center" && "items-center text-center lg:flex-col lg:items-center",
        className,
      )}
    >
      <div className={cn("max-w-2xl", align === "center" && "mx-auto")}>
        <Reveal>
          <span className="eyebrow">{eyebrow}</span>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-5 font-display text-4xl font-light leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
            {title}
          </h2>
        </Reveal>
        {description && (
          <Reveal delay={160}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-muted sm:text-[17px]">{description}</p>
          </Reveal>
        )}
      </div>
      {aside && (
        <Reveal delay={200} className="shrink-0">
          {aside}
        </Reveal>
      )}
    </div>
  );
}
