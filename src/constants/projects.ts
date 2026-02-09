import type { Project } from '../types';

const projects: Project[] = [
  {
    title: "GT Habitat",
    image: "./img/projets/gt_habitat.png",
    description: "Site vitrine d'un maître d'oeuvre. Le site est réalisé avec Wordpress et un thème totalement personnalisé. Il est également optimisé pour le référencement naturel.",
    stacks: ["Wordpress", "PHP", "CSS"],
    status: "online",
    url: "https://gt-habitat.fr/"
  },
  {
    title: "NOVATIO HOME",
    image: "./img/projets/novatio_home.png",
    description: "Site vitrine responsive pour une société de menuiserie. Le site est réalisé avec WordPress et un thème sur mesure, entièrement personnalisé. Il est également optimisé pour le référencement naturel.",
    stacks: ["Wordpress", "PHP", "CSS"],
    status: "online",
    url: "https://www.novatiohome.fr/"
  },
  {
    title: "Unity Manager",
    image: "./img/projets/unity_manager.png",
    description: "Application de gestion de projet. Il permet de gérer les projets sous forme de tâches, modèle Kanban. L'application intégre des fonctionnalités tels que : l'inscription, l'authentification et un système de tchat pour faciliter la communication entre les membres de l'équipe.",
    stacks: ["NodeJS", "Express", "PostgreSQL", "MongoDB", "VueJS", "Bootstrap", "CSS"],
    status: "done",
    url: [
      {
        url_name: "Front-end",
        url_link: "https://github.com/Kheang-TE/unity_manager-front"
      },
      {
        url_name: "Back-end",
        url_link: "https://github.com/Kheang-TE/unity_manager-back"
      }
    ]
  },
  {
    title: "Pokegame",
    image: "./img/projets/pokegame.png",
    description: "Application mobile basé sur la célèbre licence Pokemon. Le Pokedex est la seule fonctionnalité implémentée pour le moment, avec la possibilité de rechercher des Pokémon et d'afficher leurs informations détaillées.",
    stacks: ["React_Native", "Expo", "TypeScript", "CSS"],
    status: "done",
    url:[
        {
            url_name: "Voir le dépôt",
            url_link: "https://gitlab.com/dev.kheang.te/pokegame"
        }
    ]
  },
  {
    title: "Symfony Store",
    image: "./img/projets/symfony_store.png",
    description: "Développement d’une application e-commerce orientée back-end : gestion des utilisateurs, sécurité, back-office, paiement en ligne et emails automatisés, avec une architecture MVC et des vues dynamiques.",
    stacks: ["Symfony", "PHP", "Twig", "Stripe","Mailjet"],
    status: "done",
    url: [
        {
            url_name: "Voir le dépôt",
            url_link: "https://gitlab.com/dev.kheang.te/symfonystore"
        }
    ]
  },
  {
    title: "Sarang",
    image: "./img/projets/sarang.png",
    description: "Application de notation de films et de séries asiatiques, avec la possibilité d'y laisser les commenter. Utilisation d'une API externe pour les données de la vidéothèque.",
    stacks: ["Symfony", "React", "PostgreSQL"],
    status: "in_progress",
    url: null
  }
];

export default projects;
