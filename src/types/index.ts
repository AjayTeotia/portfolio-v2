import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";

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

export type AboutMeTypes = {
  title: string;
  description: string;
  info: { field_name: string; field_value: string }[];
};

export type EducationTypes = {
  title: string;
  description: string;
  item: {
    institution: string;
    degree: string;
    duration: string;
  }[];
};

export type SkillsTypes = {
  title: string;
  description: string;
  skillsList: {
    icon: IconType;
    name: string;
  }[];
};

export interface StackType {
  name: string;
}

export interface ProjectsTypes {
  title: string;
  category: string;
  description: string;
  stacks: StackType[];
  image: string;
  liveLink: string;
  githubLink: string;
}
