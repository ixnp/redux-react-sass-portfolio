import React from 'react';
import Nav from './Nav';
import Menu from './Menu'
import '../scss/main.scss';

import bannerImage from '../assets/headingimg2.jpg'
const Header = () => {
    return (
      <div className="header-container">
          <div className="header-container-text">
          <h1>Ix Procopios</h1>
          <h2>Software Developer</h2>
        
          </div>
        <img className="header-container-img overlay" src="https://lh3.googleusercontent.com/8X0BBRz1vUSC4SoO8YacFJX2_bbtcxgVGsNkBtjTG39gcF9V82d1xyofl2p128XmT2ZNsfQFU8mRo-a-eDMhxCTmM0ptneyBQXZMS05a_xAN6lmE0BNEelKRBGub7U6iaE2uQyYEtID-iOYMRfyWVAtEreM0PhhQL1LfUEJDskZLCrAkid25bE9VaSWaZpGe4DS2j_yR4TCSltMUEbt9DuY92W3wZ8oLUduDgb8ATnChYntuRkSms81htXM86SmXq7z0QyczfEAD6Im5BllvFwC2dxmlxA3N4K61CR3bM9h4bZZOFzqOkUwn1SYhWl5wsU3Ob-NMNQ-SGtrW7OaFRgueu__bcRxRlMjB88zZKZ-nknA97AlUkdrIAGyFbnp0mcO0Jkgvw8-65laqUdSp3jvjKi7XB3twPRp5YByuhnddLd7GphTjxSrZvmjKFZu34cv5SzMU8UTRbmpIlgvnoncybL66JD-rZbD4vgUw42zIu0lr7uqC7T0whF53iR2_70_ULq66hh_RC_JejcPj6JVwuOp26aB3i7BQel2bwqCr5LRUlTPODAgXGyVXARUC_CycjOIAmx_Kd9KB7yTgc2Zy8qtLUNJVh93sPUKGbriXjH_R6TSEcZcJxZ_u8jnes6pC9g159bfaFb7pJdAoGQSUPfeJVk8Mb-lB7Lq8Tg7sQ46hHCn6uuMQOfefCr1FkKwvmHyhCSyenYqDC75ZRGZLwyC65voSr48OFR1R8DKXr29Y=w1462-h890-no"></img>
      <Nav></Nav>
      <Menu></Menu>
      </div>
    );
  }

export default Header