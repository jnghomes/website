"use client";
import React from "react";
import Heading from "../shared/Heading";
import Slider from "react-slick";
import * as motion from "framer-motion/client";

function SliderPage() {
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

  const imageVariants = {
    hidden: {
      clipPath: "circle(0% at 50% 50%)", // Initial state (hidden)
    },
    visible: {
      clipPath: "circle(100% at 50% 50%)", // Final state (fully visible)
      transition: {
        duration: 1,
        delay:0.5,
        ease: "easeInOut",
      },
    },
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false,
  };

  return (
    <div className="flex flex-col gap-8 py-16">
      <Heading text="Slider text" />
      <div className="columns-1 md:columns-2 text-sm/relaxed text-gray-500 text-justify">
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
      <div className="slider-container">
        <Slider {...settings}>
          {[1, 2, 3, 4, 5].map((item) => (
            <motion.div
              key={item}
              className="w-full aspect-video bg-primaryAccent rounded-lg flex items-center justify-center"
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }} // Animation plays only once
            >
              <h1 className="text-black">{item}</h1>
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default SliderPage;
