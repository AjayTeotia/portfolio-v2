import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavLinks } from "@/constants";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

export function MobileNav() {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <MenuIcon className="size-6" />
        </Button>
      </SheetTrigger>

      <SheetContent>
        <nav className="flex flex-col justify-center items-center gap-8 m-auto">
          {NavLinks.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={`${
                  link.path === pathname &&
                  "text-primary border-b-2 border-primary"
                } text-2xl hover:text-primary hover:border-b-2 hover:border-primary transition-all duration-200 capitalize`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
