import './Home.scss';
import contactItems from '../../assets/datas/contactItems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { MouseEvent } from 'react';

function scrollTo(e: MouseEvent<HTMLAnchorElement>) {
  e.preventDefault();
  const target = e.currentTarget.getAttribute('href');
  if(target){
    const element = document.querySelector(target);
    element?.scrollIntoView({ behavior: 'smooth' });
  }
}

function Home() {
  return (
    <section id="home">
      <div className="container">
        <div className="container_content">
          <h1>Kheang TE</h1>
          <h2>Développeur Web & d'Applications</h2>
          <ul className="contact">
            <li>
              <a href="./CV_Kheang_Developpeur_Web_Applications_fr.pdf" target="_blank" rel="noreferrer" title="CV"><i><FontAwesomeIcon icon={faFilePdf}/></i></a>
            </li>
            {contactItems.map((item, index) => (
              <li key={index}>
                <a href={item.url} target="_blank" rel="noreferrer" title={item.name}>
                  {item.icon}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" onClick={scrollTo}><i><FontAwesomeIcon icon={faEnvelope} /></i>Me contacter</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Home;