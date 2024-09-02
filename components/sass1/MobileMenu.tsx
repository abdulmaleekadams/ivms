import { sass1NavLinks } from "@/constants/navLinks";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          size="icon"
          variant="outline"
          className="border bg-transparent border-opacity-30 border-white group"
        >
          <Menu className="text-white group-hover:text-black" />
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-black border-0">
        <nav className="flex flex-col py-10 gap-6">
          {sass1NavLinks.map((link) => (
            <SheetClose className="w-full " asChild key={link}>
              <Link
                href={"#"}
                className="text-white text-opacity-60 hover:text-opacity-100 transition-all duration-700"
              >
                {link}
              </Link>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
