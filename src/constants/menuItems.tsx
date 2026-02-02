import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser, faBriefcase, faDesktop, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import type { MenuItem } from '../types';

const menuItems: MenuItem[] = [
    {
        id: 1,
        title: "Accueil",
        link: "#home",
        icon: <i><FontAwesomeIcon icon={faHouse} /></i>
    },
    {
        id: 2,
        title: "A propos",
        link: "#about",
        icon: <i><FontAwesomeIcon icon={faUser} /></i>
    },
    {
        id: 3,
        title: "Compétences",
        link: "#skills",
        icon: <i><FontAwesomeIcon icon={faBriefcase} /></i>
    },
    {
        id: 4,
        title: "Projets",
        link: "#projects",
        icon: <i><FontAwesomeIcon icon={faDesktop} /></i>
    },
    {
        id: 5,
        title: "Contact",
        link: "#contact",
        icon: <i><FontAwesomeIcon icon={faEnvelope} /></i>
    }
];

export default menuItems;
