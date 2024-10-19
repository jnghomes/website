"use client";
import { useState, useEffect } from "react";
import SliderPage from "@/components/pages/SliderPage";
import SubHeading from "@/components/shared/SubHeading";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { sliderImages, welcomePageProjects } from "@/utils/constants";
import * as motion from "framer-motion/client";

function page() {
  const pathname = usePathname();
  const [currentProject, setCurrentProject] = useState({});
  useEffect(() => {
    const splitPath = pathname.split("/");
    if (splitPath[1] === "projects") {
      const findProject = welcomePageProjects.find(
        (project) => project.url === splitPath[2].toLowerCase()
      );
      setCurrentProject(findProject);
    }
  }, [pathname]);

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20, // Slide up effect
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.5,
        ease: [0.2, 0.6, 0.4, 1],
      },
    },
  };

  return (
    <>
      <div className="flex flex-col h-screen">
        
        <div className="relative h-[70vh] bg-primaryAccent overflow-hidden">
          <Image
            src={currentProject.mainImageURL}
            layout="fill"
            className="object-cover"
            alt={currentProject.title}
          />
        </div>
        <div className="flex flex-col items-start justify-center px-8 md:px-0 md:max-w-[80vw] mx-auto h-[30vh]">
          <SubHeading text={currentProject.title} />
          <motion.p
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-sm/relaxed text-gray-500 text-justify"
          >
            {currentProject.content}
          </motion.p>
        </div>
      </div>

      <div className="w-full px-8 md:px-0 md:max-w-[80vw] mx-auto flex flex-col gap-12">
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flx-col lg:flex-row gap-4 justify-center items-center flex-wrap"
        >
          <div className="aspect-[4/5] w-2/5 lg:w-1/3 rounded-lg bg-secondaryText"></div>
          <div className="aspect-[4/5] w-2/5 lg:w-1/3 rounded-lg bg-secondaryText"></div>
        </motion.div>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-16">
          <SubHeading text="Information"></SubHeading>
          <div className="text-sm/relaxed text-gray-500 text-justify lg:w-3/5">
            <div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="scroll-m-20 pb-2 text-2xl font-semibold tracking-tight first:mt-0 text-primaryText"
            >
              {currentProject.type + " "}
              <span className="text-sm/relaxed text-gray-500 text-justify lg:w-3/5">
                Spacious Residences
              </span>
            </div>
            <div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="scroll-m-20 pb-2 text-2xl font-semibold tracking-tight first:mt-0 text-primaryText"
            >
              {currentProject.units + " "}
              <span className="text-sm/relaxed text-gray-500 text-justify lg:w-3/5">
                Beautifully Designed Apartments
              </span>
            </div>
            <div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="scroll-m-20 pb-2 text-2xl font-semibold tracking-tight first:mt-0 text-primaryText"
            >
              {currentProject.area + " "}
              <span className="text-sm/relaxed text-gray-500 text-justify lg:w-3/5">
                of Living Space
              </span>
            </div>
          </div>
        </div>
        <SliderPage sliderImages={sliderImages}></SliderPage>
      </div>
    </>
  );
}

export default page;
