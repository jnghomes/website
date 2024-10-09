import React from "react";
import Heading from "../shared/Heading";
import VideoCard from "../shared/VideoCard";
import * as motion from "framer-motion/client";

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
      <Heading text="Welcome to ###"></Heading>
      <div class="columns-1 md:columns-2 text-sm/relaxed text-gray-500 text-justify">
        <motion.p
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          scelerisque ipsum non mauris condimentum, nec blandit libero
          fermentum. Curabitur non nisi libero. Donec consectetur nisi ut diam
          placerat, et convallis nunc gravida. Etiam ullamcorper suscipit
          mauris, ac fermentum eros viverra in. Proin convallis arcu id libero
          aliquet, ut dapibus turpis ultricies. Vivamus bibendum est nec eros
          vehicula, ut vehicula felis dictum. Vestibulum volutpat consequat
          lacus, id vehicula mi aliquet nec.
        </motion.p>
      </div>
      <div className="flex flex-wrap gap-12 w-[100%] justify-center">
        {[1, 2, 3].map((item) => {
          return <VideoCard key={item} index={item}></VideoCard>;
        })}
      </div>
    </div>
  );
}

export default WelcomePage;
