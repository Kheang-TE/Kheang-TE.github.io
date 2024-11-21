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
                <div className="tabs">
                  <div className="tabs-panel">
                    <button className="active" data-target="front-end" onClick={tabsHander}>Front-end</button>
                    <button data-target="back-end" onClick={tabsHander}>Back-end</button>
                    <button data-target="tools" onClick={tabsHander}>Outils</button>
                  </div>
                  <div className="tabs-content">
                    <span className="triangle_corner triangle_corner-tr"></span>
                    <div className="active" id="front-end">
                      <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>SASS</li>
                        <li>JavaScript</li>
                      </ul>
                    </div>
                    <div id="back-end">
                      <ul>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>PHP</li>
                        <li>MySQL</li>
                      </ul>
                    </div>
                    <div id="tools">
                      <ul>
                        <li>Git</li>
                        <li>GitHub</li>
                        <li>VS Code</li>
                        <li>Insomnia</li>
                      </ul>
                    </div>
                    <span className="triangle_corner triangle_corner-bl"></span>
                  </div>
                </div>
              </div> 
            </div>
          </div>
        </div>
      </section>
    );
}

export default Skills;