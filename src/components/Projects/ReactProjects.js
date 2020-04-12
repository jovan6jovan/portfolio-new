import React, { useState, useEffect } from "react";
import Project from "./Project";

const ReactProjects = () => {
  // const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState([]);

  async function fetchProjects() {
    // setLoading(true);
    const res = await fetch("./projects.json");
    res
      .json()
      .then((res) => setProjects(res))
      .catch((err) => console.log(err));
    // setLoading(false);
  }

  useEffect(() => {
    fetchProjects();
  }, []);

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
