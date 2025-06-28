import React, { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import { AiFillHtml5 } from "react-icons/ai";
import { SiCss3, SiPhp, SiTypescript, SiMysql, SiSocketdotio } from "react-icons/si";
import { IoLogoJavascript, IoLogoLaravel } from "react-icons/io5";
import { RiNodejsLine } from "react-icons/ri";
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
            "/images/images_projets/irc/irc0.PNG",
            "/images/images_projets/irc/irc1.PNG",
            "/images/images_projets/irc/irc2.PNG",
            "/images/images_projets/irc/irc3.PNG",
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
            "images/images_projets/portfolio/pf0.PNG",
            "images/images_projets/portfolio/pf1.PNG",
            "images/images_projets/portfolio/pf2.PNG",
            "images/images_projets/portfolio/pf3.PNG",
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
            "/images/images_projets/hyrule_castle/hc0.PNG",
            "/images/images_projets/hyrule_castle/hc1.PNG",
            "/images/images_projets/hyrule_castle/hc2.PNG",
        ]
    }
];

function Projets() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNav = (direction) => {
        setCurrentIndex((prev) =>
            direction === "next"
                ? (prev + 1) % projects.length
                : (prev - 1 + projects.length) % projects.length
        );
    };

    const currentProject = projects[currentIndex];

    return (
        <div className="App-Projets">
            <h1>Mes projets</h1>

            <AnimatePresence mode="wait">
                <motion.div
                    key={currentProject.name}
                    initial={{ opacity: 0, x: 0 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 0 }}
                    transition={{ duration: 0.02 }}
                    className="conteneur-slider"
                >
                    <div className="description">
                        <h3 className="titre">{currentProject.name}</h3>
                        <p className="desc">{currentProject.description}</p>
                        <ul className="techno">
                            {currentProject.technologies.map((tech, index) => {
                                const Icon = technologyIcons[tech.key];
                                return (
                                    <motion.li
                                        initial={{ scale: 1 }}
                                        animate={{
                                            scale: [1, 1.2, 1],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            repeatType: "loop",
                                            ease: "easeInOut"
                                        }}
                                    >
                                        <li
                                            key={index}
                                            className="tec"
                                            data-label={tech.name}
                                            style={{
                                                ...tech.style,
                                                width: "42px",
                                                height: "42px",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                borderRadius: "50%",
                                                fontSize: "1.5rem",
                                                listStyle: "none",
                                                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                                                position: "relative",
                                                cursor: "default"
                                            }}
                                        >
                                            {Icon && <span>{Icon}</span>}
                                        </li>
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

            <div className="nav-arrows">
                <button className="prev" onClick={() => handleNav("prev")}>
                    <BsArrowLeft />
                </button>
                <button className="next" onClick={() => handleNav("next")}>
                    <BsArrowRight />
                </button>
            </div>
        </div>
    );
}

export default Projets; 