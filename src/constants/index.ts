import {
  AboutMeTypes,
  EducationTypes,
  NavLink,
  SkillsTypes,
  SocialLinksTypes,
  StatsDataType,
} from "@/types";
import { GithubIcon, LinkedinIcon } from "lucide-react";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoTailwindCss } from "react-icons/bi";
import { BiLogoMongodb } from "react-icons/bi";
import { TbBrandTypescript } from "react-icons/tb";
import { SiJavascript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiClerk } from "react-icons/si";
import { SiShadcnui } from "react-icons/si";

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
  // { num: 8, text: "Technologies mastered" },
  { num: 20, text: "Projects completed" },
  { num: 500, text: "Code commits" },
];

export const AboutMe: AboutMeTypes[] = [
  {
    title: "About Me",
    description:
      "Driven by curiosity and perseverance, I am passionate about developing intuitive software that brings value to the world. I believe in the power of technology to bridge gaps, spark positive change, and empower users to achieve their goals.",
    info: [
      {
        field_name: "Name",
        field_value: "Ajay Teotia",
      },
      {
        field_name: "Email",
        field_value: "ajaysinghteotia3@gmail.com",
      },
      {
        field_name: "Phone",
        field_value: "(+91) 639 584 9909",
      },
      {
        field_name: "Location",
        field_value: "Gulaothi, India",
      },

      {
        field_name: "Languages",
        field_value: "English, Hindi",
      },
    ],
  },
];

export const Education: EducationTypes[] = [
  {
    title: "My education",
    description:
      "Solid academic foundation in computer science, enhanced by specialized certifications.",
    item: [
      {
        institution: "Dr.APJ Abdul Kalam Techniclogical University",
        degree: "Bachelor of Science in Computer Science",
        duration: "2022 - 2026",
      },
      {
        institution: "Apna College - Delta ",
        degree: "Full Stack Web Development Course Certificate",
        duration: "2025",
      },
      {
        institution: "MODERN ACADEMY Sr. Sec. School",
        degree: "Higher School Certificate",
        duration: "2022",
      },
      {
        institution: "MODERN ACADEMY Sr. Sec. School",
        degree: "Secondary School Certificate",
        duration: "2020",
      },
    ],
  },
];

export const Skills: SkillsTypes[] = [
  {
    title: "My technical skills",
    description:
      "Adept in the JavaScript ecosystem, I work with modern frameworks and tools to build fast and visually engaging web applications that deliver seamless user experiences.",
    skillsList: [
      {
        icon: FaReact,
        name: "React",
      },
      {
        icon: RiNextjsFill,
        name: "Next.js",
      },
      {
        icon: BiLogoTailwindCss,
        name: "Tailwind CSS",
      },
      {
        icon: BiLogoMongodb,
        name: "MongoDB",
      },
      {
        icon: TbBrandTypescript,
        name: "TypeScript",
      },
      {
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        icon: FaNodeJs,
        name: "Node.js",
      },
      {
        icon: SiExpress,
        name: "Express.js",
      },
      {
        icon: SiShadcnui,
        name: "Shadcn UI",
      },
      {
        icon: SiClerk,
        name: "Clerk",
      },
    ],
  },
];
