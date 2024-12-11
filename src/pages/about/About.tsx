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
              <p>Je m'appelle Kheang et je suis développeur fullstack, passionné par le développement web et la création d'applications innovantes.</p>
              <p>Fort d'une expérience de 10 ans en tant que Web Designer et Infographiste, j'ai eu l'opportunité de réaliser divers projets de sites Internet et d'applications, notamment avec le CMS Wordpress et le langage PHP. Cette expérience m'a permis de développer une solide expertise en matière de design, mais aussi une forte capacité à comprendre les besoins fonctionnels des projets.</p>
              <p>Afin de continuer à progresser et relever de nouveaux défis, j'ai suivi une formation intensive de 6 mois à l'école O'clock. Cette formation m'a permis d'approfondir mes compétences en développement web et d'acquérir de nouvelles technologies, tout en mettant l'accent sur la qualité du code, l'optimisation des performances des applications et la recherche constante de solutions innovantes.</p>
              <p>J'accorde une grande importance à la recherche de solutions efficaces, à l'optimisation des performances et à la création d'un code propre et maintenable. Persévérant et toujours en quête de nouvelles compétences, je m'efforce d'améliorer continuellement mes connaissances et de livrer des applications de haute qualité.</p>
              <p>Je suis ouvert à toutes les propositions de collaboration et prêt à relever de nouveaux défis. N'hésitez pas à me contacter pour échanger davantage et discuter de vos projets.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;