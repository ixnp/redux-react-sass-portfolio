import React from 'react';
import '../scss/main.scss';

//TODO build out resume and add a pdf version with dropbox
//Link to this page with react router. It should be its own thing
const Resume = () => {
    return (
      <div className="Resume">
        <div className="header"></div>
        <div className="contact"></div>
        <div className="experince"></div>
        <div className="skills"></div>
        <div className="school"></div>
        <div className="downloadPDF">
        <div id={'resume-pdf'}>Resume<a
            href={PDF}></a> </div>
        </div>
      </div>
    );
  }

export default Resume