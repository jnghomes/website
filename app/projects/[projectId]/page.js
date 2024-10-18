"use client";
import { useState, useEffect } from "react";
import SliderPage from "@/components/pages/SliderPage";
import SubHeading from "@/components/shared/SubHeading";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { welcomePageProjects } from "@/utils/constants";

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
  return (
    <>
      <div className="w-screen h-screen bg-primaryAccent">
        <Image src={currentProject.mainImageURL} layout="fill" style={{ objectFit: 'cover' }} alt={currentProject.title} />
      </div>
      <div className="w-full px-8 md:px-0 md:max-w-[80vw] mx-auto">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-16 mt-4">
          <SubHeading></SubHeading>
          <p className="text-sm/relaxed text-gray-500 text-justify lg:w-3/5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam alias ipsam modi ipsum eos assumenda dolorum, nemo
            ea ullam doloribus mollitia reprehenderit inventore porro. Doloremque nobis dolore officia expedita tenetur?
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 justify-center items-center mt-4">
          <div className="aspect-[4/5] w-3/5 lg:w-1/3 rounded-lg bg-secondaryText"></div>
          <div className="aspect-[4/5] w-3/5 lg:w-1/3 rounded-lg bg-secondaryText"></div>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-16 mt-4">
          <SubHeading></SubHeading>
          <p className="text-sm/relaxed text-gray-500 text-justify lg:w-3/5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam alias ipsam modi ipsum eos assumenda dolorum, nemo
            ea ullam doloribus mollitia reprehenderit inventore porro. Doloremque nobis dolore officia expedita tenetur?
          </p>
        </div>
        <SliderPage></SliderPage>
      </div>
    </>
  );
}

export default page;
