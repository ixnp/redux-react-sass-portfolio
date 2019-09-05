

import React from 'react';
import '../scss/main.scss';
import {connect} from 'react-redux';
const Menu = (props) => {
    return (
        <div className={`menu ${props.navDisplay}`}>
        <li>Projects</li>
        <li>Teaching</li>
        <li>Resume</li>
        <li>Contact</li>
        </div>
    );
  }

const mapStateToProps = (state) => {
  return{
    navDisplay: state.navDisplay
  }
}

export default connect(mapStateToProps)(Menu)