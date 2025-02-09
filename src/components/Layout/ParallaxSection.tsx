import React from 'react';

interface ParallaxSectionProps {
  title: string;
  backgroundImage: string;
  children: React.ReactNode;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  title,
  backgroundImage,
  children
}) => {
  return (
    <>
      <div className="parallax-container valign-wrapper">
        <div className="section no-pad-bot">
          <div className="container">
            <div className="row center">
              <h2 className="header col s12 dark center-align">{title}</h2>
            </div>
          </div>
        </div>
        <div className="parallax">
          <img src={backgroundImage} alt="Background" />
        </div>
      </div>
      <div className="container">
        <div className="section">
          {children}
        </div>
      </div>
    </>
  );
};

export default ParallaxSection;
