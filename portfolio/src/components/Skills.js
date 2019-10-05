import React from 'react';
import '../scss/main.scss';
import avatar from "../assets/avatar.jpeg";
//need to build out graph types
//pass props of graphs bar, pie line
//build buttons that switches graph type
//Map state to props with new mission statment
//eventually this should come from json.
const Skills = () => {
    return (
      <div className="skills">
  
        <div className="skills-graph">
        <div className="graph"><span></span></div>
        <li className="front-end"><span>React</span></li>
        <li className="front-end"><span>Redux</span></li>
        <li className="back-end"><span>Node.js</span></li>
        <li className="back-end"><span>Express</span></li>
        <li className="front-end"><span>Java Script</span></li>
        <li className="back-end"><span>Ruby</span></li>
        <li className="back-end"><span>Rails</span></li>
        <li className="back-end"><span>PostgreSQL</span></li>
        <li className="back-end"><span>MongoDB</span></li>
   
        </div>
        <div className="skills-info">
      
        <div className="circle">
          <img className="avatar" src={avatar}></img>
          </div>
          <h3>Who Am I?</h3>
          <p>Comic lover and Artist turned software developer.My passion in coding lies in creating dynamic full stack applications using Node.js with React and Redux. Never wanting to limit myself, I prioritize being a lifelong learner and pursuing new technologies and methodologies. Currently, I am an instructor for adults looking to pivot their careers to software development. My focus is teaching the fundamentals of object oriented programming and full stack development.</p>
        </div>
      </div>
    );
  }

export default Skills