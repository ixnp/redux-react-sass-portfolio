

import React from 'react';
import '../scss/main.scss';
import {connect} from 'react-redux';
import { Link, animateScroll as scroll } from "react-scroll";

const Menu = (props) => {
    return (
        <div className={`menu ${props.navDisplay}`}>
        <Link to="project"><li>Projects</li></Link>
        <Link to="skills"><li>Skills</li></Link>
        <li id={'resume-pdf'}><a
            href={"http://localhost:3001/Resume.pdf"}>Resume</a></li>
        <Link to="contact"><li>Contact</li></Link>
        </div>
    );
  }


const mapStateToProps = (state) => {
  return{
    navDisplay: state.navDisplay
  }
}

export default connect(mapStateToProps)(Menu)