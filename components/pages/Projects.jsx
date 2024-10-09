import React from "react";
import Heading from "../shared/Heading";
import Card from "../shared/Card";

const welcomePageProjects = [
  {
    sl: 1,
    title: "GP Nalini Grandeur",
    content: `JNG Homes is a name synonymous with elegance, renowned for creating stunning residences that leave a lasting impression. Each home we craft is a testament to the transformative power of beauty, where every detail tells a story of sophistication and style.
    We've embraced a fresh perspective on refinement, designing exquisite living spaces tailored for those who appreciate the finer things in life. With JNG Homes, you're not just acquiring a house; you're stepping into a world where elegance meets comfort, and beauty resonates in every corner. Welcome to a home that reflects your unique essence, where timeless design and unparalleled craftsmanship converge.
    "`,
  },
  {
    sl: 2,
    title: "GP Platinum",
    content: `At JNG Homes, we don't just build houses; we craft dreams with unwavering integrity and a commitment to excellence. Our vision is clear and uncompromising, grounded in honesty that flows through every conversation, pricing decision, and material choice we make.
    Our team isn't just here to meet standards; we set them. With a passion for exceptional service and an unparalleled level of care, we treat each project as a unique journey, ensuring that your vision comes to life with the utmost precision. At JNG Homes, we believe that a home is more than just a structure—it's a reflection of who you are, built on a foundation of trust and dedication. Join us in creating spaces that inspire and elevate the everyday.
    `,
  },
  {
    sl: 3,
    title: "Almo Residency",
    content: `At JNG Homes, every experience is a delightful journey, uniquely crafted to reflect your aspirations. Each detail is a carefully curated masterpiece, featuring generous proportions and set in the most sought-after locales. We take pride in wearing the badge of honour as a real estate firm that embraces every facet of your home-buying adventure.
    With us, you're not just finding a property; you're discovering a lifestyle. Our commitment to excellence shines through in every interaction, ensuring that your path to your dream home is as pleasurable as it is seamless. Welcome to JNG Homes, where your vision becomes our mission, and every moment is designed to inspire.
    `,
  },
];

function Projects() {
  return (
    <div className="flex flex-col gap-8 py-16">
      <Heading text="Our Projects"></Heading>
      <div className="flex flex-wrap gap-12 justify-cente">
        {welcomePageProjects.map((item) => {
          return <Card key={item.sl} index={item.sl} title={item.title} content={item.content}></Card>;
        })}
      </div>
    </div>
  );
}

export default Projects;
