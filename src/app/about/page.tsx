"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { AboutMe, Education, Skills } from "@/constants";
import { motion } from "motion/react";

// Utility classes for width, padding and font styles can be customized.
export default function AboutPage() {
  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.8 }}
      className="min-h-[80vh] flex items-center justify-center py-8 sm:py-12 xl:py-0"
    >
      <div className="container mx-auto px-4">
        <Tabs
          defaultValue="about"
          className="flex flex-col gap-6 xl:gap-8 h-auto"
        >
          {/* TabsList: scrollable row on mobile */}
          <TabsList className="w-full overflow-x-auto flex-nowrap rounded-lg bg-muted/60 p-1 flex gap-1 sticky top-0 z-10">
            <TabsTrigger value="about" className="min-w-[100px] font-semibold">
              About
            </TabsTrigger>
            <TabsTrigger
              value="education"
              className="min-w-[100px] font-semibold"
            >
              Education
            </TabsTrigger>
            <TabsTrigger value="skills" className="min-w-[100px] font-semibold">
              Skills
            </TabsTrigger>
          </TabsList>

          {/* Tab Content */}
          <div className="w-full">
            {/* === About === */}
            <TabsContent value="about" className="w-full" tabIndex={0}>
              <div className="flex flex-col gap-6 sm:gap-8 text-center xl:text-left">
                <div>
                  <h3 className="text-3xl xl:text-4xl font-bold">
                    {AboutMe[0].title}
                  </h3>
                  <p className="mt-2 font-semibold text-muted-foreground">
                    {AboutMe[0].description}
                  </p>
                </div>
                <ScrollArea className="max-h-[350px] sm:max-h-[400px]">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {AboutMe[0].info.map((item, index) => (
                      <li
                        key={index}
                        className="bg-muted py-5 px-6 rounded-xl flex flex-col items-center md:items-start"
                      >
                        <span className="uppercase text-xs tracking-wide text-accent-foreground font-semibold">
                          {item.field_name}
                        </span>
                        <h3 className="text-lg font-bold tracking-tight text-primary mt-1">
                          {item.field_value}
                        </h3>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* === Education === */}
            <TabsContent value="education" className="w-full" tabIndex={0}>
              <div className="flex flex-col gap-6 sm:gap-8 text-center xl:text-left">
                <div>
                  <h3 className="text-3xl xl:text-4xl font-bold">
                    {Education[0].title}
                  </h3>
                  <p className="mt-2 font-semibold text-muted-foreground">
                    {Education[0].description}
                  </p>
                </div>
                <ScrollArea className="max-h-[350px] sm:max-h-[400px]">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Education[0].item.map((item, index) => (
                      <li
                        key={index}
                        className="bg-muted py-5 px-6 rounded-xl flex flex-col items-center md:items-start h-auto"
                      >
                        <span className="text-primary font-semibold text-sm">
                          {item.duration}
                        </span>
                        <h3 className="text-lg font-bold mt-1">
                          {item.degree}
                        </h3>
                        <div className="flex items-center mt-2 gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary-foreground"></span>
                          <p className="text-muted-foreground text-sm">
                            {item.institution}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* === Skills === */}
            <TabsContent value="skills" className="w-full" tabIndex={0}>
              <div className="flex flex-col gap-6 sm:gap-8 text-center xl:text-left">
                <div>
                  <h3 className="text-3xl xl:text-4xl font-bold">
                    {Skills[0].title}
                  </h3>
                  <p className="mt-2 font-semibold text-muted-foreground">
                    {Skills[0].description}
                  </p>
                </div>
                <ScrollArea className="max-h-[350px] sm:max-h-[400px]">
                  <ul className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-4 xl:gap-6">
                    {Skills[0].skillsList.map((item, index) => (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[90px] sm:h-[110px] xl:h-[150px] bg-muted rounded-xl flex flex-col justify-center items-center cursor-pointer transition-all outline-none">
                              <span className="text-3xl xl:text-7xl transition-all">
                                {<item.icon />}
                              </span>
                              <span className="text-xs sm:text-sm xl:hidden mt-2 text-muted-foreground">
                                {item.name}
                              </span>
                            </TooltipTrigger>
                            <TooltipContent
                              side="top"
                              className="hidden xl:block"
                            >
                              <span className="font-semibold">{item.name}</span>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}
