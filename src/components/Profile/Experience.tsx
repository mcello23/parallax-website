import React from 'react';

const Experience: React.FC = () => {
  return (
    <div className="section">
      <div className="row">
        <div className="center-align">
          <h4 className="mdi-content-send dark center-align"><b>QA Lead</b></h4>
          <img className="right-aligned image-desc" src="/DSC_9554.jpg" alt="profile" />
          <p className="text-accent-2 waves-green left-align">Hi!</p>
          <p className="text-accent-2 waves-green left-align">
            I have been working as a QA for the last 6 years in companies like Apple, EA and, more recently, 
            Nespresso IoT in which I'm QA Lead managing a team of 5 manual testers and 3 automation ones.ðð
          </p>
          <p className="text-accent-2 waves-green left-align">
            Recently, I've implemented KPIs to track the quality of tests, bugs opened and closed each sprint, 
            refactored manual and automated test cases, execute regression, pairing, stability and smoke tests 
            before every new deployment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
