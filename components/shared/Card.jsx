import Link from "next/link";
import React from "react";
import * as motion from "framer-motion/client";

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
      delay:0.5,
      ease: [0.2, 0.6, 0.4, 1],
    },
  },
};

const hoverEffect = {
  scale: 1.05, // Scale up effect on hover
};

function Card() {
  return (
    <motion.article
      className="flex flex-col gap-4 w-64"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }} // Animation plays only once
    >
      <motion.div
        className="aspect-[4/5] w-[100%] bg-gray-100 rounded-md"
        whileHover={hoverEffect} // Apply scale effect to this div on hover
        transition={{ duration: 0.3 }} // Transition effect for the scale
      ></motion.div>

      <div className="flex flex-col gap-2">
        <h4 className="scroll-m-20 text-2xl font-semibold tracking-tight text-black">
          Title
        </h4>

        <p className="line-clamp-3 text-sm/relaxed text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
          dolores, possimus pariatur animi temporibus nesciunt praesentium
          dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus
          soluta, voluptates neque explicabo tempora nisi culpa eius atque
          dignissimos. Molestias explicabo corporis voluptatem?
        </p>
        <Link
          href="#"
          className="relative inline-block group text-primaryAccent uppercase"
        >
          Know More
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-text transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </Link>
      </div>
    </motion.article>
  );
}

export default Card;
