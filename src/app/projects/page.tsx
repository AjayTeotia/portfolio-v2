"use client";

import { buttonVariants } from "@/components/ui/button";
import { ProjectsData } from "@/constants";
import { GithubIcon } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { RiArrowRightUpLine } from "react-icons/ri";
import { SiNotion } from "react-icons/si";

export default function Projects() {
  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      className="min-h-[80vh] flex items-center justify-center py-8 sm:py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <h3 className="h3 mb-8 text-center text-3xl xl:text-4xl font-bold">
          Selected Projects
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {ProjectsData.map((item, index) => (
            <div
              key={index}
              className="relative group rounded overflow-hidden shadow-lg"
            >
              <div className="relative w-full h-60">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  quality={90}
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 400px"
                  className="object-cover rounded"
                  priority
                />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4 bg-background text-accent-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="text-xs mt-2 text-muted-foreground">
                  {item.description}
                </p>
                <ul className="flex gap-2 text-xs mt-2">
                  {item.stacks.map((stack, index) => (
                    <li key={index} className="text-primary">
                      {stack.name}
                      {index !== item.stacks.length - 1 && ","}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-4 mt-4">
                  <Link
                    href={item.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonVariants({
                      variant: "secondary",
                      className: "rounded-full",
                      size: "icon",
                    })}
                  >
                    <RiArrowRightUpLine className="size-6" />
                  </Link>

                  <Link
                    href={item.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonVariants({
                      className: "rounded-full",
                      size: "icon",
                    })}
                  >
                    <GithubIcon className="size-6" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="h-1 bg-accent-foreground my-8" />

        <div className="flex flex-col w-full items-center mt-4 mb-24">
          <h2 className="text-2xl font-bold">View More</h2>

          <p className="text-muted-foreground">
            Check out my Notion Portfolio for all my projects
          </p>

          <Link
            href="https://solstice-parsley-f36.notion.site/Ajay-Singh-Teotia-Project-Showcase-1614289a0f60803fb879d06e8569f07f?pvs=74"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({
              variant: "secondary",
              className: "mt-4",
            })}
          >
            <SiNotion className="size-5" /> Notion
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
