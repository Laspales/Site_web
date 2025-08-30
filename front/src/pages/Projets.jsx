import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiFillHtml5 } from "react-icons/ai";
import { SiCss3, SiPhp, SiTypescript, SiMysql, SiSocketdotio } from "react-icons/si";
import { IoLogoJavascript, IoLogoLaravel } from "react-icons/io5";
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { RiNodejsLine } from "react-icons/ri";
import { FiTerminal } from "react-icons/fi";
import ProjectCarousel from "./ProjectCarousel";
import "./pages-css/Projets-Style.css";

// Styles personnalisés pour chaque techno 
const technologyStyles = {
    html: { backgroundColor: "#ffe8e8", color: "#e34c26" },
    css: { backgroundColor: "#e0f7ff", color: "#264de4" },
    javascript: { backgroundColor: "#fff8dc", color: "#f0db4f" },
    php: { backgroundColor: "#e8e8ff", color: "#4f5b93" },
    laravel: { backgroundColor: "#fcebea", color: "#d9230f" },
    mysql: { backgroundColor: "#e5f7e7", color: "#00758f" },
    nodejs: { backgroundColor: "#e6ffe6", color: "#3c873a" },
    socketio: { backgroundColor: "#f4f4f4", color: "#010101" },
    typescript: { backgroundColor: "#f0f8ff", color: "#3178c6" }
};

// Icônes associées à chaque techno
const technologyIcons = {
    html: <AiFillHtml5 />,
    css: <SiCss3 />,
    javascript: <IoLogoJavascript />,
    php: <SiPhp />,
    laravel: <IoLogoLaravel />,
    nodejs: <RiNodejsLine />,
    typescript: <SiTypescript />,
    mysql: <SiMysql />,
    socketio: <SiSocketdotio />
};

// Normalisation des noms et styles
const normalizeTechnologies = (techList) =>
    techList.map((tech) => {
        const name = tech.name || tech;
        const key = name.toLowerCase().replace(/\s/g, "").replace(/\./g, "");
        return {
            name,
            key,
            style: technologyStyles[key] || { backgroundColor: "#f0f0f0", color: "#000" }
        };
    });

const projects = [
    {
        name: "bubbletea",
        description: (
            <>
                Site e-commerce pour Bubble Tea avec gestion des commandes et espace admin.
                Paiement en ligne disponible.
            </>
        ),
        technologies: normalizeTechnologies([
            "Laravel", "JavaScript", "PHP", "HTML", "CSS", "MySQL"
        ]),
        images: [
            "/images/images_projets/bubbletea/image6.png",
            "/images/images_projets/bubbletea/image4.png",
            "/images/images_projets/bubbletea/image2.png",
            "/images/images_projets/bubbletea/image3.png",
            "/images/images_projets/bubbletea/image5.png",
            "/images/images_projets/bubbletea/image01.png",
            "/images/images_projets/bubbletea/Capture_decran_31.png"
        ]
    },
    {
        name: "irc",
        description: (
            <>
                Chat en temps réel avec salons, notifications et gestion des utilisateurs connectés.
            </>
        ),
        technologies: normalizeTechnologies([
            "NodeJS", "JavaScript", "HTML", "CSS", "Socket.io"
        ]),
        images: [
            "/images/images_projets/irc/irc0.png",
            "/images/images_projets/irc/irc1.png",
            "/images/images_projets/irc/irc2.png",
            "/images/images_projets/irc/irc3.png",
        ]
    },
    {
        name: "premier portfolio",
        description: (
            <>
                Portfolio dynamique avec formulaire de contact et présentation de projets.
            </>
        ),
        technologies: normalizeTechnologies([
            "HTML", "CSS", "Laravel", "PHP", "MySQL"
        ]),
        images: [
            "images/images_projets/portfolio/pf0.png",
            "images/images_projets/portfolio/pf1.png",
            "images/images_projets/portfolio/pf2.png",
            "images/images_projets/portfolio/pf3.png",
        ]
    },
    {
        name: "my hyrule castle",
        description: (
            <>
                Mini-jeu web d’exploration avec graphismes rétro, inspiré du RPG Zelda.
            </>
        ),
        technologies: normalizeTechnologies([
            "TypeScript", "NodeJS"
        ]),
        images: [
            "/images/images_projets/hyrule_castle/hc0.png",
            "/images/images_projets/hyrule_castle/hc1.png",
            "/images/images_projets/hyrule_castle/hc2.png",
        ]
    }
];

