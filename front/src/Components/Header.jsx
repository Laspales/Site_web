import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaCircleHalfStroke } from "react-icons/fa6";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import './Header-Style.css';

function Header({ toggleTheme }) {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    const isActive = (path) => location.pathname === path ? "active" : "";

    const handleToggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => setMenuOpen(false);

    return (
        <header className="App-header">
            <nav className="navbar">
                <div className="logo">
                    <Link to="/" onClick={closeMenu}>
                        <img src="/images/LA_logo.png" alt="Logo" width="95px" height="80px" />
                    </Link>
                </div>

                <div className={`menu-toggle ${menuOpen ? "open" : ""}`} onClick={handleToggleMenu}>
                    {menuOpen ? <IoCloseOutline size={30} /> : <RiMenu3Line size={30} />}
                </div>
                <div className="linear">
                    <ul className={`line ${menuOpen ? "active" : ""}`}>
                        <li className={`nv ${isActive("/")}`}><Link to="/" onClick={closeMenu}>Accueil</Link></li>
                        <li className={`nv ${isActive("/apropos")}`}><Link to="/apropos" onClick={closeMenu}>À propos</Link></li>
                        <li className={`nv ${isActive("/projets")}`}><Link to="/projets" onClick={closeMenu}>Projets</Link></li>
                        <li className={`nv ${isActive("/contact")}`}><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
                        <li className="nv">
                            <FaCircleHalfStroke className="theme" onClick={toggleTheme} />
                        </li>
                    </ul>
                </div>
                
            </nav>
        </header>
    );
}

export default Header;
