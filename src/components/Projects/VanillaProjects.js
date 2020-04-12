import React from "react";
// import Project from "./Project";

const VanillaProjects = () => {
  // const [activeTab, setActiveTab] = useState(0);

  const fetchProjects = () => {
    fetch('./projects.json')
    .then(res => res.json())
    .then(projects => console.log(projects.map(project => project.projectCategoryId)));
  }

  return (
    <>
      Hi from VanillaJS Projects
      {fetchProjects()}
    </>
  );
};

export default VanillaProjects;
