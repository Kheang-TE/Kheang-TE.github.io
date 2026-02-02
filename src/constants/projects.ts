import type { Project } from '../types';

const projects: Project[] = [
  {
    title: "GT Habitat",
    image: "./img/projets/gt_habitat.png",
    description: "Site vitrine d'un maître d'oeuvre avec Wordpress. Le site est réalisé avec Wordpress et un thème totalement personnalisé. Le site est également optimisé pour le référencement naturel.",
    stacks: ["Wordpress", "PHP", "CSS"],
    status: "online",
    url: "https://gt-habitat.fr/"
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
    title: "Chat-App",
    image: "./img/projets/chat_app.png",
    description: "Application de chat réalisée avec Node.js, React et WebSocket pour l’interactivité. L’évolution de ce projet est envisagé.",
    stacks: ["NodeJS", "Express", "React", "WebSocket", "TailwindCSS", "MongoDB", "Cloudinary"],
    status: "done",
    url: [
      {
        url_name: "Front-end",
        url_link: "https://gitlab.com/dev.kheang.te/chat-app-frontend"
      },
      {
        url_name: "Back-end",
        url_link: "https://gitlab.com/dev.kheang.te/chat-app-backend"
      }
    ]
  },
  {
    title: "Pokegame",
    image: "./img/projets/pokegame.png",
    description: "Application mobile basé sur la célèbre licence Pokemon. Le Pokedex est la seule fonctionnalité implémentée pour le moment, avec la possibilité de rechercher des Pokémon et d'afficher leurs informations détaillées.",
    stacks: ["React Native", "Expo", "TypeScript", "CSS"],
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
