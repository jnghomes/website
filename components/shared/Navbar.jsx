"use client";
import { links } from "@/utils/constants"; // Ensure 'links' is defined correctly in this path
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; // Use router to get the current path

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);
  const path = usePathname(); // Use router to get the current path

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 bg-background text-white transition-transform duration-300 ease-in-out  ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="w-full px-4 md:px-0 md:max-w-[80vw] mx-auto">

        
        <div className="flex justify-between items-center p-4">
          <div className="text-2xl font-bold">Brand</div>

          <div id="nav-icon3" className={isOpen?"open":""} onClick={() => setIsOpen((prev) => !prev)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-background z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col items-center justify-center h-full text-white space-y-8">
          {links?.map((item, index) => {
            const isActive = path === item.link; // Check if current route matches the link
            return (
              <li key={index} className="relative text-4xl group">
                <Link
                  href={item?.link}
                  onClick={() => setIsOpen(false)}
                  className={`inline-block ${isActive ? "text-white" : ""}`} // Use inline-block for text width
                >
                  {item?.name}
                </Link>
                {/* Underline that only spans the text width */}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-primaryAccent transition-all duration-300 ease-in-out ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </li>
            );
          })}
        </ul>
        
      </div>
    </>
  );
}

export default Navbar;
