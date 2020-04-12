import React from "react";
import "./Project.scss";

const Project = ({ getReactProjects, projectCategoryId, projectId, img, title, desc, githubUrl, demoUrl}) => (
  <div className="project-card">
    <img src={img} alt="project" />
    <h3>{title}</h3>
    <p>{desc}</p>
    <a href={githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
    <a href={demoUrl} target="_blank" rel="noopener noreferrer">Demo</a>
  </div>
);

export default Project;