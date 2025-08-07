import { NavLink, SocialLinksTypes, StatsDataType } from "@/types";
import { GithubIcon, LinkedinIcon } from "lucide-react";

export const NavLinks: NavLink[] = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "about",
    path: "/about",
  },
  {
    name: "projects",
    path: "/projects",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

export const SocialLinks: SocialLinksTypes[] = [
  {
    name: "github",
    path: "https://github.com/ajayteotia",
    icon: GithubIcon,
  },
  {
    name: "linkedin",
    path: "https://www.linkedin.com/in/ajay-teotia/",
    icon: LinkedinIcon,
  },
];

export const StatsData: StatsDataType[] = [
  // { num: 2, text: "Years of experience" },
  { num: 8, text: "Technologies mastered" },
  { num: 20, text: "Projects completed" },
  { num: 500, text: "Code commits" },
];
