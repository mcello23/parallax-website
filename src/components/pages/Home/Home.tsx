import M from 'materialize-css';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ProgrammingLanguage } from '../../../types/types';
import CertificatesModal from '../../Certificates/CertificatesModal';
import ParallaxSection from '../../Layout/ParallaxSection';

interface Certificate {
  imageURL: string;
  thumbURL: string;
  linkURL: string;
  title: string;
  caption: string;
}

const certificates: Certificate[] = [
  {
    imageURL: "images/Selenium WebDriver e Java.jpg",
    thumbURL: "thumbs/Selenium WebDriver e Java _thumb.jpg",
    linkURL: "images/Selenium WebDriver e Java.jpg",
    title: "Selenium WebDriver and Java",
    caption: "Selenium WebDriver and Java"
  },
  // ...outros certificados
];

const programmingLanguages: ProgrammingLanguage[] = [
  { name: 'Python', icon: 'laptop' },
  { name: 'JavaScript', icon: 'code' },
  { name: 'Swift', icon: 'data_object' },
  { name: 'Ruby', icon: 'developer_mode' }
];

const qaPillars = [
  {
    title: 'Attention to detail',
    icon: 'zoom_in',
    description: 'As in every project that I work, I have great attention to detail in order to identify even the smallest defects in a product.'
  },
  {
    title: 'Problem-solving skills',
    icon: 'developer_mode',
    description: 'The best QA is the one that can troubleshoot problems and find creative solutions to issues that may arise during the testing process.'
  },
  {
    title: 'Communication skills',
    icon: 'call',
    description: 'Effective communication with different teams and stakeholders, including developers, project managers, and customers is essential.'
  }
];

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  useEffect(() => {
    const parallaxElems = document.querySelectorAll('.parallax');
    const modalElems = document.querySelectorAll('.modal');
    M.Parallax.init(parallaxElems);
    M.Modal.init(modalElems);
  }, []);

  const handleDownloadCV = () => {
    window.open("https://www.dropbox.com/scl/fi/m8xsfhlkk6zye20vz7fvc/Marcelo-s-Resume-Q3-2023.pdf?rlkey=nfcbts87e9gv4o0nrjq4v57yc&dl=0");
  };

  return (
    <div>
      <div id="index-banner" className="parallax-container">
        <div className="section no-pad-bot">
          <div className="container">
            <br /><br />
            <h2 className="header center teal-text text-lighten-5">Portfolio</h2>
            <div className="row center">
              <Link to="/frameworks" className="btn-large waves-effect waves-light teal lighten-1 pad">
                Frameworks
              </Link>
              <Link to="/side-projects" className="btn-large waves-effect waves-light teal lighten-1 pad">
                Side Projects
              </Link>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="btn-large waves-effect waves-light teal lighten-1 pad"
              >
                Certificates
              </button>
            </div>
            <h3 className="header center teal-text text-lighten-5">Marcelo Costa</h3>
          </div>
        </div>
        <div className="parallax">
          <img src="/images/backgrounds/background2_coding.jpg" alt="Background" />
        </div>
      </div>

      <ParallaxSection 
        title="My Programming Languages" 
        backgroundImage="/images/backgrounds/background2_coding.jpg"
      >
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
      </ParallaxSection>

      <ParallaxSection 
        title="Three pillars of a QA" 
        backgroundImage="/images/backgrounds/background2_coding.jpg"
      >
        <div className="row">
          {qaPillars.map((pillar, index) => (
            <div key={index} className="col s12 m4">
              <div className="icon-block">
                <h2 className="center brown-text">
                  <i className="material-icons">{pillar.icon}</i>
                </h2>
                <h5 className="center">{pillar.title}</h5>
                <p className="light" id={`text-in${index}`}>{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </ParallaxSection>

      <CertificatesModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        certificates={certificates}
      />
    </div>
  );
};

export default Home;
