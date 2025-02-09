
import React from 'react';
import { ProgrammingLanguage } from '../../types/types';

const programmingLanguages: ProgrammingLanguage[] = [
  { name: 'Python', icon: 'laptop' },
  { name: 'JavaScript', icon: 'code' },
  { name: 'Swift', icon: 'data_object' },
  { name: 'Ruby', icon: 'developer_mode' }
];

const Home: React.FC = () => {
  return (
    <div>
      <div id="index-banner" className="parallax-container">
        <div className="section no-pad-bot">
          <!-- ...existing code... -->
        </div>
      </div>
      
      <div className="container">
        <div className="section">
          <div className="row">
            {programmingLanguages.map((lang, index) => (
              <div key={index} className="col s12 m3">
                <div className="icon-block">
                  <h2 className="center brown-text">
                    <i className="material-icons">{lang.icon}</i>
                  </h2>
                  <h5 className="center">{lang.name}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
