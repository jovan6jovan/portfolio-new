import React, { useState, useEffect } from "react";
import { fetchProjects } from "./fetchProjects";
import ReactProjects from "./ReactProjects";
import VanillaProjects from "./VanillaProjects";
import WordPressProjects from "./WordPressProjects";
import "./Projects.scss";

const Projects = () => {
  const [id, setId] = useState("vanilla");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects(setProjects);
  }, []);

  const onHeadingClick = (e) => {
    setId(e.target.id);
  };

  return (
    <>
      <ul className="projects-categories">
        <li
          className="projects-categories__heading"
          id="vanilla"
          onClick={onHeadingClick}
        >
          Vanilla JS
        </li>
        <li
          className="projects-categories__heading"
          id="react"
          onClick={onHeadingClick}
        >
          React
        </li>
        <li
          className="projects-categories__heading"
          id="wordpress"
          onClick={onHeadingClick}
        >
          WordPress
        </li>
      </ul>

      <div className="projects-grid">
        {id === "vanilla" && <VanillaProjects projects={projects} />}
        {id === "react" && <ReactProjects projects={projects}  />}
        {id === "wordpress" && <WordPressProjects projects={projects} />}
      </div>
    </>
  );
};

export default Projects;
