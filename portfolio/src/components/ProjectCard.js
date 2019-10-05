import React from 'react';
import { connect } from 'react-redux'
import '../scss/main.scss';

const ProjectCard = ({project}) => {
  console.log(project)
    return (
      <div className="projectcard">
        <div className="card-sectionOne">
          <h3 className="card-sectionOne-title">{project.name}</h3>
          <h4 className="card-sectionOne-subheader">{project.role}</h4>
          <h4 className="card-sectionOne-subheader">{project.technologies}</h4>
          <p className="card-sectionOne-paragraph">{project.description}</p>
        </div>
        <div className="card-sectionTwo">
          <img src={project.img.big}></img>
        </div>
      </div>
    );
  }

  const mapStateToProps = (state) => {
    return { project: state.projectsItems.projects[state.projectsItems.index] };
  }

export default connect(mapStateToProps)(ProjectCard);