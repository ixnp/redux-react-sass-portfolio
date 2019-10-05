import React from 'react';
import '../scss/main.scss';

const ProjectCard = ({project}) => {
  console.log(project)
    return (
      <div className="projectcard">
        <div className="card-sectionOne">
          <h3 className="card-sectionOne-title">{project.name}</h3>
          <h4 className="card-sectionOne-subheader">{project.role}</h4>
          <h4 className="card-sectionOne-subheader">{project.technologies}</h4>
        </div>
        <div className="card-section-two">
        <img src={project.img.big} ></img>
        </div>
      </div>
    );
  }

export default ProjectCard