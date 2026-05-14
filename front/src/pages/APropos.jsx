import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiTerminal } from "react-icons/fi";
import TypewriterText from '../Components/textman';
import './pages-css/APropos-Style.css';

const items = [
    {
        icon: "🎓",
        text: (
            <>
                Apprenti ingénieur en <strong>Software Engineering</strong>  en transition vers le métier de <strong>Product Owner</strong>. Profil hybride :
                solide background technique et passion pour la <strong>gestion de produit</strong>,
                l'UX et le lien entre équipes tech et métier.
            </>
        )
    },
    {
        icon: "💻",
        text: (
            <>
                <strong>Compétences produit :</strong> Backlog management, user stories, priorisation MoSCoW/RICE,
                roadmap, Jira, Confluence, Notion, Figma (lecture)<br />
                <strong>Méthodes :</strong> Agile Scrum, sprints, rituels, PSM I (en cours)<br />
                <strong>Technique :</strong> React.js, TypeScript, Node.js, HTML5/CSS3 — lecture et compréhension du code
            </>
        )
    },

    {
        icon: "📚",
        text: (
            <>
                J’apprécie les récits d'<strong>aventure</strong>, de <strong>mystère</strong> et d’<strong>analyse</strong>.
                Les romans d’<strong>Arsène Lupin</strong> le gentleman cambrioleur de
                Maurice Leblanc. Je lis aussi des <strong>anthologies africaines</strong> et
                je suis fan de <strong>mangas</strong>, surtout de One Piece, Dragon Ball, Naruto et HunterxHunter.
            </>
        )
    },
    {
        icon: "🧩",
        text: (
            <>
                Je m'intéresse à <strong>l’histoire</strong>, notamment la <strong>Seconde Guerre mondiale</strong>,
                l’histoire du <strong>Cameroun</strong>, la <strong>décolonisation de l'Afrique Noire</strong> à travers
                documentaires et lectures. Je regarde aussi des documentaires sur <strong>les animaux </strong> et
                d'autres vidéos sur <strong>Youtube</strong>.
            </>
        )
    },
    {
        icon: "🎶",
        text: (
            <>
                J'adore la <strong>musique</strong>, j'en écoute quotidiennement et différents styles. Ceux que j'écoute le plus sont
                le <strong>hip-hop/rap</strong>, le <strong>easy listening orchestral</strong> de <strong>Paul Mauriat</strong>,
                le <strong> new age</strong>, la <strong>chanson française littéraire</strong> de <strong>Georges Brassens </strong>
                mais aussi des <strong>chansons romantiques</strong> de <strong>Julio Iglesias</strong>.
            </>
        )
    },
    {
        icon: "⚽",
        text: (
            <>
                Le <strong>football</strong> est ma passion, je le pratique autant que je le suis. Je suis supporter du
                <strong> Bayern de Munich</strong>. En dehors du football,
                j'aime pratiquer le <strong>badminton</strong> et faire du <strong>vélo</strong>.
            </>
        )
    }
];

