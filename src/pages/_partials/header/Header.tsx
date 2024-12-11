import "./Header.scss";
import menu from "../../../assets/datas/menu";
import MenuItem from "../../../components/MenuItem/MenuItem";
import Footer from "../footer/Footer";
import { MouseEvent, useState } from "react";


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

    const [linkActive, setLinkActive] = useState('#home');

    const sections = () => {
        const sectionsAll = document.querySelectorAll('section');
        const sectionsPosition = Array.from(sectionsAll).map(section => (
            {
                id: section.id,
                top: section.getBoundingClientRect().top
            }
        ));
        return sectionsPosition;
    }
    

    window.addEventListener('scroll', () => {
        const limit = 300;
        const sectionsPosition = sections();
        sectionsPosition.forEach(section => {
            if(section.top <= limit && section.top + section.top >= 0 && linkActive !== `#${section.id}`){
                setLinkActive(`#${section.id}`);
            }
        });
    });

    return (
        <header>
            <button className="btn_nav" type="button" onClick={activeNav}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <nav className="sidebar">
                <ul>
                    {menu.map(item => <MenuItem key={item.id} children={item.title} link={item.link} icon={item.icon} className={(linkActive === item.link) ? "active": ""} />)}
                </ul>
                <Footer />
            </nav>
        </header>
    );
}

export default Header;