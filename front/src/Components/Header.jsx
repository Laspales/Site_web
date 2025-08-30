import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import "./Header-Style.css";

function Header({ toggleTheme }) {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);
    const [showPulse, setShowPulse] = useState(false);
    const [pulsePlayed, setPulsePlayed] = useState(false);
    const [isDark, setIsDark] = useState(false);

    const isActive = (path) => (location.pathname === path ? "active" : "");

    const handleToggleMenu = () => {
        setMenuOpen(!menuOpen);
        setShowPulse(false);
        setPulsePlayed(true);
    };

    const closeMenu = () => setMenuOpen(false);

    useEffect(() => {
        if (!menuOpen && !pulsePlayed) {
            const timer = setTimeout(() => setShowPulse(true), 7200);
            return () => clearTimeout(timer);
        }
    }, [menuOpen, pulsePlayed]);

    const handleToggleTheme = () => {
        toggleTheme();           
        setIsDark(!isDark);      
    };
    return (
        <header className="App-header">
            <nav className="navbar">
                <div className="logo">
                    <Link to="/" onClick={closeMenu}>
                        <img
                            src="/images/LA_logo.png"
                            alt="Logo"
                            width="95px"
                            height="80px"
                        />
                    </Link>
                </div>

                {/* Bouton menu */}
                <div
                    className={`menu-toggle ${menuOpen ? "open" : ""}`}
                    onClick={handleToggleMenu}
                >
                    <motion.div
                        initial={{ rotate: 0 }}
                        animate={{
                            rotate: menuOpen
                                ? 90
                                : showPulse
                                    ? [0, -8, 8, -6, 6, -3, 3, 0]
                                    : 0,
                        }}
                        transition={{
                            rotate:
                                showPulse && !menuOpen
                                    ? { duration: 0.8, repeat: Infinity, ease: "easeInOut" }
                                    : { duration: 0.4 },
                        }}
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            transformOrigin: "50% 50%",
                        }}
                    >
                        {menuOpen ? <IoCloseOutline size={30} /> : <CiMenuBurger size={30} />}
                    </motion.div>


                </div>

                {/* Navigation */}
                <div className="linear">
                    <ul className={`line ${menuOpen ? "active" : ""}`}>
                        <li className={`nv ${isActive("/")}`}>
                            <Link to="/" onClick={closeMenu}>
                                Accueil
                            </Link>
                        </li>
                        <li className={`nv ${isActive("/apropos")}`}>
                            <Link to="/apropos" onClick={closeMenu}>
                                À propos
                            </Link>
                        </li>
                        <li className={`nv ${isActive("/projets")}`}>
                            <Link to="/projets" onClick={closeMenu}>
                                Projets
                            </Link>
                        </li>
                        <li className={`nv ${isActive("/contact")}`}>
                            <Link to="/contact" onClick={closeMenu}>
                                Contact
                            </Link>
                        </li>
                        <li className="nv">
                            <motion.li
                                initial = {{ rotate: 0 }}
                                whileTap = {{ rotate: 360 }}
                                transition = {{ duration: 0.5 }}
                            >
                                {isDark ? (
                                    <CiLight size={20} onClick={handleToggleTheme} style={{ cursor: 'pointer' }} />
                                ) : (
                                    <CiDark size={20} onClick={handleToggleTheme} style={{ cursor: 'pointer' }} />
                                )}
                            </motion.li>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;
