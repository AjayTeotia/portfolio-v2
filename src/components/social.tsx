import { SparklesIcon } from "lucide-react";
import { Button } from "./ui/button";
import { SocialLinks } from "@/constants";
import { motion } from "motion/react";

export function Socials() {
  return (
    <div className="relative group flex gap-6">
      {/* Main  button */}
      <Button
        variant="outline"
        size="icon"
        className="size-10 hidden xl:flex items-center justify-center group-hover:hidden"
      >
        <SparklesIcon className="size-6" />
      </Button>

      <div className="xl:absolute flex gap-4 xl:top-1/2 xl:left-full xl:-translate-y-1/2 xl:opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto">
        {SocialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.path}
            target="_blank"
            rel="noopener noreferrer"
            className="size-10 border border-primary rounded-full flex items-center justify-center text-primary text-xl hover:bg-primary hover:text-secondary transition-all duration-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.1 * index,
              duration: 0.5,
            }}
          >
            {<link.icon />}
          </motion.a>
        ))}
      </div>
    </div>
  );
}
