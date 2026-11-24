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
        className={`mt-4 text-[clamp(1.8rem,3.6vw,2.9rem)] font-extrabold leading-[1.25] tracking-[-0.03em] ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 max-w-lg text-sm leading-8 ${
            light ? "text-white/65" : "text-muted"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
