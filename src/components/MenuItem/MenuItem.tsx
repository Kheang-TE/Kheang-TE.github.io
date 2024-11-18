import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import {closeSidebar} from "../../pages/_partials/header/Header";

function MenuItem({...props}) {
    return (
        // <li className={props.link === '#home' ? 'active' : ''}>
        //     <a href={props.link} onClick={toLink}>{props.icon}{props.children}<i><FontAwesomeIcon icon={faChevronRight} /></i></a>
        // </li>
        <li className={props.link === '#home' ? 'active' : ''}>
            <a href={props.link} onClick={toLink}>{props.icon}{props.children}<i><FontAwesomeIcon icon={faChevronRight} /></i></a>
        </li>
    )
}

function toLink(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    const link : string | any = e.currentTarget.getAttribute("href");
    removeActive();
    e.currentTarget.parentElement?.classList.add('active');

    // Scroll to target
    const target = document.querySelector(link);
    target?.scrollIntoView({behavior: 'smooth'});

    closeSidebar();
}

function removeActive(): void {
    const sidebar = document.querySelector('.sidebar');
    sidebar?.querySelectorAll('li').forEach(item => item.classList.remove('active'));
}



export default MenuItem;