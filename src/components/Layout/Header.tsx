import React from 'react';

const Header: React.FC = () => {
  return (
    <div id="index-banner" className="parallax-container">
      <div className="section no-pad-bot">
        <div className="container">
          <br/><br/>
          <h2 className="header center teal-text text-lighten-5">Portfolio</h2>
          <div className="row center hide-on-med-and-down">
            <a href="/frameworks" className="btn-large waves-effect waves-light teal lighten-1 pad">Frameworks</a>
            <a href="/side-projects" className="btn-large waves-effect waves-light teal lighten-1 pad">Side Projects</a>
            <a href="#modal1" className="btn-large waves-effect waves-light teal lighten-1 pad modal-trigger">Certificates</a>
          </div>
          <h3 className="header center teal-text text-lighten-5">Marcelo Costa</h3>
        </div>
      </div>
      <div className="parallax">
        <img src="/backgrounds/background10_snes_controller.jpg" alt="Background" />
      </div>
    </div>
  );
};

export default Header;
