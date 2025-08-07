import { LucideIcon } from "lucide-react";

export type NavLink = {
  name: string;
  path: string;
};

export type SocialLinksTypes = {
  name: string;
  path: string;
  icon: LucideIcon;
};

export type StatsDataType = {
  num: number;
  text: string;
};
