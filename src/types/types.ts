export interface Certificate {
  imageURL: string;
  thumbURL: string;
  linkURL: string;
  title: string;
  caption: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink: string;
  demoLink?: string;
}

export interface ProgrammingLanguage {
  name: string;
  icon: string;
}
