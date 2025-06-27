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
        text: (
            <>
                Apprenti ingénieur en <strong>Software Engineering</strong> à l'ESIEA avec une préférence pour le
                <strong> développement Full Stack</strong>.
            </>
        )
    },

       {
        icon: <PiBookBookmarkThin />,
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
        icon: <IoExtensionPuzzleOutline />,
        text: (
            <>  
            Je m'intéresse à <strong>l’histoire</strong>, notamment la <strong>Seconde Guerre mondiale</strong>, 
            l’histoire du <strong>Cameroun</strong>, la <strong>décolonisation de l'Afrique Noire</strong> à travers 
            documentaires et lectures. Je regarde aussi des documentaires sur <strong>les animaux </strong> et 
            d'autres documentaires et vidéos sur <strong>Youtube</strong>.
            </>
        )
    },

    {
        icon: <CiMusicNote1 />,
        text: (
            <>
                J'adore la <strong>musique</strong>, j'en écoute quotidiennement et différents styles. Ceux que j'écoute le plus sont 
                le <strong>hip-hop/rap</strong>, le <strong>easy listening orchestral</strong> de <strong>Paul Mauriat</strong>, 
                le <strong> new age</strong>, la <strong>chanson française littéraire</strong> de <strong>Georges Brassens </strong> 
                 mais aussi des <strong>chansons romantiques</strong> de <strong>Julio Iglesias</strong>.
            </>)
    },
    {
        icon: <PiSoccerBallThin />,
        text: (
            <>
            Le <strong>football</strong> est ma passion, je le pratique autant que je le suis. Je suis supporter du
            <strong> Bayern de Munich</strong> et aussi d'<strong>Arsenal</strong>. En dehors du football,
            j'aime pratiquer le <strong>badminton</strong> et faire du <strong>vélo</strong>.
            </>
        )
    },
   
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
                        animate={{ scale: 1 }}
                        transition={{ duration: 5, type: "spring", stiffness: 150, damping: 100 }}
                        whileHover={{ scale: 1.15, transition: { duration: 0.2 } }}
                    />

                </div>
                {items.map((item, index) => (
                    <div className="timeline-item" key={index}>
                        <motion.div
                            className="timeline-icon"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: index * 0.5, duration: 6, type: "spring", stiffness: 150, damping: 100 }}
                            whileHover={{ scale: 1.15, rotate: 360, transition: { duration: 0.35 } }}
                        >
                            {item.icon}
                        </motion.div>
                        <motion.div
                            className="timeline-content"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.4 + 0.3, duration: 1 }}
                            whileHover={{ scale: 1.05, color: "white", backgroundColor: "black", transition: { duration: 0.35 } }}
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
