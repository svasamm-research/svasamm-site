import type { IconProps } from "@phosphor-icons/react";
import {
  ArrowRight, ArrowUpRight, CaretDown, Check, List, X, Plus, Minus,
  // product-nav icons rendered dynamically by the mega-menu / product filter
  Grains, Heartbeat, Truck, Stack, UsersThree, Handshake, Headset, Megaphone, GraduationCap,
} from "@phosphor-icons/react/dist/ssr";

// Client-only icon subset. The interactive islands (SiteHeader, ProductFilter,
// FaqAccordion, ContactForm) import THIS instead of the full Icon map so the other ~45
// server-only icons never enter the client bundle. Keep in sync with island usage.
const MAP: Record<string, React.ComponentType<IconProps>> = {
  "ph-arrow-right": ArrowRight, "ph-arrow-up-right": ArrowUpRight, "ph-caret-down": CaretDown,
  "ph-check": Check, "ph-list": List, "ph-x": X, "ph-plus": Plus, "ph-minus": Minus,
  "ph-grains": Grains, "ph-heartbeat": Heartbeat, "ph-truck": Truck, "ph-stack": Stack,
  "ph-users-three": UsersThree, "ph-handshake": Handshake, "ph-headset": Headset, "ph-megaphone": Megaphone,
  "ph-graduation-cap": GraduationCap,
};

export function Icon({ name, ...props }: { name: string } & IconProps) {
  const Cmp = MAP[name];
  if (!Cmp) return null;
  return <Cmp {...props} />;
}
