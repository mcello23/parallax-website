import M from 'materialize-css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CertificatesModal from '../../../components/Certificates/CertificatesModal'; // Potential issue
import ParallaxSection from '../../../components/Layout/ParallaxSection'; // Potential issue
import ProfileSection from '../../../components/Profile/ProfileSection'; // Potential issue

interface Certificate {
  imageURL: string;
  thumbURL: string;
  linkURL: string;
  title: string;
  caption: string;
}

const certificates: Certificate[] = [
  {
    imageURL: "/images/Selenium WebDriver e Java.jpg",
    thumbURL: "/images/thumbs/Selenium WebDriver e Java _thumb.jpg",
    linkURL: "/images/Selenium WebDriver e Java.jpg",
    title: "Selenium WebDriver and Java",
    caption: "Selenium WebDriver and Java"
  },
  {
    imageURL: "/images/ReactJS.jpg",
    thumbURL: "/images/thumbs/ReactJS_thumb.jpg",
    linkURL: "/images/ReactJS.jpg",
    title: "ReactJS",
    caption: "ReactJS"
  },
  {
    imageURL: "/images/NodeJS.jpg",
    thumbURL: "/images/thumbs/NodeJS_thumb.jpg",
    linkURL: "/images/NodeJS.jpg",
    title: "NodeJS",
    caption: "NodeJS"
  }
];

interface ProgrammingLanguage {
  name: string;
  icon: string;
}

const programmingLanguages: ProgrammingLanguage[] = [
  { name: 'Python', icon: 'laptop' },
  { name: 'JavaScript', icon: 'code' },
  { name: 'Swift', icon: 'data_object' },
  { name: 'Ruby', icon: 'developer_mode' },
  { name: 'Java', icon: 'coffee' }
];

interface Technology {
  name: string;
  icon: string;
}

const technologies: Technology[] = [
  { name: 'Gherkin', icon: 'adb' },
  { name: 'Cucumber', icon: 'data_array' },
  { name: 'HTML and CSS', icon: 'terminal' },
  { name: 'Docker', icon: 'cloud' }
];

interface QAPillar {
  title: string;
  icon: string;
  description: string;
}

const qaPillars: QAPillar[] = [
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
  },
  {
    title: 'Adaptability',
    icon: 'autorenew',
    description: 'Being able to adapt to new tools, technologies, and methodologies is crucial in the ever-evolving field of software testing.'
  }
];

const testFundamentals = [
  {
    question: 'Why is the test pyramid a pyramid?',
    answer: 'The test pyramid is a visual metaphor that represents the recommended balance between different types of tests in an application. It is called a "pyramid" because the base of the pyramid represents the tests that should be the most numerous, while the top of the pyramid represents the tests that should be the least numerous. The idea behind the test pyramid is that you should have a large number of low-level unit tests, a smaller number of integration tests, and an even smaller number of end-to-end (E2E) tests. This is represented by the shape of the pyramid, with unit tests at the bottom (the widest part), integration tests in the middle, and E2E tests at the top (the narrowest part). The rationale behind this recommendation is that unit tests are typically faster and easier to write than integration or E2E tests, and they provide a solid foundation for testing the individual units or components of an application. Integration tests come next and provide a way to test how different units or components work together. Finally, E2E tests are the most expensive and time-consuming to write, but they provide the highest level of confidence that the application is working as expected in a real-world scenario.'
  },
  {
    question: 'Does the Software Development Life Cycle (SDLC) end?',
    answer: 'The Software Development Life Cycle (SDLC) does not necessarily end, as software often requires ongoing maintenance and updates even after it has been deployed. However, the formal SDLC process may be considered complete once the software has been deployed and is in use by the intended audience. After the software has been deployed, it may enter a phase of maintenance and support, during which bugs are fixed, updates are made, and new features are added. This maintenance phase may continue indefinitely, as long as the software is being used and supported. In some cases, the software may reach the end of its useful life and be retired, at which point the SDLC process may be considered fully complete. However, in many cases, software is continuously updated and maintained, and the SDLC process may continue in some form even after the initial release of the software.'
  },
  {
    question: 'How to prevent bugs into production',
    answer: 'Write clean, well-structured code: This can help to reduce the likelihood of bugs occurring in the first place. Use a version control system: This will allow you to track changes to your code and easily revert to a previous version if a bug is introduced. Use automated testing: Automated testing can help to catch bugs before they make it into production. Review code changes: Having other developers review your code changes can help to catch bugs that may have been missed during testing. Use error logging and monitoring: Tools such as error logs and application performance monitoring can help to identify and fix bugs that may occur in production. Implement a robust QA process: A thorough quality assurance (QA) process can help to catch bugs before they make it into production. While it is not possible to completely eliminate the risk of bugs occurring in production, following these best practices can help to minimize the likelihood of bugs occurring and make it easier to identify and fix them when they do occur.'
  },
  {
    question: 'What is the role of a QA in Agile?',
    answer: 'In Agile, a QA is involved throughout the development process, working closely with developers and product owners to ensure quality at every stage...'
  }
];

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const parallaxElems = document.querySelectorAll('.parallax');
    const modalElems = document.querySelectorAll('.modal');
    M.Parallax.init(parallaxElems);
    M.Modal.init(modalElems);
  }, []);

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
          <img src="images/backgrounds/background2_coding.jpg" alt="Background" />
        </div>
      </div>

      <ProfileSection />

      <ParallaxSection
        title="My Programming Languages"
        backgroundImage="/images/backgrounds/background2_coding.jpg"
      >
        <div className="row">
          {programmingLanguages.map((lang, index) => (
            <div key={index} className="col s12 m3">
              <div className="icon-block">
                <h2 className="center brown-text"><i className="material-icons">{lang.icon}</i></h2>
                <h5 className="center">{lang.name}</h5>
              </div>
            </div>
          ))}
        </div>
      </ParallaxSection>

      <ParallaxSection
        title="Technologies"
        backgroundImage="/images/backgrounds/background2_coding.jpg"
      >
        <div className="row">
          {technologies.map((tech, index) => (
            <div key={index} className="col s12 m3">
              <div className="icon-block">
                <h2 className="center brown-text"><i className="material-icons">{tech.icon}</i></h2>
                <h5 className="center">{tech.name}</h5>
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
                <h2 className="center brown-text"><i className="material-icons">{pillar.icon}</i></h2>
                <h5 className="center">{pillar.title}</h5>
                <p className="light" id={`text-in${index}`}>{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </ParallaxSection>

      <ParallaxSection
        title="Test Fundamentals"
        backgroundImage="/images/backgrounds/background2_coding.jpg"
      >
        <div className="section">
          {testFundamentals.map((item, index) => (
            <div key={index}>
              <h4 className="mdi-content-send dark center-align"><b>{item.question}</b></h4>
              <p className="text-accent-2 waves-green left-align">{item.answer}</p>
            </div>
          ))}
        </div>
      </ParallaxSection>

      <ParallaxSection
        title="Thanks for the visit! ☺"
        backgroundImage="/images/backgrounds/background2_coding.jpg"
      >
        <div className="section no-pad-bot">
          <div className="container">
            <div className="row center">
              <h5 className="header col s12 dark">Feel free to send me an e-mail or connect with me in any social media on top.</h5>
              <p>Marcelo Costa</p>
            </div>
          </div>
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
