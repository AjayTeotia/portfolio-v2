"use client";

import { cn } from "@/lib/utils";
import { useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { DesktopNav } from "./desktop-nav";
import { MobileNav } from "./mobile-nav";

export function Header() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 10);
  });

  return (
    <header
      className={cn(
        "sticky top-0 z-50 py-8 xl:py-12 rounded-b-2xl p-4 bg-transparent left-0 right-0 transition-all duration-200 border-b border-transparent",
        isScrolled && "bg-background border-border"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-3xl font-extrabold tracking-tighter">
            ajay<span className="text-primary">.dev</span>
          </h1>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden xl:flex items-center gap-8">
          <DesktopNav />
        </div>

        {/* Mobile Nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
