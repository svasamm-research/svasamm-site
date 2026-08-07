import type { CSSProperties } from "react";
import {
  Wheat, HeartPulse, Truck, Layers, Users, Handshake, Headset,
  ChevronDown, ChevronRight, ArrowRight, ArrowUpRight, ArrowLeft, Menu, X, Check, Plus, Minus,
  Mail, Phone, MapPin, Zap, Building2, Package, TrendingUp,
  ScrollText, Scale, Smartphone, UserCheck, Percent, Map, BookOpen,
  Warehouse, ShoppingCart, Factory, Receipt, FileText, UserPlus, Clock, Banknote,
  CalendarCheck, BarChart3, Filter, Megaphone, GraduationCap, ShieldCheck, MessageCircle, Ticket, TriangleAlert,
  Timer, BookMarked, Monitor, CircleUser, Cable, Server, SlidersHorizontal, Flag,
  type LucideIcon,
} from "lucide-react";

// Svasamm design system uses Lucide (stroke 1.75). Call sites keep the legacy `ph-*`
// name so nothing else needs to change; this map re-points each to its Lucide equivalent.
const MAP: Record<string, LucideIcon> = {
  "ph-grains": Wheat, "ph-heartbeat": HeartPulse, "ph-truck": Truck, "ph-stack": Layers,
  "ph-users-three": Users, "ph-handshake": Handshake, "ph-headset": Headset,
  "ph-caret-down": ChevronDown, "ph-caret-right": ChevronRight, "ph-arrow-right": ArrowRight,
  "ph-arrow-up-right": ArrowUpRight, "ph-arrow-left": ArrowLeft, "ph-list": Menu, "ph-x": X, "ph-check": Check,
  "ph-envelope-simple": Mail, "ph-phone": Phone, "ph-plus": Plus, "ph-minus": Minus, "ph-map-pin": MapPin,
  "ph-lightning": Zap, "ph-buildings": Building2, "ph-package": Package, "ph-chart-line-up": TrendingUp,
  "ph-scroll": ScrollText, "ph-scales": Scale, "ph-device-mobile": Smartphone, "ph-user-focus": UserCheck,
  "ph-percent": Percent, "ph-map-trifold": Map, "ph-book-open": BookOpen, "ph-warehouse": Warehouse,
  "ph-shopping-cart": ShoppingCart, "ph-factory": Factory, "ph-receipt": Receipt, "ph-file-text": FileText,
  "ph-user-plus": UserPlus, "ph-clock": Clock, "ph-money": Banknote, "ph-calendar-check": CalendarCheck,
  "ph-chart-bar": BarChart3, "ph-funnel": Filter, "ph-megaphone": Megaphone, "ph-graduation-cap": GraduationCap,
  "ph-shield-check": ShieldCheck, "ph-chat-circle-dots": MessageCircle, "ph-ticket": Ticket, "ph-warning": TriangleAlert,
  "ph-timer": Timer, "ph-book-bookmark": BookMarked, "ph-desktop": Monitor, "ph-user-circle": CircleUser,
  "ph-plugs-connected": Cable, "ph-hard-drives": Server, "ph-sliders-horizontal": SlidersHorizontal, "ph-flag": Flag,
};

type IconArgs = {
  name: string;
  size?: number;
  weight?: string; // Phosphor leftover — ignored (Lucide has no weight)
  color?: string;
  style?: CSSProperties;
  className?: string;
  "aria-hidden"?: boolean | "true" | "false";
  "aria-label"?: string;
};

export function Icon({ name, size, weight: _weight, color, style, className, ...rest }: IconArgs) {
  const Cmp = MAP[name];
  if (!Cmp) return null;
  // Phosphor sized via `size` OR CSS font-size (1em SVGs). Lucide needs an explicit px size.
  const px = size ?? (typeof style?.fontSize === "number" ? style.fontSize : undefined);
  return <Cmp size={px} color={color} strokeWidth={1.75} style={style} className={className} {...rest} />;
}
