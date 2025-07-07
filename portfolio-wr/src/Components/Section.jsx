import React from "react";
import { motion } from "framer-motion";
import './Section-Style.css'

function Section() {

    return (
        <div className="App-Section">

            <div className="title">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1,
                        ease: "easeInOut"
                    }}
                >
                    Développeur <br /><span className="grey">Web</span>
                    
                </motion.h1>
                    
            </div>
            <div id="trespo">
                    <p>bonjour, je m'appelle <span>epalla ndjalla </span>
                        Badouel Laspales. Je suis un apprenti développeur Web Fullstack </p> 
            </div>
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
                        width="210px"
                        height="190px"
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
            <div className="Surname">
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1,
                        ease: "easeInOut"
                    }}
                >
                    Laspales <br /><span className="grey">epalla</span>&nbsp;<span>ndjalla</span>
                </motion.h1>
                
            </div>
            <div id="frespo">
                    <p >et je vous souhaite la bienvenue sur mon portfolio.</p>
            </div>
        </div>
    );


}

export default Section;