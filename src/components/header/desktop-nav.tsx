import { NavLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "../theme/theme-toggle";

export function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-8 font-bold">
      {NavLinks.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          className={`${
            link.path === pathname && "text-primary border-b-2 border-primary"
          } hover:text-primary hover:border-b-2 hover:border-primary transition-all duration-200 capitalize`}
        >
          {link.name}
        </Link>
      ))}

      <ThemeToggle />
    </nav>
  );
}
