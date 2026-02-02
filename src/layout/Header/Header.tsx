import "./Header.scss";
import menuItems from '../../constants/menuItems';
import MenuItem from '../../components/navigation/MenuItem/MenuItem';
import Footer from '../Footer/Footer';
import { useScrollPosition } from '../../hooks';
import { MouseEvent, useCallback } from "react";

function activeNav(event: MouseEvent<HTMLButtonElement>): void {
    event.currentTarget?.classList.toggle("active");
    const nav = document.querySelector(".sidebar");
    nav?.classList.toggle("active");
}

export function closeSidebar(): void {
    // Button to close sidebar
    const btn = document.querySelector('.btn_nav');
    btn?.classList.remove('active');

    // Close sidebar
    const sidebar = document.querySelector('.sidebar');
    sidebar?.classList.remove('active');
}

function Header() {
    const { activeSection } = useScrollPosition();

    return (
        <header>
            <button className="btn_nav" type="button" onClick={activeNav}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <nav className="sidebar">
                <ul>
                    {menuItems.map(item => (
                        <MenuItem 
                            key={item.id} 
                            link={item.link} 
                            icon={item.icon} 
                            className={activeSection === item.link ? "active" : ""}
                        >
                            {item.title}
                        </MenuItem>
                    ))}
                </ul>
                <Footer />
            </nav>
        </header>
    );
}

export default Header;
