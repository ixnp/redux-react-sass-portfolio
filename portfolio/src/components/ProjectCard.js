import React from 'react';
import { connect } from 'react-redux'
import { projectAction } from "../actions";
import '../scss/main.scss';

const ProjectCard = (props) => {
    return (

      <div className="project">
        <h2>PROJECTS</h2> 
        <div className="card-body">
        <div className="card-sectionOne">
          <h3 className="card-sectionOne-title">{props.project.name}</h3>
          <h4 className="card-sectionOne-subheader">{props.project.role}</h4>
          <h4 className="card-sectionOne-subheader">{props.project.technologies}</h4>
          <p className="card-sectionOne-paragraph">{props.project.description}</p>
          <button className="btn btn-forward"
            onClick={() => props.projectAction(props.index)}
          >Next</button>
        </div>
        <div className="card-sectionTwo">
          <img src={props.project.img.big}></img>
        </div>
        </div>
      </div>
    );
  }

  const mapStateToProps = (state) => {
    return { project: state.projectsItems.projects[state.projectsItems.index],
              index:state.projectsItems.index };
  }

export default connect(mapStateToProps, { projectAction })(ProjectCard);
