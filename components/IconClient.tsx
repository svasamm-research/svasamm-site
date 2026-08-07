import type { CSSProperties } from "react";
import {
  ArrowRight, ArrowUpRight, ChevronDown, Check, Menu, X, Plus, Minus,
  // product-nav icons rendered dynamically by the mega-menu / product filter
  Wheat, HeartPulse, Truck, Layers, Users, Handshake, Headset, Megaphone, GraduationCap,
  type LucideIcon,
} from "lucide-react";

// Client-only icon subset (keeps the ~45 server-only icons out of the island bundles).
// Same Lucide switch + `ph-*` compatibility as components/Icon.tsx. Keep in sync with island usage.
const MAP: Record<string, LucideIcon> = {
  "ph-arrow-right": ArrowRight, "ph-arrow-up-right": ArrowUpRight, "ph-caret-down": ChevronDown,
  "ph-check": Check, "ph-list": Menu, "ph-x": X, "ph-plus": Plus, "ph-minus": Minus,
  "ph-grains": Wheat, "ph-heartbeat": HeartPulse, "ph-truck": Truck, "ph-stack": Layers,
  "ph-users-three": Users, "ph-handshake": Handshake, "ph-headset": Headset, "ph-megaphone": Megaphone,
  "ph-graduation-cap": GraduationCap,
};

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
  const Cmp = MAP[name];
  if (!Cmp) return null;
  const px = size ?? (typeof style?.fontSize === "number" ? style.fontSize : undefined);
  return <Cmp size={px} color={color} strokeWidth={1.75} style={style} className={className} {...rest} />;
}
