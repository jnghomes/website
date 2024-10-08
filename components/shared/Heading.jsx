import React from "react";
import * as motion from "framer-motion/client";

const titleVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.2, 0.6, 0.4, 1],
    },
  },
};


function Heading({ text, color }) {
  return (
    <motion.h1
    variants={titleVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
      className={
        color
          ? "scroll-m-20 pb-2 text-4xl font-extrabold tracking-tight lg:text-5xl text-primaryText"
          : "scroll-m-20 pb-2 text-4xl font-extrabold tracking-tight lg:text-5xl text-primaryText"
      }
    >
      {text}
    </motion.h1>
  );
}

export default Heading;