const itemsReact = [
    [
        { content: "const ", className: "key" },
        { content: "apprentissage", className: "var" },
        { content: " = {", className: "bracket" },
        { content: "\n  icon: ", className: "propriete" },
        { content: '"🎓"', className: "string" },
        { content: ",\n  text: ", className: "propriete" },
        { content: '"Apprenti ingénieur en Software Engineering en transition vers le Product Ownership. Profil hybride tech & produit."', className: "string" },
        { content: "\n};", className: "bracket" }
    ],
    [
        { content: "const ", className: "key" },
        { content: "devSkills", className: "var" },
        { content: " = {", className: "bracket" },
        { content: "\n  icon: ", className: "propriete" },
        { content: '"💻"', className: "string" },
        { content: ",\n  text: ", className: "propriete" },
        { content: '"Produit : Backlog, User Stories, MoSCoW/RICE, Jira, Confluence, Agile Scrum | Tech : React.js, TypeScript, Node.js, HTML5/CSS3"', className: "string" },
        { content: "\n};", className: "bracket" }
    ],

    [
        { content: "const ", className: "key" },
        { content: "lectures", className: "var" },
        { content: " = {", className: "bracket" },
        { content: "\n  icon: ", className: "propriete" },
        { content: '"📚"', className: "string" },
        { content: ",\n  text: ", className: "propriete" },
        { content: '"J’apprécie les récits d’aventure, de mystère et d’analyse. Arsène Lupin, anthologies africaines, mangas (One Piece, Dragon Ball, Naruto, Hunter x Hunter)"', className: "string" },
        { content: "\n};", className: "bracket" }
    ],
    [
        { content: "const ", className: "key" },
        { content: "interets", className: "var" },
        { content: " = {", className: "bracket" },
        { content: "\n  icon: ", className: "propriete" },
        { content: '"🧩"', className: "string" },
        { content: ",\n  text: ", className: "propriete" },
        { content: '"Histoire (Seconde Guerre Mondiale, Cameroun, Décolonisation Afrique Noire), documentaires & YouTube"', className: "string" },
        { content: "\n};", className: "bracket" }
    ],
    [
        { content: "const ", className: "key" },
        { content: "musique", className: "var" },
        { content: " = {", className: "bracket" },
        { content: "\n  icon: ", className: "propriete" },
        { content: '"🎶"', className: "string" },
        { content: ",\n  text: ", className: "propriete" },
        { content: '"Hip-hop/Rap, Orchestral (Paul Mauriat), New Age, Georges Brassens, Julio Iglesias, Kenny G"', className: "string" },
        { content: "\n};", className: "bracket" }
    ],
    [
        { content: "const ", className: "key" },
        { content: "sports", className: "var" },
        { content: " = {", className: "bracket" },
        { content: "\n  icon: ", className: "propriete" },
        { content: '"⚽"', className: "string" },
        { content: ",\n  text: ", className: "propriete" },
        { content: '"Football (Bayern de Munich), Badminton, Vélo"', className: "string" },
        { content: "\n};", className: "bracket" }
    ]

];

function APropos() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 501);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 501);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="App-Apropos">
            <div className="Apropos-Title">
                <h1 style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <FiTerminal style={{ width: "70px", height: "70px" }} className="ter" />
                    <TypewriterText text={[{ content: "À propos de moi" }]} speed={100} />
                </h1>
            </div>

            <div className="timeline-container">
                <div className="profile-image">
                    <motion.img
                        src="/images/profile_images/profile-pic (2).png"
                        alt="Profile"
                        width={"170px"}
                        height={"170px"}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, type: "spring", stiffness: 300, damping: 100 }}
                        whileHover={{ scale: 1.10, transition: { type: "spring", stiffness: "300" } }}
                        className="profile-img"
                    />
                </div>

                {(isMobile ? itemsReact : items).map((item, index) => (
                    <div className="timeline-item" key={index}>
                        {!isMobile && (
                            <motion.div
                                className="timeline-icon"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: index * 0.5, duration: 6, type: "spring", stiffness: 150, damping: 100 }}
                                whileHover={{ scale: 1.15, rotate: 360, transition: { type: "spring", stiffness: "300" } }}
                                whileTap={{ scale: 0.9, rotate: 360, transition: { duration: 0.2 } }}
                            >
                                {item.icon}
                            </motion.div>
                        )}
                        <motion.div
                            className="timeline-content"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.4 + 0.3, duration: 1 }}
                            whileHover={{ scale: 1.05, color: "white", backgroundColor: "black", transition: { type: "spring", stiffness: 300 } }}
                            whileTap={{ scale: 0.95, color: "white", backgroundColor: "black", transition: { type: "spring", stiffness: 100 } }}
                        >
                            {isMobile
                                ? item.map((part, i) => (
                                    <span key={i} className={part.className}>
                                        {part.content}
                                    </span>
                                ))
                                : item.text}

                        </motion.div>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default APropos;
