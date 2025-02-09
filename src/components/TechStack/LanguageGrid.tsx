import React from 'react';

interface Language {
  name: string;
  icon: string;
  description?: string;
}

const languages: Language[] = [
  { name: 'Python', icon: 'laptop' },
  { name: 'JavaScript', icon: 'code' },
  { name: 'Swift', icon: 'data_object' },
  { name: 'Ruby', icon: 'developer_mode' },
  { name: 'Gherkin', icon: 'adb' },
  { name: 'Cucumber', icon: 'data_array' },
  { name: 'HTML and CSS', icon: 'terminal' }
];

const LanguageGrid: React.FC = () => {
  return (
    <div className="container">
      <div className="section">
        <div className="row">
          {languages.map((lang, index) => (
            <div key={index} className="col s12 m3">
              <div className="icon-block">
                <h2 className="center brown-text">
                  <i className="material-icons">{lang.icon}</i>
                </h2>
                <h5 className="center">{lang.name}</h5>
                {lang.description && <p className="light">{lang.description}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageGrid;
