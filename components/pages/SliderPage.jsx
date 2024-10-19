"use client";
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import * as motion from "framer-motion/client";
import Image from "next/image";

function SliderPage({sliderImages}) {
  const [hasAnimated, setHasAnimated] = useState(false); // State to track animation
  const sliderRef = useRef(null); // Create a ref for the slider container

  const imageVariants = {
    hidden: {
      clipPath: "circle(0% at 50% 50%)", // Initial state (hidden)
    },
    visible: {
      clipPath: "circle(100% at 50% 50%)", // Final state (fully visible)
      transition: {
        duration: 1,
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

  // Effect to handle animation triggering
  useEffect(() => {
    const handleScroll = () => {
      if (sliderRef.current) { // Check if the sliderRef is available
        const rect = sliderRef.current.getBoundingClientRect();
        // Check if the slider is in the viewport
        if (rect.top <= window.innerHeight && rect.bottom >= 0 && !hasAnimated) {
          setHasAnimated(true); // Set animation state to true
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasAnimated]);

  return (
    <div className="flex flex-col gap-8 py-16">
      <div ref={sliderRef} className="slider-container"> {/* Attach ref to the slider container */}
        <Slider {...settings}>
          {sliderImages?.map((item, index) => (
            <div key={index} className="p-4"> {/* Add padding here to create space between slides */}
              <motion.div
                className="w-full aspect-video bg-secondaryText rounded-2xl overflow-hidden"
                variants={imageVariants}
                initial="hidden"
                animate={hasAnimated ? "visible" : "hidden"} // Animate based on the state
              >
                <Image
                  src={item}
                  layout="fill"
                  style={{ objectFit: "cover" }}
                  alt={`Slide ${index}`}
                />
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default SliderPage;
