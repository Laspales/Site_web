import React, { useState, useEffect } from "react";
import { color, motion } from "framer-motion";
import TypewriterText from './textman';
import './Section-Style.css';
import Animtext from "./animtext";

function Section() {
    const [showFrespo, setShowFrespo] = useState(false);
    {/* animation texte */}

   

    {/* fin de la fonction */}
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
                    <span className="bracket">&lt;</span>
                    <Animtext texts={["Web", "Fullstack"]} delay={3000} className="grey"/>
                    <span className="bracket">/&gt;</span>
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
                                scale: [1, 1.1, 1],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: 4,
                                repeatType: "loop",
                                ease: "easeInOut"
                            }}

                        />
                    </motion.div>
                </div>
                <div id="trespo">
                    <TypewriterText
                        text={[
                            { content: "const ", className: "key" },
                            { content: "moi", className: "var" },
                            { content: " = {", className: "bracket" },

                            { content: "\n  nom: ", className: "propriete" },
                            { content: '"EPALLA NDJALLA Badouel Laspales"', className: "string" },

                            { content: ",\n  date_de_naissance: ", className: "propriete" },
                            { content: '2001-01-18T04:00:00Z', className: "number" },

                            { content: ",\n  origine: ", className: "propriete" },
                            { content: '🇨🇲', className: "string" },

                            { content: ",\n  profil: ", className: "propriete" },
                            { content: '"👨‍💻 Développeur Fullstack"', className: "string" },

                            { content: ",\n  domaines: ", className: "propriete" },
                            { content: '"💻 Web, 🚀 UX & 🎨 Créativité"', className: "string" },

                            { content: ",\n  devise: ", className: "propriete" },
                            { content: '"Comme le code, la vie demande des itérations pour atteindre la perfection.🤞🏽🪐"', className: "string" },

                            { content: "\n};", className: "bracket" }
                        ]}
                        onFinish={() => setShowFrespo(true)}
                    />
                    {showFrespo && (
                        <TypewriterText
                            text={[
                                { content: "{", className: "bracket" },
                                { content: "/* 🐛 Aucun bug n’a été maltraité (pour l’instant) */ ", className: "cmmt" },
                                { content: "}", className: "bracket" }
                            ]}
                            speed={50}
                        />
                    )}
                </div>

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
                    <Animtext texts={["Badouel", "Laspales"]}  delay={5000} className="redc"/> <br />
                    <span className="grey">Epalla</span>&nbsp;
                    <span>Ndjalla</span>
                </motion.h1>
            </div>


        </div>
    );
}

export default Section;
