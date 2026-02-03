import { MouseEvent } from 'react';
import './Skills.scss';

function tabsHandler(event: MouseEvent<HTMLButtonElement>): void {
  const tabsBtn = document.querySelectorAll('.tabs-panel button');
  const tabBtn = event.target as HTMLButtonElement;
  const target = tabBtn.getAttribute('data-target');
  const tabsContent = document.querySelectorAll('.tabs-content div');
  
  tabsBtn.forEach(btn => btn.classList.remove('active'));
  tabBtn.classList.add('active');
  
  tabsContent.forEach(content => {
    if (content.id === target) {
      content.classList.add('active');
    } else {
      content.classList.remove('active');
    }
  });
}

function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="title-container">
          <h1 className="title-content">Mes Compétences</h1>
        </div>
        <div className="container-content">
          <div className="content">
            <div className="tabs">
              <div className="tabs-panel">
                <button className="active" data-target="front-end" onClick={tabsHandler}>Front-end</button>
                <button data-target="back-end" onClick={tabsHandler}>Back-end</button>
                <button data-target="devops" onClick={tabsHandler}>DevOps</button>
              </div>
              <div className="tabs-content">
                <span className="triangle_corner triangle_corner-tr"></span>
                <div className="active" id="front-end">
                  <p>C'est ici que la magie opère côté utilisateur ! Je crée des interfaces qui en jettent, fluides et qui s'adaptent à tous les écrans — du smartphone au grand moniteur.</p>
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>SASS</li>
                    <li>JavaScript</li>
                    <li>Vue.js</li>
                    <li>React</li>
                  </ul>
                </div>
                <div id="back-end">
                  <p>Les coulisses, c'est mon terrain de jeu ! Je construis des API solides et des architectures qui tiennent la route.</p>
                  <ul>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>PHP</li>
                    <li>Symfony</li>
                    <li>Postgresql</li>
                    <li>MySQL</li>
                    <li>API REST</li>
                    <li>Wordpress</li>
                  </ul>
                </div>
                <div id="devops">
                  <p>Coder c'est bien, déployer proprement c'est mieux ! J'automatise les workflows, je versionne tout et je m'assure que le code arrive en prod sans accroc.</p>
                  <ul>
                    <li>Linux</li>
                    <li>Git</li>
                    <li>GitHub / GitLab</li>
                    <li>Docker</li>
                    <li>Kubernetes</li>
                    <li>CI/CD</li>
                    <li>Terraform</li>
                    <li>Ansible</li>
                    <li>Prometheus</li>
                    <li>Grafana</li>
                    <li>AWS</li>
                  </ul>
                </div>
                <span className="triangle_corner triangle_corner-bl"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
