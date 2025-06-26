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
                <motion.img
                    src="/images/LA_logo.png"
                    alt="Laspales Image"
                    width="230px"
                    height="210px"
                    initial={{ scale: 1 }}
                    animate={{
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut"
                    }}
                    style={{ borderRadius: "12px" }}
                />

            </div>
            <div className="Surname">
                <h1>Laspales <br /><span>epalla ndjalla</span></h1>
            </div>

        </div>
    );


}

export default Section;