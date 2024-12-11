import { MouseEvent } from 'react';
import './Skills.scss';

function tabsHander(event: MouseEvent): void{
  const tabsBtn = document.querySelectorAll('.tabs-panel button');
  const tabBtn = event.target as HTMLButtonElement;
  const target = tabBtn.getAttribute('data-target');
  const tabsContent = document.querySelectorAll('.tabs-content div');
  tabsBtn.forEach(btn => btn.classList.remove('active'));
  tabBtn.classList.add('active');
  tabsContent.forEach(content => {
    if(content.id === target){
      content.classList.add('active');
    }else{
      content.classList.remove('active');
    }
  });
}

function Skills(){
    return (
      <section id="skills">
        <div className="container">
          <div className="title-container">
            <h1 className="title-content">Mes Compétences</h1>
          </div>
          <div className="container-content">
            <div className="content">
              <div className="content-text">
                <p>En tant que développeur fullstack, je possède une expertise complète qui couvre tant le développement front-end que back-end. J'accorde une grande importance à l'optimisation des performances et à la création de solutions robustes et évolutives, tout en veillant à offrir une expérience utilisateur fluide et agréable. Mon approche repose sur une volonté constante de perfectionner mes compétences et d'explorer de nouvelles technologies pour rester à la pointe du développement web.</p>
              </div> 
              <div className="tabs">
                <div className="tabs-panel">
                  <button className="active" data-target="front-end" onClick={tabsHander}>Front-end</button>
                  <button data-target="back-end" onClick={tabsHander}>Back-end</button>
                  <button data-target="tools" onClick={tabsHander}>Outils</button>
                </div>
                <div className="tabs-content">
                  <span className="triangle_corner triangle_corner-tr"></span>
                  <div className="active" id="front-end">
                    <p>J'ai une solide maîtrise des technologies front-end qui me permettent de créer des interfaces utilisateurs modernes et réactives. Je suis également compétent dans le responsive design, garantissant que les applications s'adaptent parfaitement à tous les types d'appareils, offrant ainsi une expérience utilisateur optimale.</p>
                    <ul>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>SASS</li>
                      <li>JavaScript</li>
                      <li>Vue.js</li>
                      <li>Angular</li>
                      <li>React</li>
                    </ul>
                  </div>
                  <div id="back-end">
                    <p>En back-end, je développe des solutions performantes en utilisant des technologies récentes me permettant de construire des applications serveurs rapides et évolutives. Mon approche est axée sur la sécurité, la scalabilité et la performance des applications, tout en répondant aux besoins fonctionnels des utilisateurs.</p>
                    <ul>
                      <li>Node.js</li>
                      <li>Express.js</li>
                      <li>Nest.js</li>
                      <li>PHP</li>
                      <li>Postgresql</li>
                      <li>MySQL</li>
                      <li>API REST</li>
                      <li>Wordpress</li>
                    </ul>
                  </div>
                  <div id="tools">
                    <p>Je suis à l'aise avec les outils essentiels du développement moderne.</p>
                    <ul>
                      <li>VS Code</li>
                      <li>Git</li>
                      <li>GitHub</li>
                      <li>Insomnia</li>
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