import React from "react";
import * as motion from "framer-motion/client";

function VideoCard({ index, title, content, videoURL, videoPoster }) {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20, // Slide up effect
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5,
        ease: [0.2, 0.6, 0.4, 1],
      },
    },
  };
  return (
    <motion.article
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={
        index % 2 !== 0
          ? "flex flex-col justify-between lg:flex-row gap-4 w-[100%] "
          : "flex flex-col justify-between lg:flex-row-reverse gap-4 w-[100%]"
      }
    >
      <div className="aspect-[16/9] w-[100%] lg:w-[45%] bg-secondaryText rounded-md">
        <div className="flex justify-center items-center w-full bg-primaryccent">
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            poster={videoPoster}
            loading="lazy"
          >
            <source src={videoURL} type="video/mp4" media="(min-width: 1200px)" />
            <source src={videoURL} type="video/mp4" media="(min-width: 421px)" />
            <source src={videoURL} type="video/mp4" media="(max-width: 420px)" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className="flex flex-col gap-2 w-[100%] lg:w-[45%]">
        <h4 className="scroll-m-20 text-2xl font-semibold tracking-tight text-primaryText hover-target">{title}</h4>
        <span className="w-64 h-[4px] bg-primaryAccent"></span>
        <p className="text-sm/relaxed text-gray-500">{content}</p>
      </div>
    </motion.article>
  );
}

export default VideoCard;
