import './Projects.scss';
import projects from '../../assets/json/datas.json';
import icons from '../../assets/json/icons.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';

type ProjectType = {
  title: string;
  image: string;
  description: string;
  stacks: string[];
  status: string;
  url: string | urlType[] | null;
};

type urlType = {
  url_name: string;
  url_link: string | null;
};

type IconsType = {
  [key: string]: string;
};

const typedIcons: IconsType = icons;
          
function stacksProject(stacks: string[]){
  return (
    <ul className="project-stacks">
    {stacks.map(stack => {
        if(icons.hasOwnProperty(stack.toLowerCase())){
          return (
            <li className="stack-item">
              <img src={typedIcons[stack.toLowerCase()]} alt={stack} />
              <div className="stack-name">{stack}</div>
            </li>
          );
        } else{
          return <li className="stack-item">{stack}</li>
        }
    })}
    </ul>
  )
}

function linkProject(project: ProjectType){
  const { status, url } = project;
  switch(status){
    case 'online':
      if(typeof url === 'string'){
        return <a href={url} target="_blank">Voir le projet <i><FontAwesomeIcon icon={faArrowRight} /></i></a>;
      }
      break;
    case 'done':
      if(Array.isArray(url)){
        return url.map(link => {
          if(typeof link.url_link === 'string')
            return <a href={link.url_link} target="_blank">{link.url_name} <i><FontAwesomeIcon icon={faArrowRight} /></i></a>;
        });
      }
      break;
    case 'in_progress':
      return <a href="#">En cours de développement</a>;
  }
}

function displayProjects() {
  return projects.map(project => {
    const stacks = stacksProject(project.stacks);
    const link = linkProject(project);
    return (
      <div className="project-container">
        <div className="project-image">
          <img src={project.image} alt={project.title} />
        </div>
        <div className="project-text">
          <h2>{project.title}</h2>
          <p>
            {project.description}
          </p>
          {stacks}
          <div className="project-link">
            {link}
          </div>
        </div>
      </div>
    );
  })
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
            {displayProjects()}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;