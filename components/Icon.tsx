import type { IconProps } from "@phosphor-icons/react";
import {
  // nav + ui
  Grains, Heartbeat, Truck, Stack, UsersThree, Handshake, Headset,
  CaretDown, CaretRight, ArrowRight, ArrowUpRight, ArrowLeft, List, X, Check, Plus, Minus,
  EnvelopeSimple, Phone,
  MapPin, Lightning, Buildings, Package, ChartLineUp, // product features + resources
  Scroll, Scales, DeviceMobile, UserFocus, Percent, MapTrifold, BookOpen,
  Warehouse, ShoppingCart, Factory, Receipt, FileText, UserPlus, Clock, Money,
  CalendarCheck, ChartBar, Funnel, Megaphone, GraduationCap, ShieldCheck, ChatCircleDots, Ticket, Warning,
  Timer, BookBookmark, Desktop, UserCircle, // home
  PlugsConnected, HardDrives, SlidersHorizontal, Flag,
} from "@phosphor-icons/react/dist/ssr";

// Only the icons used across the site are imported (small bundle). `/dist/ssr` renders
// server-side. Add new ph-* names here as pages need them.
const MAP: Record<string, React.ComponentType<IconProps>> = {
  "ph-grains": Grains, "ph-heartbeat": Heartbeat, "ph-truck": Truck, "ph-stack": Stack,
  "ph-users-three": UsersThree, "ph-handshake": Handshake, "ph-headset": Headset,
  "ph-caret-down": CaretDown, "ph-caret-right": CaretRight, "ph-arrow-right": ArrowRight,
  "ph-arrow-up-right": ArrowUpRight, "ph-arrow-left": ArrowLeft, "ph-list": List, "ph-x": X, "ph-check": Check,
  "ph-envelope-simple": EnvelopeSimple, "ph-phone": Phone,
  "ph-plus": Plus, "ph-minus": Minus, "ph-map-pin": MapPin,
  "ph-lightning": Lightning, "ph-buildings": Buildings, "ph-package": Package,
  "ph-chart-line-up": ChartLineUp,
  "ph-scroll": Scroll, "ph-scales": Scales, "ph-device-mobile": DeviceMobile,
  "ph-user-focus": UserFocus, "ph-percent": Percent, "ph-map-trifold": MapTrifold,
  "ph-book-open": BookOpen, "ph-warehouse": Warehouse, "ph-shopping-cart": ShoppingCart,
  "ph-factory": Factory, "ph-receipt": Receipt, "ph-file-text": FileText, "ph-user-plus": UserPlus,
  "ph-clock": Clock, "ph-money": Money, "ph-calendar-check": CalendarCheck, "ph-chart-bar": ChartBar,
  "ph-funnel": Funnel, "ph-megaphone": Megaphone, "ph-graduation-cap": GraduationCap, "ph-shield-check": ShieldCheck, "ph-chat-circle-dots": ChatCircleDots,
  "ph-ticket": Ticket, "ph-warning": Warning, "ph-timer": Timer, "ph-book-bookmark": BookBookmark,
  "ph-desktop": Desktop, "ph-user-circle": UserCircle, "ph-plugs-connected": PlugsConnected, "ph-hard-drives": HardDrives,
  "ph-sliders-horizontal": SlidersHorizontal, "ph-flag": Flag,
};

export function Icon({ name, ...props }: { name: string } & IconProps) {
  const Cmp = MAP[name];
  if (!Cmp) return null;
  return <Cmp {...props} />;
}
