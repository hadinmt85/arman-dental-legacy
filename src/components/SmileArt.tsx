"use client";

import { useId } from "react";

type SmileArtProps = {
  variant?: "before" | "after";
  className?: string;
};

const TOOTH_CENTERS = [155, 191, 227, 263, 299, 335, 371, 407, 443, 479];
const TOOTH_WIDTHS = [30, 32, 33, 34, 36, 36, 34, 33, 32, 30];
const TOOTH_ANGLES = [-15, -11, -7, -3, 0, 0, 3, 7, 11, 15];

/** Y position of the upper gum curve at a given x (quadratic from 120..520). */
function gumY(x: number): number {
  const t = (x - 120) / 400;
  const oneMinus = 1 - t;
  return oneMinus * oneMinus * 265 + 2 * oneMinus * t * 180 + t * t * 265;
}

export function SmileArt({ variant = "after", className }: SmileArtProps) {
  const rawId = useId();
  const uid = rawId.replace(/[^a-zA-Z0-9]/g, "");
  const isAfter = variant === "after";

  const sparkle = (x: number, y: number, size: number, opacity: number) => (
    <path
      key={`${x}-${y}`}
      d={`M${x} ${y - size} L${x + size * 0.22} ${y - size * 0.22} L${
        x + size
      } ${y} L${x + size * 0.22} ${y + size * 0.22} L${x} ${y + size} L${
        x - size * 0.22
      } ${y + size * 0.22} L${x - size} ${y} L${
        x - size * 0.22
      } ${y - size * 0.22} Z`}
      fill="#c39a3b"
      opacity={opacity}
    />
  );

  return (
    <svg
      viewBox="0 0 640 480"
      className={className}
      role="img"
      aria-label={
        isAfter
          ? "نمای شبیه‌سازی‌شده لبخند پس از درمان"
          : "نمای شبیه‌سازی‌شده لبخند پیش از درمان"
      }
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id={`bg-${uid}`} cx="46%" cy="32%" r="82%">
          <stop offset="0%" stopColor={isAfter ? "#fdfbf5" : "#f4f0e5"} />
          <stop offset="72%" stopColor={isAfter ? "#efe9db" : "#e7e1d3"} />
          <stop offset="100%" stopColor={isAfter ? "#ddd4c0" : "#d3cab7"} />
        </radialGradient>

        <radialGradient id={`vignette-${uid}`} cx="50%" cy="45%" r="72%">
          <stop offset="55%" stopColor="#0a2237" stopOpacity="0" />
          <stop offset="100%" stopColor="#0a2237" stopOpacity="0.16" />
        </radialGradient>

        <linearGradient id={`lip-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={isAfter ? "#b56a61" : "#a8706a"} />
          <stop offset="55%" stopColor={isAfter ? "#c07d72" : "#b28077"} />
          <stop offset="100%" stopColor={isAfter ? "#a95d56" : "#9c645e"} />
        </linearGradient>

        <linearGradient id={`gum-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#a45f61" />
          <stop offset="100%" stopColor="#bb7672" />
        </linearGradient>

        <linearGradient id={`teeth-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={isAfter ? "#ffffff" : "#e9d9a9"} />
          <stop offset="58%" stopColor={isAfter ? "#fdfaf1" : "#e0cb93"} />
          <stop offset="100%" stopColor={isAfter ? "#ece4d0" : "#c6aa68"} />
        </linearGradient>

        <radialGradient id={`interior-${uid}`} cx="50%" cy="42%" r="72%">
          <stop offset="0%" stopColor="#543236" />
          <stop offset="100%" stopColor="#2d191c" />
        </radialGradient>

        <clipPath id={`mouth-${uid}`}>
          <path d="M120 265 Q320 180 520 265 Q320 370 120 265 Z" />
        </clipPath>

        <filter id={`soft-${uid}`} x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="14" />
        </filter>

        <filter id={`glow-${uid}`} x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect width="640" height="480" fill={`url(#bg-${uid})`} />
      <rect width="640" height="480" fill={`url(#vignette-${uid})`} />

      <g transform="translate(0 -28)">
        {/* studio shadow */}
        <ellipse
        cx="320"
        cy="382"
        rx="225"
        ry="62"
        fill="#0a2237"
        opacity="0.16"
        filter={`url(#soft-${uid})`}
      />

      {/* lips */}
      <path
        d="M75 262 Q320 140 565 262 Q320 420 75 262 Z"
        fill={`url(#lip-${uid})`}
      />
      <path
        d="M75 262 Q320 140 565 262 Q320 420 75 262 Z"
        fill="none"
        stroke={isAfter ? "#8d4a44" : "#8b544b"}
        strokeOpacity="0.32"
        strokeWidth="1.6"
      />

      {/* mouth interior */}
      <path
        d="M120 265 Q320 180 520 265 Q320 370 120 265 Z"
        fill={`url(#interior-${uid})`}
      />

      <g clipPath={`url(#mouth-${uid})`}>
        {/* tongue / lower gum shadow */}
        <ellipse cx="320" cy="338" rx="170" ry="42" fill="#6d3a3f" opacity="0.55" />
        <ellipse cx="320" cy="352" rx="120" ry="24" fill="#8a4a4c" opacity="0.35" />

        {/* upper gum */}
        <path
          d="M120 265 Q320 180 520 265"
          fill="none"
          stroke={`url(#gum-${uid})`}
          strokeWidth="36"
          strokeLinecap="round"
        />

        {/* upper teeth */}
        <g>
          {TOOTH_CENTERS.map((centerX, index) => {
            const width = TOOTH_WIDTHS[index];
            const topY = gumY(centerX) - 4;
            const angle = TOOTH_ANGLES[index];
            const height = 60;

            return (
              <g key={centerX}>
                <rect
                  x={centerX - width / 2}
                  y={topY}
                  width={width}
                  height={height}
                  rx={7}
                  fill={`url(#teeth-${uid})`}
                  stroke={isAfter ? "#ded5c0" : "#b29a61"}
                  strokeWidth="1"
                  strokeOpacity="0.7"
                  transform={`rotate(${angle} ${centerX} ${topY})`}
                />
                {isAfter ? (
                  <ellipse
                    cx={centerX - width * 0.16}
                    cy={topY + 15}
                    rx={width * 0.18}
                    ry={6}
                    fill="#ffffff"
                    opacity="0.55"
                  />
                ) : null}
              </g>
            );
          })}
        </g>

        {!isAfter && (
          <>
            {/* widened gap between the central incisors */}
            <path
              d="M317 231 L315 296"
              stroke="#2d191c"
              strokeWidth="7"
              strokeLinecap="round"
              opacity="0.5"
            />
            {/* stains and plaque */}
            <ellipse cx="248" cy="268" rx="15" ry="8" fill="#8b7434" opacity="0.3" />
            <ellipse cx="390" cy="258" rx="11" ry="6" fill="#8b7434" opacity="0.26" />
            <ellipse cx="212" cy="260" rx="7" ry="4" fill="#6f5a28" opacity="0.28" />
            <ellipse cx="458" cy="266" rx="6" ry="3.5" fill="#6f5a28" opacity="0.24" />
            <path
              d="M352 233 L347 255 L354 268"
              stroke="#a08a52"
              strokeWidth="1.6"
              fill="none"
              opacity="0.6"
            />
            <path
              d="M150 247 Q320 186 490 247 L490 254 Q320 195 150 254 Z"
              fill="#8c7439"
              opacity="0.3"
            />
          </>
        )}

        {/* incisal-edge light */}
        {isAfter ? (
          <path
            d="M180 288 Q320 302 460 288"
            stroke="#ffffff"
            strokeOpacity="0.28"
            strokeWidth="5"
            fill="none"
          />
        ) : null}
      </g>

      {/* lip highlights */}
      <path
        d="M120 256 Q320 150 520 256"
        stroke="#ffffff"
        strokeOpacity="0.3"
        strokeWidth="4.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M160 288 Q320 372 480 288"
        stroke={isAfter ? "#f4ccc3" : "#e7bdb4"}
        strokeOpacity="0.28"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M296 210 Q320 200 344 210"
        stroke="#8d4a44"
        strokeOpacity="0.3"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />

      {isAfter ? (
        <g filter={`url(#glow-${uid})`}>
          {sparkle(150, 160, 12, 0.85)}
          {sparkle(492, 186, 8, 0.9)}
          {sparkle(520, 330, 6, 0.65)}
          {sparkle(118, 322, 5, 0.6)}
        </g>
      ) : null}
      </g>
    </svg>
  );
}
