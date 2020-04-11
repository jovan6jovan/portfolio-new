import React from "react";
import { Switch, Route } from "react-router-dom";
import VanillaProjects from "../Projects/VanillaProjects";
import ReactProjects from "../Projects/ReactProjects";
import WordPressProjects from "../Projects/WordPressProjects";

const ProjectsRoutes = () => (
  <Switch>
    <Route path="/vanilla" component={VanillaProjects} />
    <Route path="/react" component={ReactProjects} />
    <Route path="/wordpress" component={WordPressProjects} />
  </Switch>
);

export default ProjectsRoutes;
