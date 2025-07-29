import React from "react";
import { Link, useLocation } from "react-router-dom";
import { CiLinkedin } from "react-icons/ci";
import { VscGithubAlt } from "react-icons/vsc";
import { MdOutlineContactMail } from "react-icons/md";
import { CiFaceSmile } from "react-icons/ci";
import { TbFileCv } from "react-icons/tb";
import { motion } from "framer-motion";
import './Footer-Style.css'
function Footer() {
    return (
        <div className="App-Footer">
            <footer>
                <ul>
                        <li><a href="https://www.linkedin.com/in/aspales-epalla-ndjalla-9a5555254/" target="blank"><CiLinkedin /></a></li>
                        <li><a href="https://github.com/Laspales" target="blank"><VscGithubAlt /></a></li>
                        <li><Link to="/contact"><MdOutlineContactMail /></Link></li>
                        <li className="fcv"> <a href="/pdf/CV_Badouel_Epalla_DFE.pdf" target="_blank" rel="noopener noreferrer"><TbFileCv />
                            </a></li>
                    <li id="cv">
                        <motion.li
                            initial={{ scale: 1 }}
                            animate={{
                                scale: [1, 1.1, 1],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatType: "loop",
                                ease: "easeInOut"
                            }}

                        >
                            <a href="/pdf/CV_Badouel_Epalla_DFE.pdf" target="_blank" rel="noopener noreferrer">
                                <span>Voir mon cv</span><CiFaceSmile /><TbFileCv className="fcv"/>
                            </a>
                        </motion.li>

                    </li>

                </ul>
            </footer>
        </div>
    );
}

export default Footer;