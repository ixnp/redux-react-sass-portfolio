import React from 'react';
import { connect } from 'react-redux'
import ProjectCard from './ProjectCard'
import '../scss/main.scss';

const Project = ({projectsItems}) => {
  console.log(projectsItems.projects);
    return (
  
      <div className="project">
        {projectsItems.projects.map(item => {
          
         return <ProjectCard key={Math.random(100)} project={item}></ProjectCard>
     })}
    
      </div>
    );
  }

const mapStateToProps = (state) => {
  return { projectsItems: state.projectsItems };
}

export default connect(mapStateToProps)(Project)