import React from "react";
import Heading from "../shared/Heading";
import Card from "../shared/Card";
const welcomePageProjects = [
  {
    sl: 1,
    title: "GP Nalini Grandeur",
    content: `Welcome to a place where a plush lifestyle awaits you to embrace you love and peace. A place where you will enjoy every moment with glory. GP Nalini Grandeur is a heavenly tale of 4 storeyed apartment situated near to Biju pattanaik International Airport, Bhubaneswar. Designed for ample light and ventilation.`,
  },
  {
    sl: 2,
    title: "GP Platinum",
    content: `A landmark for luxury lifestyle, where we delivered specious 3 BHK Vastu compliant flats. This is a 3-storey apartment established near to KIIT Square. The best part of this project is, we just completed this project in 10 months only.`,
  },
  {
    sl: 3,
    title: "Almo Residency",
    content: `This is a Turnkey construction project, we delivered with our best efforts and qualities. This project is situated in AIIMS Nagar Patrapada, Bhubaneswar. This is a 5-storey apartment with 20 units of 2 BHK and 3 BHK Flats. Total Built up area of this project is 28,000 sq.ft.`,
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
