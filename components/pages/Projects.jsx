import React from "react";
import Heading from "../shared/Heading";
import Card from "../shared/Card";
import { welcomePageProjects } from "@/utils/constants";

function Projects() {
  return (
    <div className="flex flex-col gap-8 py-8">
      <Heading text="Our Projects"></Heading>
      <div className="flex flex-wrap gap-12 justify-cente">
        {welcomePageProjects.map((item) => {
          return (
            <Card
              key={item.sl}
              index={item.sl}
              title={item.title}
              content={item.content}
              url={item.url}
              mainImageURL={item.mainImageURL}
            ></Card>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
