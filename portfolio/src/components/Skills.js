import React from 'react';
import '../scss/main.scss';
import avatar from "../assets/avatar.jpeg";
//need to build out graph types
//pass props of graphs bar, pie line
//build buttons that switches graph type

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
          <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis interdum et felis sit amet accumsan. Nulla non mattis quam, ac varius eros. Nullam eu enim tincidunt, efficitur nulla sit amet, facilisis risus. Nunc fermentum massa non massa ornare ullamcorper. Aliquam id venenatis nulla, et rhoncus sem. Pellentesque quis nibh tincidunt turpis commodo sollicitudin. Quisque convallis, ex ut cursus condimentum, leo nisi molestie lacus, nec accumsan nunc arcu id ante. Nulla leo nunc, tempus nec nisi quis, molestie consequat enim. Nulla rutrum odio ac felis cursus imperdiet. Cras a hendrerit sapien. Phasellus bibendum imperdiet augue in lobortis. Maecenas massa sapien, fringilla a lectus sed, porta fermentum diam. Vivamus gravida eleifend massa, sit amet auctor leo dignissim eget. In eu ipsum dictum, tristique tortor a, iaculis mauris. Donec egestas, arcu in tristique euismod, velit urna vehicula nunc, ut porta augue nisi ac odio.</p>
        </div>
      </div>
    );
  }

export default Skills