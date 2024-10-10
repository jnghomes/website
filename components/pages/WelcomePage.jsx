import React from "react";
import Heading from "../shared/Heading";
import VideoCard from "../shared/VideoCard";
import * as motion from "framer-motion/client";

const welcomePageParagraphsVideos = [
  {
    sl: 1,
    title: "Uniqueness",
    content: `JNG Homes is a name synonymous with elegance, renowned for creating stunning residences that leave a lasting impression. Each home we craft is a testament to the transformative power of beauty, where every detail tells a story of sophistication and style.
    We've embraced a fresh perspective on refinement, designing exquisite living spaces tailored for those who appreciate the finer things in life. With JNG Homes, you’re not just acquiring a house; you’re stepping into a world where elegance meets comfort, and beauty resonates in every corner. Welcome to a home that reflects your unique essence, where timeless design and unparalleled craftsmanship converge.
    "`,
  },
  {
    sl: 2,
    title: "Trustworthy",
    content: `At JNG Homes, we don’t just build houses; we craft dreams with unwavering integrity and a commitment to excellence. Our vision is clear and uncompromising, grounded in honesty that flows through every conversation, pricing decision, and material choice we make.
    Our team isn’t just here to meet standards; we set them. With a passion for exceptional service and an unparalleled level of care, we treat each project as a unique journey, ensuring that your vision comes to life with the utmost precision. At JNG Homes, we believe that a home is more than just a structure—it’s a reflection of who you are, built on a foundation of trust and dedication. Join us in creating spaces that inspire and elevate the everyday.
    `,
  },
  {
    sl: 3,
    title: "Pleasurable",
    content: `At JNG Homes, every experience is a delightful journey, uniquely crafted to reflect your aspirations. Each detail is a carefully curated masterpiece, featuring generous proportions and set in the most sought-after locales. We take pride in wearing the badge of honour as a real estate firm that embraces every facet of your home-buying adventure.
    With us, you’re not just finding a property; you’re discovering a lifestyle. Our commitment to excellence shines through in every interaction, ensuring that your path to your dream home is as pleasurable as it is seamless. Welcome to JNG Homes, where your vision becomes our mission, and every moment is designed to inspire.
    `,
  },
];

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
          return <VideoCard key={item.sl} index={item.sl} title={item.title} content={item.content}></VideoCard>;
        })}
      </div>
    </div>
  );
}

export default WelcomePage;
