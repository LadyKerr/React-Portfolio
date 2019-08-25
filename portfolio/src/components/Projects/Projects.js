import React from "react";
import "./project.css";

const Projects = props => {
  const { projects } = props;
  console.log(projects);
  return (
    <div class="card">
      <div class="card-image waves-effect waves-light">
        <img
          class="activator"
          src={projects.projectImage}
          alt="project image"
        />
      </div>
      <div class="card-content">
        <span class="card-title activator grey-text text-darken-4">
          {projects.title}
          <p>Role: {projects.role}</p>
          <i class="material-icons right">more_vert</i>
        </span>
        <div>
          <a
            href={projects.projectURL}
            className="waves-effect waves-light btn-small"
          >
            Live Demo
          </a>
          <a
            href={projects.githubRepo}
            className="waves-effect waves-light btn-small"
          >
            Github Repo
          </a>
        </div>
      </div>
      <div class="card-reveal">
        <span class="card-title grey-text text-darken-4">
          {projects.title}
          <i class="material-icons right">close</i>
        </span>
        <p>{projects.description}</p>
        <p>Technologies used: {projects.technologies}</p>
      </div>
    </div>
  );
};

export default Projects;
