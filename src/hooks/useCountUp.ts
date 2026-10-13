import { useEffect, useRef, useState } from "react";

/**
 * Animates a number from 0 → target once the element is visible.
 * Respects prefers-reduced-motion.
 */
export function useCountUp<T extends HTMLElement = HTMLDivElement>(target: number, duration = 1400, startDelay = 0) {
  const ref = useRef<T | null>(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce =
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const run = () => {
      if (started.current) return;
      started.current = true;
      if (reduce) {
        setValue(target);
        return;
      }
      const begin = performance.now() + startDelay;
      const tick = (now: number) => {
        const t = Math.min(Math.max((now - begin) / duration, 0), 1);
        const eased = 1 - Math.pow(1 - t, 4);
        setValue(Math.round(target * eased));
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    if (typeof IntersectionObserver === "undefined") {
      run();
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          run();
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration, startDelay]);

  return { ref, value };
}
