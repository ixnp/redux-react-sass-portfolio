import React from 'react';
import '../scss/main.scss';
import avatar from "../assets/avatar.jpeg";
import ScrollTrigger from 'react-scroll-trigger';
//need to build out graph types
//pass props of graphs bar, pie line
//build buttons that switches graph type
//Map state to props with new mission statment
//eventually this should come from json.
class Skills  extends React.Component{
  state = {
    class:''
  }

  onEnterViewport = () => {
    this.setState({class:'moving'})
    
  }
  render(){
    return (
      <div className="skills">
     <div className="skills-inner">
        <div className="skills-graph">
        <ScrollTrigger className="heading"onEnter={this.onEnterViewport}>
          <h3>Stacks &amp; Technology</h3>
          </ScrollTrigger>
          <div className="graph"><span></span></div>
        <li className={this.state.class}><span>React</span></li>
        <li className={this.state.class}><span>Redux</span></li>
        <li className={this.state.class}><span>Node.js</span></li>
        <li className={this.state.class}><span>Express</span></li>
        <li className={this.state.class}><span>Java Script</span></li>
        <li className={this.state.class}><span>Ruby</span></li>
        <li className={this.state.class}><span>Rails</span></li>
        <li className={this.state.class}><span>PostgreSQL</span></li>
        <li className={this.state.class}><span>MongoDB</span></li>
   
        </div>
        <div className="skills-info">
      
        <div className="circle">
          <img className="avatar" src={avatar}></img>
          </div>
          <div className="skills-info-text">
          <h3>Who Am I?</h3>
          <p>Comic lover and Artist turned software developer.My passion in coding lies in creating dynamic full stack applications using Node.js with React and Redux. Never wanting to limit myself, I prioritize being a lifelong learner and pursuing new technologies and methodologies. Currently, I am an instructor for adults looking to pivot their careers to software development. My focus is teaching the fundamentals of object oriented programming and full stack development.</p>
          </div>
        </div>
        </div>
        
      </div>
      
    );
  }
}
export default Skills