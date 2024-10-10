import React from "react";
import Heading from "../shared/Heading";
import Card from "../shared/Card";

function Projects() {
  return (
    <div className="flex flex-col gap-8 py-16">
      <Heading text="Our Projects"></Heading>
      <div className="flex flex-wrap gap-12 justify-cente">
        {[1, 2, 3, 4, 5, 6].map((item) => {
          return <Card projectId={item} key={item}></Card>;
        })}
      </div>
    </div>
  );
}

export default Projects;
