import React from 'react';
import { connect } from 'react-redux'
import { projectAction } from '../actions'
import ProjectCard from './ProjectCard'
import '../scss/main.scss';

const Project = (props) => {
  
    return (
      <div className="project">
        <div className="project-items">
          <ProjectCard/>

        <button className="btn btn-forward"
            onClick={() => props.projectAction(props.projectsItems.index)}
        >Next</button>
        </div>
      </div>

    );
  }


const mapStateToProps = (state) => {

  return { projectsItems: state.projectsItems };
}

export default connect(mapStateToProps,{ projectAction})(Project)