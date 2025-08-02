import React, { useState } from "react";
import { motion } from "framer-motion";
import TypewriterText from './textman';
import './Section-Style.css';

function Section() {
    const [showFrespo, setShowFrespo] = useState(false);
    return (
        <div className="App-Section">

            {/* Titre principal en haut à gauche */}
            <div className="title">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                >
                    Développeur <br />
                    <span className="grey">Web</span>
                </motion.h1>
            </div>

            {/* image et texte responsive (mobile) */}
            <div className="hiderespo">
                <div className="profile-imagesection">
                    <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 5, type: "spring", stiffness: 150, damping: 100 }}
                        whileHover={{ scale: 1.15, transition: { duration: 0.2 } }}
                     
                        
                    >
                    <motion.img
                        src="/images/profile_images/profile-pic (2).png"
                        alt="Profile"
                        width={"130px"}
                        height={"130px"}
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
                       
                    />
                    </motion.div>
                </div>
                <div id="trespo">
                    <TypewriterText text={`  Salut, moi c’est EPALLA NDJALLA Badouel Laspales, passionné de code et curieux de tout ce qui touche au web. Je crée avec passion et j’aime résoudre des problèmes. Bienvenue dans mon univers! Un portfolio qui reflète mon parcours, mes projets et ma passion pour le développement web`}
                        onFinish={() => setShowFrespo(true)}
                    />

                </div>
                {showFrespo && (
                    <div id="frespo">
                        <TypewriterText text={`  Commençons ----->`} />
                    </div>
                )}
            </div>

            {/* Image centrale */}
            <div className="image">
                <motion.div
                    className="image"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 1.5,
                        ease: "easeInOut"
                    }}
                >

                    <motion.img
                        src="/images/LA_logo.png"
                        alt="Laspales Image"
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

                    />
                </motion.div>
            </div>

            {/* Nom en bas à droite */}
            <div className="Surname">
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                >
                    Laspales <br />
                    <span className="grey">Epalla</span>&nbsp;
                    <span>Ndjalla</span>
                </motion.h1>
            </div>


        </div>
    );
}

export default Section;
