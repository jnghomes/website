"use client";
import { links } from "@/utils/constants"; // Ensure 'links' is defined correctly in this path
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; // Use router to get the current path
import { motion } from "framer-motion"; // Import motion from framer-motion
import ThemeToggle from "./ThemeToggle";
import logo from "../../public/images/logo.png";
import Image from "next/image";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);
  const path = usePathname(); // Use router to get the current path

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > 50 && currentScrollY > lastScrollY) {
      setShowNavbar(false); // Hide navbar when scrolling down
    } else {
      setShowNavbar(true); // Show navbar when scrolling up
    }
    setLastScrollY(currentScrollY); // Update lastScrollY with the current scroll position
  };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [lastScrollY]);

  // useEffect(() => {
  //   document.body.style.overflow = isOpen ? "hidden" : "auto";
  // }, [isOpen]);

  // Animation variants for tab items
  const tabVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: (index) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { delay: index * 0.2, duration: 1 },
    }),
    exit: {
      opacity: 0,
      scale: 0.9,
      y: 20,
      transition: { ease: "easeInOut" },
    },
  };

  return (
    <>
      <nav
        className={`glass fixed top-0 left-0 w-full z-50 bg-background text-primaryText transition-transform duration-300 ease-in-out ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="w-full px-4 md:px-0 md:max-w-[80vw] mx-auto">
          <div className="flex justify-between items-center p-4">
            <Link href={`/`} className="relative inline-block group text-primaryAccent uppercase">
              <div className="text-2xl font-bold">
                <Image src={logo} width={72} height={72} alt="Logo" />
              </div>
            </Link>
            <div className="flex gap-8">
              <ThemeToggle />
              <div id="nav-icon3" className={isOpen ? "open" : ""} onClick={() => setIsOpen((prev) => !prev)}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        className={`fixed top-0 left-0 w-full h-full bg-background z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        initial={{ x: "100%" }} // Initial position for the sliding animation
        animate={{ x: isOpen ? 0 : "100%" }} // Slide in/out based on isOpen
        transition={{ duration: 0.3 }}
      >
        <ul className="flex flex-col items-center justify-center h-full text-primaryText space-y-8">
          {links?.map((item, index) => {
            const isActive = path === item.link; // Check if current route matches the link
            return (
              <motion.li
                key={index}
                className="relative text-4xl group"
                variants={tabVariants}
                initial="hidden"
                animate={isOpen ? "visible" : "exit"} // Animate based on isOpen state
                custom={index} // Pass the index to the variants
              >
                <Link
                  href={item.link}
                  onClick={() => setIsOpen(false)}
                  className={`inline-block ${isActive ? "text-primaryText" : ""} transition-colors duration-300`}
                >
                  {item.name}
                </Link>
                <span
                  className={`absolute bottom-0 left-0 h-[4px] bg-primaryAccent transition-all duration-300 ease-in-out ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </motion.li>
            );
          })}
        </ul>
      </motion.div>
    </>
  );
}

export default Navbar;
