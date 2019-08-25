import React from "react";
import Projects from "./Projects";
import projectData from "../../data/project-data";

class ProjectList extends React.Component {
  render() {
    const projects = projectData;
    return (
      <div>
        <h1>Projects</h1>
        {projects.map(project => (
          <Projects projects={project} key={project.id} />
        ))}
      </div>
    );
  }
}

export default ProjectList;
