import React from 'react';
import '../scss/main.scss';

import bannerImage from '../assets/headingimg.jpeg'
import avatar from '../assets/avatar.jpeg'
const Header = () => {
    return (
      <div className="header">
      <img src={bannerImage}></img>
      </div>
    );
  }

export default Header