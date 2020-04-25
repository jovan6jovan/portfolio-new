import React from "react";
import { FaGithub, FaDesktop } from "react-icons/fa";
import "./Project.scss";

const Project = ({ imgSrc, title, desc, githubUrl, demoUrl}) => (
  <div className="project-card">
    <img src={imgSrc} alt="project" />
    <h3>{title}</h3>
    <p>{desc}</p>
    <a href={githubUrl} target="_blank" rel="noopener noreferrer">
      <FaGithub style={{marginRight: "0.35em"}} />
      GitHub
    </a>
    <a href={demoUrl} target="_blank" rel="noopener noreferrer">
      <FaDesktop style={{marginRight: "0.35em"}} />
      Demo
    </a>
  </div>
);

export default Project;
