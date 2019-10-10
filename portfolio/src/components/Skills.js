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
              <img className="avatar" src="https://lh3.googleusercontent.com/j4adCneorPBKAwdc6OpFaWEgXRIFMko1ifOqCZHtTN0arepFJUXY_fwO9Xe4XkUpozdAzKs2aRVioUSkN0lm99U60T3RNLlsgc1cYV3IxvpqnMk3qwsAujbbpJUnoc4NbRuTqTi4_huSPJxOCbqcG-NtT5STHDDfxvNV1P8SoXqaLdyPn-mF-YuwY1R9aaTfpEaVSqEkJgF24xoqeoYOUM_sDu8dKadQ3EQ0HA6S_K43F3Qi8Sh5T-WTWP7aMezv3jsYhlYeLp3tITLdfH0N8DdutkxMnzyYmaP5cLDdW8-xGALWSQPlmeAJZA4ZwEVpSy_Ft6wFVjqdOIyRM-7eSlzUDUTvRBwpc_iE3iK0hwsOjZeki09lqALri0gckzttNpZH2ej3W0Q97qvc28Kw5q3yJDcV1npJFKY2Koe5nPo5W66imnGmqunjiNcHv2YCNQqjS_SQLF8-dFPmoH_ReNmqOYLgYk5GBPUZmVKVaz6nFu8gU3WgX3oCe_iDmegpKuFPuXY06Gxrl2ayNkalzsDJniQVx-zOeMdPOKy8MBcTjZ3wPh5AvzKiJabAiNRMaWv6G1Y49iB___wjiJp_pG4ABXmR_SBAR6j0gHqh7-mNmaFc7jTFVPMwNBbInbtkNHxk8bravw2zmKSdfEIZKeLkr7NFFdR0kVd3fcASjSK9ZXoOEdBDKSBh-P6MfgculA8hW4dSJGY8flL9EnRzMTQlOCTRvH-29PrDi5Ilo2DVrT6t=w668-h890-no"></img>
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