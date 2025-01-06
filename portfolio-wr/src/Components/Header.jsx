import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaCircleHalfStroke } from "react-icons/fa6";
import './Header-Style.css'
function Header({ toggleTheme }) {

    const location = useLocation();
    const isActive = (path) => location.pathname === path ? "active" : "";

    return (
        <header className="App-header">
            <nav className="navbar">
                <div className="linear">
                    <ul className="line">
                        <li className={`logo ${isActive("/")}`} ><Link to="\" ></Link><a href="/"><img src="./LA_logo.png" alt="image" width="60px" height="50px" /></a></li>
                        <li className={`nv ${isActive("/")}`}><Link to="/">Accueil</Link></li>
                        <li className={`nv ${isActive("/projets")}`}><Link to="/projets">Projets</Link></li>
                        <li className={`nv ${isActive("/apropos")}`}><Link to="/apropos">À propos</Link></li>
                        <li className={`nv ${isActive("/contact")}`}><Link to="/contact">Contact</Link></li>
                        <li className="theme" onClick={toggleTheme}><FaCircleHalfStroke /></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;