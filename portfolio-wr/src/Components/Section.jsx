import React from "react";
import { IoFootball } from "react-icons/io5";
import { GiRead } from "react-icons/gi";
import { GiMusicalNotes } from "react-icons/gi";
import { PiCodeFill } from "react-icons/pi";
import { IoCameraSharp } from "react-icons/io5";
import { PiDogFill } from "react-icons/pi";
import { motion } from "framer-motion";
import './Section-Style.css'

function Section() {
        
    return (
        <div className="App-Section">

            <div className="title">
                <h1>Développeur <br /><span style={{color : "grey"}}>Web</span> </h1>
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
                <h1>Laspales <br /><span style={{color: "grey"}}>epalla</span>&nbsp;<span>ndjalla</span></h1>
            </div>

        </div>
    );


}

export default Section;