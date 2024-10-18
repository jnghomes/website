import React from "react";
import Heading from "../shared/Heading";
import VideoCard from "../shared/VideoCard";
import * as motion from "framer-motion/client";
import { welcomePageParagraphsVideos } from "@/utils/constants";

function WelcomePage() {
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
    <div className="flex flex-col gap-8 py-16">
      <Heading text="Welcome to JNG Homes"></Heading>
      <div class="columns-1 md:columns-2 text-sm/relaxed text-gray-500 text-justify">
        <motion.p variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          Founded in 2003 as a turnkey contractor, JNG Homes Private Limited has now entered the real estate industry under the
          leadership of Mr. Gouranga Chandra Nayak, a veteran Civil Contractor. We are known for our expertise in making
          extraordinary homes and our commitment to building not just apartments, but thriving communities. At JNG Homes, we are
          dedicated to constructing exceptional living spaces that go beyond conventional norms while upholding environmental
          consciousness. Our approach includes integrating eco-friendly materials, innovative technologies, and sustainable
          practices into every project. We prioritize solar power, rainwater harvesting, waste management systems, EV charging
          infrastructure, and ample green spaces to minimize our ecological footprint. As a prominent contender in the real estate
          development industry, JNG Homes sets itself apart through unwavering dedication and a commitment to sustainability. With
          each project, we strive to exceed expectations, redefine industry standards, and inspire others to follow our lead.
        </motion.p>
      </div>
      <div className="flex flex-wrap gap-12 w-[100%] justify-center">
        {welcomePageParagraphsVideos.map((item) => {
          return <VideoCard key={item.sl} index={item.sl} title={item.title} content={item.content} videoURL={item.videoURL} videoPoster={item.videoPoster}></VideoCard>;
        })}
      </div>
    </div>
  );
}

export default WelcomePage;
