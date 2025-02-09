import React from 'react';
import ParallaxSection from '../../Layout/ParallaxSection';

interface Framework {
  title: string;
  subtitle: string;
  logo: string;
  description: string;
  videoUrl?: string;
  githubUrl: string;
  technologies: string[];
  codeExample: string;
  language: string;
}

const frameworks: Framework[] = [
  {
    title: 'Amazon Automation',
    subtitle: 'Using Cypress',
    logo: '/images/cypress-logo.jpeg',
    description: 'Test suite using Cypress testing framework. The suite runs through the Amazon website and verifies the contents of the shopping cart in various ways.',
    videoUrl: '/videos/testing_amazon.cy.js.mp4',
    githubUrl: 'https://github.com/mcello23/cypress-amazon',
    technologies: ['Cypress', 'JavaScript', 'Node.js'],
    codeExample: `describe('Amazon', function() {
      beforeEach(function() {
        cy.visit('https://www.amazon.es/')
        cy.get('#sp-cc-rejectall-container').click()
      })
      // ...rest of test code...
    })`,
    language: 'javascript'
  },
  {
    title: 'Android Automation',
    subtitle: 'Using Cucumber, Appium and Ruby',
    logo: '/images/cucumber-logo.png',
    description: 'Test for Android using Android Studio for a simulated device testing the Unit Converter app.',
    videoUrl: '/videos/Appium and Cucumber Testing in Android.mp4',
    githubUrl: 'https://github.com/mcello23/android_automation',
    technologies: ['Cucumber', 'Appium', 'Ruby', 'Android Studio'],
    codeExample: `@home_screen
    Feature: Tests for Home Screen Functionality
      Background:
        Given I land on home screen`,
    language: 'gherkin'
  }
];

const Frameworks: React.FC = () => {
  return (
    <div>
      <ParallaxSection 
        title="Testing Frameworks" 
        backgroundImage="/backgrounds/background5_rams.jpg"
      >
        <div className="container">
          {frameworks.map((framework, index) => (
            <div key={index} className="section">
              <h3 className="title-frame dark center-align">
                <b>{framework.title}</b>
              </h3>
              <h4 className="mdi-content-send dark center-align">
                <b>{framework.subtitle}</b>
              </h4>
              <div className="row">
                <div className="col s12">
                  <img 
                    className="right-aligned" 
                    src={framework.logo} 
                    alt={`${framework.title} logo`}
                    style={{ maxWidth: '200px' }} 
                  />
                  <p className="text-accent-2 waves-green left-align">
                    {framework.description}
                  </p>
                  {framework.videoUrl && (
                    <div className="video-container">
                      <video controls>
                        <source src={framework.videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  )}
                  <div className="technologies">
                    {framework.technologies.map((tech, i) => (
                      <span key={i} className="chip">{tech}</span>
                    ))}
                  </div>
                  <pre>
                    <code className={`language-${framework.language}`}>
                      {framework.codeExample}
                    </code>
                  </pre>
                  <div className="center-align">
                    <a 
                      href={framework.githubUrl}
                      className="btn-large waves-effect waves-light teal lighten-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ParallaxSection>
    </div>
  );
};

export default Frameworks;
