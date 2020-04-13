import React from "react";
import Project from "./Project";

const ReactProjects = ({ projects }) => {
  return (
    <>
      {projects.map((project) =>
        project.projectCategoryId === "react" ? (
          <Project
            key={project.projectId}
            img={project.img}
            title={project.title}
            desc={project.desc}
            githubUrl={project.githubUrl}
            demoUrl={project.demoUrl}
          />
        ) : null
      )}
    </>
  );
};

export default ReactProjects;
