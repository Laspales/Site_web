import React from "react";
import { FaCircleHalfStroke } from "react-icons/fa6";
import './Header-Style.css'
function Header({ toggleTheme }) {
    return (
        <header className="App-header">
            <nav className="navbar">
                <div className="linear">
                    <ul className="line">
                        <li className="logo"><a href="/"><img src="./LA_logo.png" alt="image" width="60px" height="50px" /></a></li>
                        <li className="nv"><a href="/">Accueil</a></li>
                        <li className="nv"><a href="/">Projets</a></li>
                        <li className="nv"><a href="/">à propos</a></li>
                        <li className="nv"><a href="/">Contact</a></li>
                        <li className="theme" onClick={toggleTheme}><FaCircleHalfStroke /></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;