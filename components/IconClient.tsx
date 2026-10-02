import type { CSSProperties } from "react";
import {
  ArrowRight, ArrowUpRight, ChevronDown, Check, Menu, X, Plus, Minus,
  // product-nav icons rendered dynamically by the mega-menu / product filter
  Wheat, HeartPulse, Truck, Layers, Users, Handshake, Headset, Megaphone, GraduationCap, CalendarCheck,
  type LucideIcon,
} from "lucide-react";

// Client-only icon subset (keeps the ~45 server-only icons out of the island bundles).
// Same Lucide switch + `ph-*` compatibility as components/Icon.tsx. Keep in sync with island usage.
const MAP = {
  "ph-arrow-right": ArrowRight, "ph-arrow-up-right": ArrowUpRight, "ph-caret-down": ChevronDown,
  "ph-check": Check, "ph-list": Menu, "ph-x": X, "ph-plus": Plus, "ph-minus": Minus,
  "ph-grains": Wheat, "ph-heartbeat": HeartPulse, "ph-truck": Truck, "ph-stack": Layers,
  "ph-users-three": Users, "ph-handshake": Handshake, "ph-headset": Headset, "ph-megaphone": Megaphone,
  "ph-graduation-cap": GraduationCap, "ph-calendar-check": CalendarCheck,
} satisfies Record<string, LucideIcon>;

// A product's icon must be one THIS map draws. The mega-menu and the product filter render
// through it, and an unknown name draws an empty tile with no error. T4Suite's did
// (1 Oct 2026). Typing the field stops the next one at compile time.
export type NavIconName = keyof typeof MAP;

type IconArgs = {
  name: string;
  size?: number;
  weight?: string;
  color?: string;
  style?: CSSProperties;
  className?: string;
  "aria-hidden"?: boolean | "true" | "false";
  "aria-label"?: string;
};

export function Icon({ name, size, weight: _weight, color, style, className, ...rest }: IconArgs) {
  const Cmp = (MAP as Record<string, LucideIcon>)[name];
  if (!Cmp) return null;
  const px = size ?? (typeof style?.fontSize === "number" ? style.fontSize : undefined);
  return <Cmp size={px} color={color} strokeWidth={1.75} style={style} className={className} {...rest} />;
}
