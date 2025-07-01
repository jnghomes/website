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
      const findProject = welcomePageProjects.find((project) => project.url === splitPath[2].toLowerCase());
      setCurrentProject(findProject);
    }
  }, [pathname]);

  const handleDownload = (brochure) => {
    const link = document.createElement("a");
    link.href = `/${brochure}.pdf`; // URL to your file
    link.download = `${brochure}.pdf`; // Suggested file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
  // href={`/public/${currentProject.brochure}.pdf`} download={`${currentProject.brochure}.pdf`}
  return (
    <>
      <div className="flex flex-col">
        <div className="relative h-[60vh] bg-primaryAccent overflow-hidden">
          <Image src={currentProject.mainImageURL} layout="fill" className="object-cover" alt={currentProject.title} />
        </div>
        <div className="flex flex-col items-start justify-center px-8 md:px-0 md:max-w-[80vw] mx-auto mt-8">
          <div className="flex items-center justify-between w-full">
            <SubHeading text={currentProject.title} />
            {currentProject.brochure && (
              <button class="Download-button" onClick={() => handleDownload(currentProject.brochure)}>
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="20" viewBox="0 0 640 512">
                  <path
                    d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z"
                    fill="white"
                  ></path>
                </svg>
                <span>Download Brochure</span>
              </button>
            )}
          </div>
          <motion.p
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-2xl/relaxed text-gray-500 text-justify"
          >
            {currentProject.content}
          </motion.p>
        </div>
      </div>

      <div className="w-full px-8 md:px-0 md:max-w-[80vw] mx-auto flex flex-col gap-12">
        {/* <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flx-col lg:flex-row gap-4 justify-center items-center flex-wrap"
        >
          <div className="aspect-[4/5] w-2/5 lg:w-1/3 rounded-lg bg-secondaryText"></div>
          <div className="aspect-[4/5] w-2/5 lg:w-1/3 rounded-lg bg-secondaryText"></div>
        </motion.div> */}
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-8 mt-16">
          <SubHeading text="Information"></SubHeading>
          <div className="text-2xl/relaxed text-gray-500 text-justify lg:w-3/5">
            <div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="scroll-m-20 pb-2 text-2xl font-semibold tracking-tight first:mt-0 text-primaryText"
            >
              {currentProject.type + " "}
              <span className="text-2xl/relaxed text-gray-500 text-justify lg:w-3/5">Spacious Residences</span>
            </div>
            <div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="scroll-m-20 pb-2 text-2xl font-semibold tracking-tight first:mt-0 text-primaryText"
            >
              {currentProject.units + " "}
              <span className="text-2xl/relaxed text-gray-500 text-justify lg:w-3/5">Beautifully Designed Apartments</span>
            </div>
            <div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="scroll-m-20 pb-2 text-2xl font-semibold tracking-tight first:mt-0 text-primaryText"
            >
              {currentProject.area + " "}
              <span className="text-2xl/relaxed text-gray-500 text-justify lg:w-3/5">of Living Space</span>
            </div>
          </div>
        </div>
        <SliderPage sliderImages={currentProject.sliderImages}></SliderPage>
      </div>
    </>
  );
}

export default page;
