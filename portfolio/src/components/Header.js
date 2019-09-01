import React from 'react';
import Nav from './Nav';
import '../scss/main.scss';

import bannerImage from '../assets/headingimg.jpeg'
import avatar from '../assets/avatar.jpeg'
const Header = () => {
    return (
      <div className="header-container">
          <div className="header-container-text">
          <h1>Ix Procopios</h1>
          <h2>Software Developer</h2>
          <h2>Designer</h2>
          <h2>Artist</h2>
          </div>
      <img className="header-container-img overlay"src={bannerImage}></img>
      <Nav></Nav>
      </div>
    );
  }

export default Header