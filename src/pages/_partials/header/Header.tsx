import MenuItem from "../../../components/MenuItem/MenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHouse, faUser, faBriefcase, faDesktop, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import Footer from "../footer/Footer";
import "./Header.scss";
import { MouseEvent } from "react";

const menu = [
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

function activeNav(event: MouseEvent<HTMLButtonElement>): void{
    event.currentTarget?.classList.toggle("active");
    const nav = document.querySelector(".sidebar");
    nav?.classList.toggle("active");
}

export function closeSidebar(): void{
    // Button to close sidebar
    const btn = document.querySelector('.btn_nav');
    btn?.classList.remove('active');

    // Close sidebar
    const sidebar = document.querySelector('.sidebar');
    sidebar?.classList.remove('active');
}

function Header() {
  return (
    <header>
        <button className="btn_nav" type="button" onClick={activeNav}>
            <span></span>
            <span></span>
            <span></span>
        </button>
        <nav className="sidebar">
            <ul>
                {menu.map(item => <MenuItem key={item.id} children={item.title} link={item.link} icon={item.icon} />)}
            </ul>
            <Footer />
        </nav>
    </header>
  );
}

export default Header;