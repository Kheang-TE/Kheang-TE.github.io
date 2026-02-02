import './About.scss';

function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="title-container">
          <h1 className="title-content">A propos</h1>
        </div>
        <div className="container-content">
          <div className="content">
            <div className="content-image">
              <span className="triangle_corner triangle_corner-tr"></span>
              <span className="triangle_corner triangle_corner-bl"></span>
              <img src="./img/kheang.jpg" alt="kheang photo" />
            </div>
            <div className="content-text">
              <p>Développeur <strong>Fullstack</strong> avec <strong>10 ans d’expérience en Développement Web et Infographie</strong>, je conçois et développe des applications web performantes, centrées sur l’utilisateur et les besoins fonctionnels.</p>
              <p>Spécialisé en <strong>WordPress</strong>, <strong>PHP</strong> et technologies web modernes, je combine <strong>expertise technique, sens du design et forte capacité de communication</strong> pour transformer des idées en solutions efficaces.</p>
              <p>Dans une démarche continue de <strong>montée en compétences</strong>, j’ai suivi les formations <strong>Développeur Fullstack JavaScript et DevOps</strong>, renforçant mes connaissances en architecture applicative, performance, déploiement et automatisation.</p>
              <p><strong>Rigoureux, persévérant et orienté solution</strong>, je m’intègre facilement aux équipes et sais dialoguer aussi bien avec des profils techniques que non techniques.</p>
              <p>Ouvert aux opportunités et collaborations, je suis prêt à relever de nouveaux défis et à contribuer à des projets ambitieux.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
