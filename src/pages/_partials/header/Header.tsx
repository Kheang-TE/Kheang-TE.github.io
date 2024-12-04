import "./Header.scss";
import menu from "../../../assets/datas/menu";
import MenuItem from "../../../components/MenuItem/MenuItem";
import Footer from "../footer/Footer";
import { MouseEvent } from "react";


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