import React from 'react'
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

function SubHeading({text}) {
  return (
    <motion.h2
    variants={titleVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-primaryText">
      {text}
    </motion.h2>
  )
}

export default SubHeading