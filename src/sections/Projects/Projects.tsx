import './Projects.scss';
import projects from '../../constants/projects';
import icons from '../../constants/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import type { Project, IconsMap } from '../../types';

const typedIcons: IconsMap = icons;

function StacksProject({ stacks }: { stacks: string[] }) {
  return (
    <ul className="project-stacks">
      {stacks.map((stack, index) => {
        const stackKey = stack.toLowerCase();
        if (stackKey in typedIcons) {
          return (
            <li className="stack-item" key={index}>
              <img src={typedIcons[stackKey]} alt={stack} />
              <div className="stack-name">{stack}</div>
            </li>
          );
        }
        return <li className="stack-item" key={index}>{stack}</li>;
      })}
    </ul>
  );
}

function ProjectLink({ project }: { project: Project }) {
  const { status, url } = project;

  switch (status) {
    case 'online':
      if (typeof url === 'string') {
        return (
          <a href={url} target="_blank" rel="noreferrer">
            Voir le projet <i><FontAwesomeIcon icon={faArrowRight} /></i>
          </a>
        );
      }
      break;
    case 'done':
      if (Array.isArray(url)) {
        return (
          <>
            {url.map((link, index) => {
              if (typeof link.url_link === 'string') {
                return (
                  <a href={link.url_link} target="_blank" rel="noreferrer" key={index}>
                    {link.url_name} <i><FontAwesomeIcon icon={faArrowRight} /></i>
                  </a>
                );
              }
              return null;
            })}
          </>
        );
      }
      break;
    case 'in_progress':
      return <a href="#">En cours de développement</a>;
  }
  return null;
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <div className="project-container" key={index}>
      <div className="project-image">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="project-text">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <StacksProject stacks={project.stacks} />
        <div className="project-link">
          <ProjectLink project={project} />
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="title-container">
          <h1 className="title-content">Mes Projets</h1>
        </div>
        <div className="container-content">
          <div className="content">
            {projects.map((project, index) => (
              <ProjectCard project={project} index={index} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
