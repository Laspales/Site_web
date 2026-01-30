import React from "react";
import { Link, useLocation } from "react-router-dom";
import { CiLinkedin } from "react-icons/ci";
import { VscGithubAlt } from "react-icons/vsc";
import { MdOutlineContactMail } from "react-icons/md";
import { TbFileCv } from "react-icons/tb";
import { motion } from "framer-motion";
import './Footer-Style.css';

function Footer() {
    const location = useLocation();
    const isAdminPage = location.pathname === "/admin";

    if (isAdminPage) return null;

    return (
        <div className="App-Footer">
            <footer>
                <ul>
                    <li>
                        <motion.li
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <a href="https://www.linkedin.com/in/badouel-epalla-9a5555254/" target="_blank" rel="noopener noreferrer">
                                <CiLinkedin />
                            </a>
                        </motion.li>
                    </li>
                    <li>
                        <motion.li
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <a href="https://github.com/Laspales" target="_blank" rel="noopener noreferrer">
                                <VscGithubAlt />
                            </a>
                        </motion.li>
                    </li>
                    <li>
                        <motion.li
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <Link to="/contact"><MdOutlineContactMail /></Link>
                        </motion.li>
                    </li>
                    <li className="fcv">
                        <motion.li
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <a href="/pdf/CV_BadEpalla_Liora.pdf" target="_blank" rel="noopener noreferrer">
                                <TbFileCv />
                            </a>
                        </motion.li>
                    </li>
                    <li id="cv">
                        <motion.li
                            initial={{ scale: 1 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <a
                                href="/pdf/CV_BadEpalla_Liora.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cv-button"
                            >
                                <span>Consulter mon CV</span>
                            </a>
                        </motion.li>
                    </li>
                </ul>
            </footer>
        </div>
    );
}

export default Footer;
