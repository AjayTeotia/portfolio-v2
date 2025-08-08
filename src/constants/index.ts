import {
  AboutMeTypes,
  ContactInfoType,
  EducationTypes,
  NavLink,
  ProjectsTypes,
  SkillsTypes,
  SocialLinksTypes,
  StatsDataType,
} from "@/types";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
  PhoneCall,
} from "lucide-react";
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

export const ProjectsData: ProjectsTypes[] = [
  {
    title: "LMS - Learning Management System",
    category: "Web Application",
    description:
      "A full-stack course platform built with the modern web. After weeks of building, I’m excited to launch LMS – a production-ready, open-source Learning Management System with everything you need to run an online education platform",
    stacks: [
      { name: "Next.js" },
      { name: "React" },
      { name: "Tailwind CSS" },
      { name: "Better-Auth" },
      { name: "Prisma" },
    ],
    image: "/projects/lms.jpeg",
    liveLink: "https://lms-aj.vercel.app/",
    githubLink: "https://github.com/AjayTeotia/lms",
  },

  {
    title: "Vibe",
    category: "Web Application",
    description:
      "Vibe is an AI-powered web application generator that transforms your ideas into fully functional, live web apps through simple text prompts. Built with Next.js 15, it leverages cutting-edge AI to create, preview, and share web applications in real-time",
    stacks: [
      { name: "Next.js" },
      { name: "React" },
      { name: "Tailwind CSS" },
      { name: "Prisma" },
      { name: "tRPC" },
    ],
    image: "/projects/vibe.jpeg",
    liveLink: "https://vibe-gilt.vercel.app/",
    githubLink: "https://github.com/AjayTeotia/vibe",
  },

  {
    title: "Quill",
    category: "Web Application",
    description:
      "A Modern Fullstack SaaS-Platform.Built with the Next.js, tRPC, TypeScript, Prisma & Tailwind",
    stacks: [
      { name: "Next.js" },
      { name: "React" },
      { name: "Tailwind CSS" },
      { name: "Prisma" },
      { name: "tRPC" },
    ],
    image: "/projects/quill.jpeg",
    liveLink: "https://quill-gilt.vercel.app/",
    githubLink: "https://github.com/AjayTeotia/quill",
  },

  {
    title: "PingPanda",
    category: "Web Application",
    description: "A Modern Fullstack Event Monitoring SaaS",
    stacks: [
      { name: "Next.js" },
      { name: "React" },
      { name: "Tailwind CSS" },
      { name: "Prisma" },
      { name: "tRPC" },
    ],
    image: "/projects/pingpanda.jpeg",
    liveLink: "https://pingpanda-aj.vercel.app/",
    githubLink: "https://github.com/AjayTeotia/PingPanda",
  },

  {
    title: "MovieFlix",
    category: "Mobile Application",
    description: "A Movie Finding App with Extensive Search.",
    stacks: [
      { name: "Expo" },
      { name: "React Native" },
      { name: "Appwrite" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
    ],
    image: "/projects/movieflix.jpeg",
    liveLink: "",
    githubLink: "https://github.com/AjayTeotia/MovieFlix",
  },

  {
    title: "Streamify",
    category: "MERN Application",
    description: "Fullstack Chat & Video Calling App.",
    stacks: [
      { name: "MongoDB" },
      { name: "React" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "Stream" },
    ],
    image: "/projects/stramify.jpeg",
    liveLink: "https://streamify-5qrf.onrender.com/",
    githubLink: "https://github.com/AjayTeotia/streamify",
  },
];

export const ContactInfo: ContactInfoType[] = [
  {
    icon: PhoneCall,
    title: "Phone",
    description: "(+91) 639 584 9909",
    action: () => {
      window.location.href = "tel:+916395849909";
    },
  },

  {
    icon: MailIcon,
    title: "Email",
    description: "ajaysinghteotia3@gmail.com",
    action: () => {
      window.location.href = "mailto:ajaysinghteotia3@gmail.com";
    },
  },

  {
    icon: MapPinIcon,
    title: "Location",
    description: "Gulaothi, India",
    action: () =>
      window.open(
        "https://www.google.com/maps/place/Gulaothi,+Uttar+Pradesh+203408/@28.5874327,77.7697288,15z/data=!3m1!4b1!4m6!3m5!1s0x390c9982107812d3:0x893238d0cc3ea721!8m2!3d28.5902291!4d77.7936081!16zL20vMGY0eTBq?entry=ttu&g_ep=EgoyMDI1MDgwNS4wIKXMDSoASAFQAw%3D%3D",
        "_blank"
      ),
  },
];
