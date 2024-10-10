"use client";
import LandingVideo from "@/components/pages/LandingVideo";
import Projects from "@/components/pages/Projects";
import SliderPage from "@/components/pages/SliderPage";
import WelcomePage from "@/components/pages/WelcomePage";
import { useLoading } from "@/utils/context/LoadingContext";
import * as motion from "framer-motion/client";
import Heading from "@/components/shared/Heading";
import Testimonial from "@/components/shared/Testimonial";

export default function Home() {

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
    <>
      <LandingVideo></LandingVideo>
      <div className="w-full px-8 md:px-0 md:max-w-[80vw] mx-auto">
        <WelcomePage></WelcomePage>
        <Projects></Projects>
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
        <SliderPage></SliderPage>
        <Testimonial></Testimonial>
      </div>
    </>
  );
}
