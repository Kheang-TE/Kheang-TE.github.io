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
              <p>Développeur Fullstack</p>
              <p>Je suis Kheang, un développeur web passionné par la programmation. J'ai travaillé pendant 10 ans en tant que Web Designer et Infographiste. Au cours de ces années, j'ai pu réaliser plusieurs sites Internet, notamment avec le CMS Wordpress.</p>
              <p>Par la suite, j'ai également suivi une formation intensive de 3 mois chez O'clock pour approfondir mes connaissances et apprendre de nouvelles technologies.</p>
              <p>Je suis à la recherche d'un poste de développeur web junior en CDI. Je suis ouvert à toutes les propositions et je suis prêt à relever de nouveaux défis. N'hésitez pas à me contacter pour plus d'informations.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;