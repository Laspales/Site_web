import React, { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCarousel from "./ProjectCarousel";
import "./pages-css/Projets-Style.css";

// Liste des projets à afficher dans le portfolio.
// Chaque projet contient un nom, une description, les technologies utilisées et un tableau d'images.
const projects = [
    {
        name: "bubbletea",
        description: "Site e-commerce pour Bubble Tea avec gestion des commandes et espace admin. Paiement en ligne disponible.",
        technologies: ["laravel", "javascript","php", "html", "css", "mysql"],
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
        description: "Chat en temps réel avec salons, notifications et gestion des utilisateurs connectés.",
        technologies: ["nodejs", "javascript", "html", "css", "socket.io"],
        images: [
            "/images/images_projets/irc/irc0.PNG",
            "/images/images_projets/irc/irc1.PNG",
            "/images/images_projets/irc/irc2.PNG",
            "/images/images_projets/irc/irc3.PNG",
        ]
    },
    {
        name: "premier portfolio",
        description: "Portfolio dynamique avec formulaire de contact et présentation de projets.",
        technologies: ["html", "css", "laravel", "php", "mysql"],
        images: [
            "images/images_projets/portfolio/pf0.PNG",
            "images/images_projets/portfolio/pf1.PNG",
            "images/images_projets/portfolio/pf2.PNG",
            "images/images_projets/portfolio/pf3.PNG",
     ]
    },
    {
        name: "my hyrule castle",
        description: "Mini-jeu web d’exploration avec graphismes rétro.",
        technologies: ["typescript","nodejs"],
        images: [
            "/images/images_projets/hyrule_castle/hc0.PNG",
            "/images/images_projets/hyrule_castle/hc1.PNG",
            "/images/images_projets/hyrule_castle/hc2.PNG",
        ]
    }
];

function Projets() {
    // currentIndex gère l'index du projet actuellement affiché
    const [currentIndex, setCurrentIndex] = useState(0);

    // Fonction de navigation pour passer au projet suivant ou précédent
    // Utilise un modulo pour boucler sur la liste des projets
    const handleNav = (direction) => {
        setCurrentIndex((prev) =>
            direction === "next"
                ? (prev + 1) % projects.length
                : (prev - 1 + projects.length) % projects.length
        );
    };

    // Récupère le projet courant à afficher
    const currentProject = projects[currentIndex];

    return (
        <div className="App-Projets">
            {/* Titre principal de la page */}
            <h1>Mes projets...</h1>

            {/* Animation de transition entre les projets avec framer-motion */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentProject.name}
                    initial={{ opacity: 0, x: 0 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 0 }}
                    transition={{ duration: 0.02 }}
                    className="conteneur-slider"
                >
                    {/* Description et technologies du projet courant */}
                    <div className="description">
                        <span className="titre">{currentProject.name}</span>
                        <p className="desc">{currentProject.description}</p>
                        <span className="titre">technologies</span>
                        <ul className="techno">
                            {/* Affichage dynamique des technologies utilisées */}
                            {currentProject.technologies.map((tech, index) => (
                                <li key={index} className="tec"><span>{tech}</span></li>
                                
                            ))}
                             
                        </ul>
                    </div>
                    {/* Carousel d'images du projet courant */}
                    <div className="projet-image">
                        <ProjectCarousel images={currentProject.images} />
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Flèches de navigation pour changer de projet */}
            <div className="nav-arrows">
                <button className="prev" onClick={() => handleNav("prev")}> <BsArrowLeft /> </button>
                <button className="next" onClick={() => handleNav("next")}> <BsArrowRight /> </button>
            </div>
        </div>
    );
}

export default Projets;
