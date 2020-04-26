import React, { useState, useEffect } from "react";
import { FaJs, FaReact, FaWordpress } from "react-icons/fa";
import { fetchProjects } from "./fetchProjects";
import Project from "./Project";
import "./Projects.scss";

const Projects = () => {
  const [id, setId] = useState("vanilla");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects(setProjects);
  }, []);

  const onHeadingClick = (e) => {
    setId(e.target.id);
    let current = document.getElementsByClassName("active-tab");
    current[0].className = current[0].className.replace(" active-tab", "");
    e.target.className += " active-tab";
  };

  const renderProjects = (projectCategory) => (
    projects.map((project) =>
      project.projectCategoryId === projectCategory ? (
        <Project
          key={project.projectId}
          imgSrc={project.imgSrc}
          title={project.title}
          desc={project.desc}
          githubUrl={project.githubUrl}
          demoUrl={project.demoUrl}
        />
      ) : null
    )
  )

  return (
    <>
      <ul className="projects-categories">
        <li
          className="projects-categories__heading active-tab"
          id="vanilla"
          onClick={onHeadingClick}
        >
          <FaJs className="icon" />
          Vanilla JS
        </li>
        <li
          className="projects-categories__heading"
          id="react"
          onClick={onHeadingClick}
        >
          <FaReact className="icon" />
          React
        </li>
        <li
          className="projects-categories__heading"
          id="wordpress"
          onClick={onHeadingClick}
        >
          <FaWordpress className="icon" />
          WordPress
        </li>
      </ul>

      <div className="projects-grid">
        {id === "vanilla" && renderProjects("vanilla")}
        {id === "react" && renderProjects("react")}
        {id === "wordpress" && renderProjects("wordpress")}
      </div>
    </>
  );
};

export default Projects;
