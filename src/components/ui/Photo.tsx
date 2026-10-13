import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/utils/cn";
import { profile } from "@/config/site";

type PhotoProps = {
  /** Candidate sources tried in order (local first, then remote fallbacks). */
  sources: readonly string[];
  alt: string;
  className?: string;
  imgClassName?: string;
  /** Placeholder caption shown when no source loads */
  placeholderLabel?: string;
  loading?: "eager" | "lazy";
  fetchPriority?: "high" | "low" | "auto";
};

/**
 * Renders the first image source that loads successfully. If every source fails,
 * a clean, on-brand monogram placeholder is displayed instead (no generated faces).
 */
export function Photo({
  sources,
  alt,
  className,
  imgClassName,
  placeholderLabel = profile.name,
  loading = "lazy",
  fetchPriority = "auto",
}: PhotoProps) {
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const sourceKey = sources.join("|");
  const prevKey = useRef(sourceKey);

  // Reset only when the actual list of sources changes (not on mount or on parent re-renders)
  useEffect(() => {
    if (prevKey.current === sourceKey) return;
    prevKey.current = sourceKey;
    setIndex(0);
    setLoaded(false);
  }, [sourceKey]);

  // Handles images served from cache where `onLoad` may already have fired
  const imgRef = useCallback((node: HTMLImageElement | null) => {
    if (node && node.complete && node.naturalWidth > 0) setLoaded(true);
  }, []);

  const src = sources[index];
  const exhausted = index >= sources.length;

  return (
    <div className={cn("relative overflow-hidden bg-navy-800", className)}>
      {/* Placeholder layer (also acts as the loading state) */}
      <div
        aria-hidden={!exhausted}
        className={cn(
          "absolute inset-0 flex flex-col items-center justify-center gap-3 transition-opacity duration-700",
          loaded ? "opacity-0" : "opacity-100",
        )}
        style={{ background: "linear-gradient(160deg, #111b30 0%, #0d1527 55%, #0a101c 100%)" }}
      >
        <span className="font-display text-5xl font-light tracking-[0.2em] text-steel-300/70 sm:text-6xl">
          {profile.initials}
        </span>
        {placeholderLabel && (
          <span className="px-4 text-center text-[11px] font-medium uppercase tracking-[0.25em] text-ink-subtle">
            {placeholderLabel}
          </span>
        )}
        {exhausted && import.meta.env.DEV && sources[0] && (
          <span className="mt-1 max-w-[80%] text-center text-[10px] text-ink-subtle/80">Add photo: {sources[0]}</span>
        )}
      </div>

      {!exhausted && (
        <img
          key={src}
          ref={imgRef}
          src={src}
          alt={alt}
          loading={loading}
          decoding="async"
          fetchPriority={fetchPriority}
          referrerPolicy="no-referrer"
          onLoad={() => setLoaded(true)}
          onError={() => {
            setLoaded(false);
            setIndex((i) => i + 1);
          }}
          className={cn(
            "relative h-full w-full object-cover transition-opacity duration-700",
            loaded ? "opacity-100" : "opacity-0",
            imgClassName,
          )}
        />
      )}
    </div>
  );
}
