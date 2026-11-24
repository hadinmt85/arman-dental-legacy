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
  align = "center",
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
        className={`mt-4 text-2xl leading-[1.35] sm:text-3xl lg:text-[2.35rem] ${
          light ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-sm leading-8 sm:text-base ${
            light ? "text-navy-100" : "text-muted"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
