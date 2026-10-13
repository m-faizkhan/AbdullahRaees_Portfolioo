import { useEffect, useRef, useState, type CSSProperties, type ElementType, type ReactNode } from "react";
import { cn } from "@/utils/cn";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Delay in ms (used for staggered groups) */
  delay?: number;
  /** "up" = fade + rise, "fade" = opacity only */
  variant?: "up" | "fade";
  as?: ElementType;
  threshold?: number;
  id?: string;
};

/**
 * Lightweight scroll-reveal using IntersectionObserver + CSS transitions.
 * Elements animate once when they enter the viewport.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  variant = "up",
  as: Tag = "div",
  threshold = 0.08,
  id,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const style = { "--delay": `${delay}ms` } as CSSProperties;

  return (
    <Tag
      ref={ref}
      id={id}
      style={style}
      className={cn(variant === "up" ? "reveal" : "reveal-fade", visible && "is-visible", className)}
    >
      {children}
    </Tag>
  );
}
