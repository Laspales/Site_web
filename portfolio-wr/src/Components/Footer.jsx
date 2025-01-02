import React from "react";
import './Footer-Style.css'
import { CiLinkedin } from "react-icons/ci";
import { VscGithubAlt } from "react-icons/vsc";
import { TbFileCv } from "react-icons/tb";
import { MdOutlineContactMail } from "react-icons/md";
function Footer() {
    return (
        <div className="App-Footer">
            <footer>
                <ul>
                    <li><a href="https://www.linkedin.com/in/aspales-epalla-ndjalla-9a5555254/" target="blank"><CiLinkedin /></a></li>
                    <li><a href="https://github.com/Laspales" target="blank"><VscGithubAlt /></a></li>
                    <li><a href="/pdf/CV_Laspales_Epalla .pdf" target="blank"><TbFileCv /></a></li>
                    <li><a href=""><MdOutlineContactMail /></a></li>
                </ul>
            </footer>
        </div>
    );
}

export default Footer;