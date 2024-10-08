"use client";
import { sass1NavLinks } from "@/constants/navLinks";
import useWindowSize from "@/hooks/use-window-size";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const windowSize = useWindowSize();
  const [currentWindow, setcurrentWindow] = useState<{
    width: number;
    height: number;
  }>({ width: windowSize.width, height: windowSize.height });

  useEffect(() => {
    setcurrentWindow(windowSize);
  }, [windowSize]);

  return (
    <header className="bg-black">
      <div className="container ">
        <div className="relative py-4 flex justify-between items-center">
          <div className="relative">
            <div className="absolute w-full h-full top-2 bottom-0 bg-[linear-gradient(to_right,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] blur-md " />

            <Image
              src="/assets/images/logosass.png"
              alt="Brand Logo"
              className="w-12 h-12 bg-black rounded relative"
              width={48}
              height={48}
            />
          </div>
          {currentWindow.width >= 768 ? (
            <nav className="flex gap-6 items-center">
              {sass1NavLinks.map((link) => (
                <Link
                  key={link}
                  href={"#"}
                  className="text-white text-opacity-60 hover:text-opacity-100 transition-all duration-700"
                >
                  {link}
                </Link>
              ))}
              <Button className="bg-white text-black text-opacity-50 hover:bg-white hover:text-black hover:text-opacity-100">
                Get for free
              </Button>
            </nav>
          ) : (
            <MobileMenu />
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