function Projets() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 1100);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const [direction, setDirection] = useState(0); // -1 = prev, +1 = next

    const handleNav = (dir) => {
        setDirection(dir === "next" ? 1 : -1);
        setCurrentIndex((prev) =>
            dir === "next"
                ? (prev + 1) % projects.length
                : (prev - 1 + projects.length) % projects.length
        );
    };


    return (
        <div className="App-Projets">
            <h1> <sub><FiTerminal  style={{width:"70px", height: "70px"}}/></sub>Mes projets</h1>

            <div className="projet-container">
                {!isMobile && (
                    <div className="nav-arrows">
                        <button className="prev" onClick={() => handleNav("prev")}>
                            <motion.span
                                initial={{ scale: 1 }}
                                whileHover={{ scale: 1.5 }}
                                transition={{ duration: 0.3 }}
                            >
                                <MdKeyboardDoubleArrowLeft />
                            </motion.span>

                        </button>
                        <button className="next" onClick={() => handleNav("next")}>
                            <motion.span
                                initial={{ scale: 1 }}
                                whileHover={{ scale: 1.5 }}
                                transition={{ duration: 0.3 }}
                            >
                                <MdKeyboardDoubleArrowRight />
                            </motion.span>
                        </button>
                    </div>
                )}
                {isMobile
                    ? projects.map((project) => (
                        <div key={project.name} className="conteneur-slider">
                            <div className="description">
                                <h3 className="titre">{project.name}</h3>
                                <p className="desc">{project.description}</p>
                                <ul className="techno">
                                    {project.technologies.map((tech, idx) => {
                                        const Icon = technologyIcons[tech.key];
                                        return (
                                            <motion.li
                                                key={idx}
                                                className="tec"
                                                data-label={tech.name}
                                                initial={{ scale: 1 }}
                                                animate={{ scale: [1, 1.2, 1] }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    repeatType: "loop",
                                                    ease: "easeInOut",
                                                    delay: idx * 0.6
                                                }}
                                                style={{
                                                    ...tech.style,
                                                    width: "42px",
                                                    height: "42px",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    borderRadius: "50%",
                                                    paddingTop: "5px",
                                                    fontSize: "1.5rem",
                                                    listStyle: "none",
                                                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                                                    position: "relative",
                                                    cursor: "default"
                                                }}
                                            >
                                                {Icon && <span>{Icon}</span>}
                                            </motion.li>
                                        );
                                    })}
                                </ul>
                            </div>
                            <div className="projet-image">
                                <ProjectCarousel images={project.images} />
                            </div>
                        </div>
                    ))
                    : (() => {
                        const currentProject = projects[currentIndex];
                        return (
                            <AnimatePresence mode="wait" custom={direction}>
                                <motion.div
                                    key={currentProject.name}
                                    custom={direction}
                                    initial={{
                                        opacity: 0,
                                        x: direction > 0 ? 50 : -50,
                                        rotateY: direction > 0 ? 30 : -30,
                                        scale: 0.9
                                    }}
                                    animate={{
                                        opacity: 1,
                                        x: 0,
                                        rotateY: 0,
                                        scale: 1
                                    }}
                                    exit={{
                                        opacity: 0,
                                        x: direction > 0 ? 200 : -200,
                                        rotateY: direction > 0 ? -30 : 30,
                                        scale: 0.9
                                    }}
                                    transition={{
                                        duration: 0.35,
                                        ease: "easeInOut"
                                    }}
                                    className="conteneur-slider"
                                    style={{ perspective: 4000 }}
                                >
                                    <div className="description">
                                        <h3 className="titre">{currentProject.name}</h3>
                                        <p className="desc">{currentProject.description}</p>
                                        <ul className="techno">
                                            {currentProject.technologies.map((tech, idx) => {
                                                const Icon = technologyIcons[tech.key];
                                                return (
                                                    <motion.li
                                                        key={idx}
                                                        className="tec"
                                                        data-label={tech.name}
                                                        initial={{ scale: 1 }}
                                                        animate={{ scale: [1, 1.2, 1] }}
                                                        transition={{
                                                            duration: 2,
                                                            repeat: Infinity,
                                                            repeatType: "loop",
                                                            ease: "easeInOut",
                                                            delay: idx * 0.6,
                                                        }}
                                                        style={{
                                                            ...tech.style,
                                                            width: "42px",
                                                            height: "42px",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            borderRadius: "50%",
                                                            paddingTop: "5px",
                                                            fontSize: "1.5rem",
                                                            listStyle: "none",
                                                            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                                                            position: "relative",
                                                            cursor: "default"
                                                        }}
                                                    >
                                                        {Icon && <span>{Icon}</span>}
                                                    </motion.li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                    <div className="projet-image">
                                        <ProjectCarousel images={currentProject.images} />
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        );
                    })()}
            </div>


        </div>
    );
}

export default Projets;
