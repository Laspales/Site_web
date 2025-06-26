import React from "react";
import { IoSchoolOutline } from "react-icons/io5";
import { PiBookBookmarkThin } from "react-icons/pi";
import { CiMusicNote1 } from "react-icons/ci";
import { PiSoccerBallThin } from "react-icons/pi";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { CiFaceSmile } from "react-icons/ci";
import { motion } from "framer-motion";
import './pages-css/APropos-Style.css';

const items = [
    {
        icon: <IoSchoolOutline />,
        text: "Apprenti ingénieur en Software Engineering à l'ESIEA avec une préférence pour le développement Full Stack."
    },

    {
        icon: <IoExtensionPuzzleOutline />,
        text: "Je m'intéresse à l’histoire, notamment la Seconde Guerre mondiale, la Guerre froide et l’histoire du Cameroun, la décolonisation de l'Afrique Noire à travers documentaires et lectures."
    },

    {
        icon: <PiBookBookmarkThin />,
        text: "J’apprécie les récits d'aventure, de mystère et d’analyse. Les romans d’Arsène Lupin de Maurice Leblanc m’ont marqué. Je lis aussi des anthologies africaines et je suis fan de mangas, surtout de One Piece."
    },

    {
        icon: <PiSoccerBallThin />,
        text: "Le football est ma passion, je le pratique autant que je le suis. J’aime aussi le vélo et le badminton, pour leur dynamisme et leurs bienfaits physiques."
    },
    {
        icon: <CiMusicNote1 />,
        text: "La musique est essentielle pour moi, j'écoute de tout, mais j'ai une préférence pour la musique classique"
    }
];

function APropos() {
    return (
        <div className="App-Apropos">
            <div className="Apropos-Title">
                <h1>À propos de moi </h1>
            </div>
            <div className="timeline-container">
                <div className="profile-image">
                    <motion.img
                        src="/images/profile_images/profile-pic (2).png"
                        alt="Profile"
                        width={"180px"}
                        height={"180px"}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1}}
                        transition={{ duration: 3, type: "spring", stiffness: 150, damping: 100 }}
                        whileHover={{ scale: 1.15, transition: { duration: 0.2 } }}
                    />

                </div>
                {items.map((item, index) => (
                    <div className="timeline-item" key={index}>
                        <motion.div
                            className="timeline-icon"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: index * 0.3, duration: 4, type: "spring", stiffness: 150, damping: 100 }}
                            whileHover={{ scale: 1.15, rotate: 360, transition: { duration: 0.35 } }}
                        >
                            {item.icon}
                        </motion.div>
                        <motion.div
                            className="timeline-content"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.3 + 0.1, duration: 0.5 }}
                            whileHover={{ scale: 1.02, color: "white", backgroundColor: "black", transition: { duration: 0.35 } }}
                        >
                            <p>{item.text}</p>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default APropos;
