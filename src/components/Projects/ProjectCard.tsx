import React from 'react';
import { Project } from '../../types/types';

const ProjectCard: React.FC<Project> = ({
  title,
  description,
  image,
  technologies,
  githubLink,
  demoLink
}) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
      <div className="card-content">
        <span className="card-title">{title}</span>
        <p>{description}</p>
        <div className="technologies">
          {technologies.map((tech, index) => (
            <span key={index} className="chip">{tech}</span>
          ))}
        </div>
      </div>
      <div className="card-action">
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        {demoLink && (
          <a href={demoLink} target="_blank" rel="noopener noreferrer">
            Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
