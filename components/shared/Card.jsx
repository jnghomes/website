import Link from "next/link";
import React from "react";
import * as motion from "framer-motion/client";
import Image from "next/image";

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

const hoverEffect = {
  scale: 1.05, // Scale up effect on hover
};

function Card({ index, title, content, url, mainImageURL }) {
  return (
    <motion.article
      className="flex flex-col gap-4 w-64"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <Link href={`/projects/${url}`}>
        <motion.div
          className="aspect-[4/5] w-[100%] bg-secondaryText rounded-md relative"
          whileHover={hoverEffect}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={mainImageURL}
            layout="fill"
            style={{ objectFit: "cover" }}
            alt={title}
            className="rounded-md"
            // quality={5}
          />
        </motion.div>
      </Link>

      <div className="flex flex-col gap-2">
        <h4 className="scroll-m-20 text-2xl font-semibold tracking-tight text-primaryText">{title}</h4>

        <p className="line-clamp-3 text-xl/relaxed text-gray-500">{content}</p>
        <Link href={`projects/${url}`} className="relative inline-block group text-primaryAccent uppercase">
          Know More
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-text transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </Link>
      </div>
    </motion.article>
  );
}

export default Card;
