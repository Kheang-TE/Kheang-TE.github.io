import './Home.scss';
import contactItems from '../../constants/contactItems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useScrollToSection } from '../../hooks';

function Home() {
  const { handleLinkClick } = useScrollToSection();

  return (
    <section id="home">
      <div className="container">
        <div className="container_content">
          <h1>Kheang TE</h1>
          <h2>Développeur Web Fullstack & DevOps</h2>
          <ul className="contact">
            <li>
              <a href="./CV_Kheang_Developpeur_Fullstack_-_DevOps.pdf" target="_blank" rel="noreferrer" title="CV">
                <i><FontAwesomeIcon icon={faFilePdf}/></i>
              </a>
            </li>
            {contactItems.map((item, index) => (
              <li key={index}>
                <a href={item.url} target="_blank" rel="noreferrer" title={item.name}>
                  {item.icon}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" onClick={handleLinkClick}>
                <i><FontAwesomeIcon icon={faEnvelope} /></i>Me contacter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Home;
