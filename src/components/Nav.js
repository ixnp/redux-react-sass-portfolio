import React from 'react';
import '../scss/main.scss';
import {connect} from 'react-redux';
import {toggleNav} from '../actions'
const Nav = (props) => {
    return (
      <div className="nav">
        <div id="nav-icon1" onClick={()=>{props.toggleNav(props.navDisplay)}} className={props.navDisplay}>
        <span></span>
        <span></span>
       <span></span>
      </div>

      </div>
    );
  }

const mapStateToProps = (state) => {
  return{
    navDisplay: state.navDisplay
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    toggleNav: (currentClass) => dispatch(toggleNav(currentClass)),

  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Nav)