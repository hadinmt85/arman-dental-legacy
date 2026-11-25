import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "start";
  light?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "start",
  light = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`${
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"
      } ${className}`}
    >
      {eyebrow ? (
        <span className={`eyebrow ${light ? "eyebrow-light" : ""}`}>
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={`mt-3 text-[clamp(1.75rem,3.4vw,2.55rem)] font-extrabold leading-[1.25] tracking-[-0.045em] ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-3 max-w-lg text-xs leading-7 sm:text-[13px] ${
            light ? "text-white/70" : "text-muted"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
