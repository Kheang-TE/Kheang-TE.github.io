import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { closeSidebar } from "../../../layout";
import { useScrollToSection } from "../../../hooks";
import { ReactNode } from "react";

interface MenuItemProps {
    children: ReactNode;
    link: string;
    icon: ReactNode;
    className?: string;
}

function MenuItem({ children, link, icon, className = '' }: MenuItemProps) {
    const { scrollToSection } = useScrollToSection();

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        
        // Retirer la classe active de tous les items
        const sidebar = document.querySelector('.sidebar');
        sidebar?.querySelectorAll('li').forEach(item => item.classList.remove('active'));
        
        // Ajouter la classe active à l'item actuel
        e.currentTarget.parentElement?.classList.add('active');

        // Scroll vers la section
        scrollToSection(link);

        // Fermer la sidebar
        closeSidebar();
    };

    return (
        <li className={className}>
            <a href={link} onClick={handleClick}>
                {icon}
                {children}
                <i><FontAwesomeIcon icon={faChevronRight} /></i>
            </a>
        </li>
    );
}

export default MenuItem;
