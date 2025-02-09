import React from 'react';

interface Project {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  githubLink: string;
  demoLink?: string;
  technologies: string[];
}

interface ProjectSectionProps {
  project: Project;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ project }) => {
  return (
    <div className="container center-align">
      <h3 className="title-frame dark center-align">
        <b>{project.title}</b>
      </h3>
      <h4 className="mdi-content-send dark center-align">
        <b>{project.subtitle}</b>
      </h4>
      <div className="section">
        <img className="project-image center-align" src={project.image} alt={project.title} />
        <p className="text-accent-2 waves-green left-align">{project.description}</p>
        <div className="tech-stack">
          {project.technologies.map((tech, index) => (
            <span key={index} className="chip">{tech}</span>
          ))}
        </div>
        <div className="row center">
          <a href={project.githubLink} className="btn-large waves-effect waves-light teal lighten-1">
            View on GitHub
          </a>
          {project.demoLink && (
            <a href={project.demoLink} className="btn-large waves-effect waves-light teal lighten-1">
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
