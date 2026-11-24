import type { ReactNode, SVGProps } from "react";

export type IconName =
  | "tooth"
  | "implant"
  | "sparkle"
  | "aligner"
  | "child"
  | "root"
  | "brush"
  | "crown"
  | "scan"
  | "smile"
  | "phone"
  | "mobile"
  | "pin"
  | "clock"
  | "calendar"
  | "check"
  | "checkCircle"
  | "star"
  | "arrowLeft"
  | "arrowUpLeft"
  | "menu"
  | "close"
  | "user"
  | "shield"
  | "heart"
  | "award"
  | "instagram"
  | "whatsapp"
  | "telegram"
  | "chevronDown"
  | "chevronLeft"
  | "chevronRight"
  | "info"
  | "mail"
  | "sparkles"
  | "map"
  | "lock";

const icons: Record<IconName, ReactNode> = {
  tooth: (
    <path d="M12 6.2C10.5 4.8 8 4.2 6.3 5.4 4.4 6.7 4.5 9.1 4.9 11.2c.3 1.6.6 3.3.9 5.2.2 1.4.6 3.2 1.7 3.2 1 0 1.1-1.8 1.4-3.3.3-1.5.8-2.6 2.1-2.6s1.8 1.1 2.1 2.6c.3 1.5.4 3.3 1.4 3.3 1.1 0 1.5-1.8 1.7-3.2.3-1.9.6-3.6.9-5.2.4-2.1.5-4.5-1.4-5.8C16 4.2 13.5 4.8 12 6.2Z" />
  ),
  implant: (
    <>
      <path d="M7.6 3h8.8l-.8 4.6H8.4L7.6 3Z" />
      <path d="M9.2 7.6h5.6l-.7 12.1a2.1 2.1 0 0 1-4.2 0L9.2 7.6Z" />
      <path d="M9.4 11.2h5.2M9.8 14.3h4.4M10.2 17.4h3.6" />
    </>
  ),
  sparkle: (
    <>
      <path d="M12 3.2 13.8 8.4 19 10.2l-5.2 1.8L12 17.2l-1.8-5.2L5 10.2l5.2-1.8L12 3.2Z" />
      <path d="M18.5 15.5v3M17 17h3M5.5 4.5v2M4.5 5.5h2" />
    </>
  ),
  aligner: (
    <>
      <path d="M4.2 8.4C6.6 5.5 9.1 4 12 4s5.4 1.5 7.8 4.4c-.7 6.2-3.8 11.1-7.8 11.1S4.9 14.6 4.2 8.4Z" />
      <path d="M7.4 8.3c1.4-1.1 3-1.7 4.6-1.7s3.2.6 4.6 1.7" />
      <path d="M8 11.6h8" strokeDasharray="1.5 3" />
    </>
  ),
  child: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M9 10h.01M15 10h.01" strokeWidth="2.6" />
      <path d="M8.4 14.2a4.3 4.3 0 0 0 7.2 0" />
    </>
  ),
  root: (
    <>
      <path d="M8 3h8l-.6 3.5H8.6L8 3Z" />
      <path d="M8.6 6.5h6.8c.2 3.4-.2 7.4-1.5 11.4-.3.9-.8 1.6-1.4 1.6-.9 0-1-1.7-1.2-3-.1-1.3-.3-2.2-1.3-2.2s-1.2.9-1.3 2.2c-.2 1.3-.3 3-1.2 3-.6 0-1.1-.7-1.4-1.6-1.3-4-1.7-8-1.5-11.4Z" />
    </>
  ),
  brush: (
    <>
      <path d="m14.2 4.6 5.2 5.2" />
      <path d="M16.8 2 22 7.2l-2.6 2.6-5.2-5.2L16.8 2Z" />
      <path d="M13 7 4.2 15.8a2.4 2.4 0 0 0 0 3.4l.6.6a2.4 2.4 0 0 0 3.4 0L17 11" />
      <path d="m6.6 13.4 4 4" />
    </>
  ),
  crown: (
    <>
      <path d="M3.6 8.2 8 11.5 12 4.4l4 7.1 4.4-3.3-1.4 10H5L3.6 8.2Z" />
      <path d="M5.6 18.4h12.8" />
    </>
  ),
  scan: (
    <>
      <path d="M8.5 3H5a2 2 0 0 0-2 2v3.5M15.5 3H19a2 2 0 0 1 2 2v3.5M21 15.5V19a2 2 0 0 1-2 2h-3.5M8.5 21H5a2 2 0 0 1-2-2v-3.5" />
      <path d="M12 8.5v7M8.5 12h7" />
    </>
  ),
  smile: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 14.2a4.6 4.6 0 0 0 8 0" />
      <path d="M9 9.5h.01M15 9.5h.01" strokeWidth="2.4" />
    </>
  ),
  phone: (
    <path d="M21.6 16.8v2.9a1.9 1.9 0 0 1-2.1 1.9 18.9 18.9 0 0 1-8.2-2.9 18.6 18.6 0 0 1-5.7-5.7A18.9 18.9 0 0 1 2.7 4.7 1.9 1.9 0 0 1 4.6 2.6h2.9a1.9 1.9 0 0 1 1.9 1.6c.1.9.3 1.8.6 2.6a1.9 1.9 0 0 1-.4 2L8.5 10a15.2 15.2 0 0 0 5.7 5.7l1.2-1.2a1.9 1.9 0 0 1 2-.4c.8.3 1.7.5 2.6.6a1.9 1.9 0 0 1 1.6 1.9Z" />
  ),
  mobile: (
    <>
      <rect x="7" y="2.5" width="10" height="19" rx="2.4" />
      <path d="M11 18.5h2" />
    </>
  ),
  pin: (
    <>
      <path d="M20 10.2c0 5.7-8 11.6-8 11.6s-8-5.9-8-11.6a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="2.8" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.2l3.2 1.8" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.2" y="4.4" width="17.6" height="16.4" rx="2.4" />
      <path d="M16.2 2.6v3.6M7.8 2.6v3.6M3.2 9.6h17.6" />
    </>
  ),
  check: <path d="M20 6.4 9.4 17 4.4 12" />,
  checkCircle: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.2 12.2 2.5 2.5 5.1-5.3" />
    </>
  ),
  star: (
    <polygon
      fill="currentColor"
      stroke="none"
      points="12 2.6 14.9 8.6 21.4 9.5 16.7 14.1 17.8 20.6 12 17.5 6.2 20.6 7.3 14.1 2.6 9.5 9.1 8.6"
    />
  ),
  arrowLeft: (
    <>
      <path d="M19.5 12h-15" />
      <path d="m11.5 19-7-7 7-7" />
    </>
  ),
  arrowUpLeft: (
    <>
      <path d="M17.5 17.5 6.5 6.5" />
      <path d="M6.5 15V6.5H15" />
    </>
  ),
  menu: <path d="M4 6.5h16M4 12h16M4 17.5h16" />,
  close: <path d="M18 6 6 18M6 6l12 12" />,
  user: (
    <>
      <circle cx="12" cy="8" r="3.8" />
      <path d="M4.5 21a7.5 7.5 0 0 1 15 0" />
    </>
  ),
  shield: (
    <>
      <path d="M12 21.5s7.5-3.7 7.5-9.5V5.6L12 2.5 4.5 5.6V12c0 5.8 7.5 9.5 7.5 9.5Z" />
      <path d="m9.2 11.8 2 2 3.6-3.8" />
    </>
  ),
  heart: (
    <path d="M20.4 5.6a5.1 5.1 0 0 0-7.2 0L12 6.8l-1.2-1.2a5.1 5.1 0 1 0-7.2 7.2L12 21l8.4-8.2a5.1 5.1 0 0 0 0-7.2Z" />
  ),
  award: (
    <>
      <circle cx="12" cy="8.6" r="5.6" />
      <path d="m8.6 13.2-1.4 8 4.8-2.6 4.8 2.6-1.4-8" />
      <path d="m10.2 8.6 1.3 1.3 2.4-2.6" />
    </>
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.2 6.9h.01" strokeWidth="2.6" />
    </>
  ),
  whatsapp: (
    <path
      fill="currentColor"
      stroke="none"
      d="M17.5 14.4c-.3-.2-1.8-.9-2-.9-.3-.1-.5-.2-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.4.5-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.4M12.1 21.8h-.1a9.9 9.9 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4a9.9 9.9 0 0 1-1.5-5.3c0-5.5 4.4-9.9 9.9-9.9 2.6 0 5.1 1 7 2.9a9.8 9.8 0 0 1 2.9 7c0 5.4-4.4 9.9-9.9 9.9m8.4-18.3A11.8 11.8 0 0 0 12 0C5.5 0 .2 5.3.2 11.9c0 2.1.5 4.1 1.6 5.9L0 24l6.3-1.7a11.9 11.9 0 0 0 5.7 1.5c6.6 0 11.9-5.3 11.9-11.9 0-3.2-1.2-6.2-3.4-8.4"
    />
  ),
  telegram: (
    <path
      fill="currentColor"
      stroke="none"
      d="M23.1 3.3 19.7 20c-.3 1.2-1 1.5-2 .9l-5.4-4-2.6 2.5c-.3.3-.5.5-1.1.5l.4-5.5L19.1 5.2c.4-.4-.1-.6-.6-.2L6.3 12.6l-5.2-1.6c-1.1-.4-1.2-1.1.2-1.7l20.3-7.8c1-.4 1.8.2 1.5 1.8Z"
    />
  ),
  chevronDown: <path d="m6 9.5 6 6 6-6" />,
  chevronLeft: <path d="m14.5 6-6 6 6 6" />,
  chevronRight: <path d="m9.5 6 6 6-6 6" />,
  info: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5.2M12 7.8h.01" strokeWidth="2.2" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2.4" />
      <path d="m3.6 7 8.4 6 8.4-6" />
    </>
  ),
  sparkles: (
    <>
      <path d="M11.5 3.5 13 8l4.5 1.5L13 11l-1.5 4.5L10 11 5.5 9.5 10 8l1.5-4.5Z" />
      <path d="M18.5 14v3.5M16.75 15.75h3.5M5.5 3v2M4.5 4h2" />
    </>
  ),
  map: (
    <>
      <path d="m3.5 6 5.5-2.5L14.5 6l6-2.5v14.5L14.5 20.5 9 18l-5.5 2.5V6Z" />
      <path d="M9 3.5V18M14.5 6v14.5" />
    </>
  ),
  lock: (
    <>
      <rect x="4.5" y="10.5" width="15" height="10.5" rx="2.2" />
      <path d="M8 10.5V7.8a4 4 0 0 1 8 0v2.7" />
      <path d="M12 14.5v2.6" />
    </>
  ),
};

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
  className?: string;
};

export function Icon({ name, className = "h-5 w-5", ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
      {...props}
    >
      {icons[name]}
    </svg>
  );
}
