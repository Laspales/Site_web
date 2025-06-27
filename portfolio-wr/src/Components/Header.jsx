import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaCircleHalfStroke } from "react-icons/fa6";
import { RiAdminLine } from "react-icons/ri";
import './Header-Style.css'
function Header({ toggleTheme }) {

    const location = useLocation();
    const isActive = (path) => location.pathname === path ? "active" : "";

    return (
        <header className="App-header">
            <nav className="navbar">
                <div className="linear">
                    <ul className="line">
                        <li className="logo" ><Link to="\" ></Link><a href="/"><sub><img src="/images/LA_logo.png" alt="image" width="95px" height="80px" /></sub></a></li>
                        <li className={`nv ${isActive("/")}`}><Link to="/">Accueil</Link></li>                   
                        <li className={`nv ${isActive("/apropos")}`}><Link to="/apropos">À propos</Link></li>
                        <li className={`nv ${isActive("/projets")}`}><Link to="/projets">Projets</Link></li>
                        <li className={`nv ${isActive("/contact")}`}><Link to="/contact">Contact</Link></li>
                        <li className={`nv ${isActive("/admin")}`} id="adm"><Link to="/admin"><RiAdminLine /></Link></li>
                        <li className="nv"><FaCircleHalfStroke  className="theme" onClick={toggleTheme} /></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;