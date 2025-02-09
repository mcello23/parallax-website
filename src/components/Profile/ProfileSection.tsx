import React from 'react';

const ProfileSection: React.FC = () => {
  const handleDownloadCV = () => {
    window.open("https://www.dropbox.com/scl/fi/m8xsfhlkk6zye20vz7fvc/Marcelo-s-Resume-Q3-2023.pdf?rlkey=nfcbts87e9gv4o0nrjq4v57yc&dl=0");
  };

  return (
    <div className="container">
      <div className="section">
        <div className="row">
          <div className="center-align">
            <h4 className="mdi-content-send dark center-align"><b>QA Lead</b></h4>
            <img className="right-aligned image-desc" src="/images/DSC_9554.jpg" alt="personal" />
            <div className="profile-content">
              <p className="text-accent-2 waves-green left-align">Hi!</p>
              <p className="text-accent-2 waves-green left-align">
                I have been working as a QA for the last 6 years in companies like Apple, EA and, more recently, 
                Nespresso IoT in which I'm QA Lead managing a team of 5 manual testers and 3 automation ones.
              </p>
              <p className="text-accent-2 waves-green left-align">
                Recently, I've implemented KPIs to track the quality of tests, bugs opened and closed each sprint, 
                refactored manual and automated test cases, execute regression, pairing, stability and smoke tests 
                before every new deployment.
              </p>
            </div>
            <div className="row center">
              <button 
                className="btn-large waves-effect waves-light teal lighten-1"
                onClick={handleDownloadCV}
              >
                Download my CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
