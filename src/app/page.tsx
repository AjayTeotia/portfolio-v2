import { ThemeToggle } from "@/components/theme/theme-toggle";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href="/about">About</Link>

      <ThemeToggle />
    </>
  );
}
