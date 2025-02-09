import React from 'react';
import ParallaxSection from '../../Layout/ParallaxSection';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
}

const projects: Project[] = [
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio website built with React, TypeScript and MaterializeCSS. Features responsive design and modern web development practices.',
    image: '/backgrounds/background2_coding.jpg',
    technologies: ['React', 'TypeScript', 'MaterializeCSS', 'CSS3'],
    githubUrl: 'https://github.com/mcello23/webpage',
    demoUrl: 'https://mcello23.github.io/webpage/'
  }
];

const SideProjects: React.FC = () => {
  return (
    <div>
      <ParallaxSection 
        title="Side Projects" 
        backgroundImage="/backgrounds/background2_coding.jpg"
      >
        <div className="container">
          {projects.map((project, index) => (
            <div key={index} className="section">
              <div className="card">
                <div className="card-image">
                  <img src={project.image} alt={project.title} />
                  <span className="card-title">{project.title}</span>
                </div>
                <div className="card-content">
                  <p>{project.description}</p>
                  <div className="chips">
                    {project.technologies.map((tech, i) => (
                      <div key={i} className="chip">{tech}</div>
                    ))}
                  </div>
                </div>
                <div className="card-action">
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn waves-effect waves-light teal"
                  >
                    GitHub
                  </a>
                  {project.demoUrl && (
                    <a 
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn waves-effect waves-light teal"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </ParallaxSection>
    </div>
  );
};

export default SideProjects;
