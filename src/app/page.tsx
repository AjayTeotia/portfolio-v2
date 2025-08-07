"use client";

import { Photo } from "@/components/photo";
import { Socials } from "@/components/social";
import { Stats } from "@/components/stats";
import { Button } from "@/components/ui/button";
import { fadeIn } from "@/lib/utils";
import { DownloadIcon } from "lucide-react";
import { motion } from "motion/react";

export default function Home() {
  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      className="min-h-[80vh] flex flex-col justify-center xl:justify-between py-12 xl:py-0"
    >
      <div className="container mx-auto max-w-[1280px] flex-1 flex items-center">
        {/* Main Content */}
        <div className="flex flex-col xl:flex-row items-center justify-center xl:gap-[100px] w-full">
          <div className="mb-8 xl:mb-0">
            <Photo />
          </div>

          {/* Text Content */}
          <div className="flex flex-col gap-4 w-auto max-w-[380px] text-center xl:text-left">
            <motion.div
              variants={fadeIn("down", 1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
            >
              <h1 className="h1">
                Hello,
                <br />
                I&#39;m <span className="text-primary">Ajay!</span>
              </h1>
            </motion.div>

            {/* Bio */}
            <motion.div
              variants={fadeIn("down", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className="p text-white/80"
            >
              <p>
                A dedicated full stack developer delivering impactful web
                applications, while sipping coffee on a glorious day.
              </p>
            </motion.div>

            {/* take action */}
            <motion.h3
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className="h3 leading-normal"
            >
              Let&apos;s build something extraordinary together!
            </motion.h3>

            {/* Button and Socials */}
            <div className="flex flex-col xl:flex-row items-center justify-center xl:items-center xl:justify-start gap-6 pt-2">
              <motion.a
                variants={fadeIn("down", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
                href="/ajay_teotia_resume.pdf"
                download
                aria-label="Download my CV"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <DownloadIcon className="size-5" />
                </Button>
              </motion.a>

              <motion.div
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
                className="mb-8 xl:mb-0 flex justify-center"
              >
                <Socials />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="w-full">
        <Stats />
      </div>
    </motion.div>
  );
}
