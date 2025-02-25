import React from "react";
import { IoFootball } from "react-icons/io5";
import { GiRead } from "react-icons/gi";
import { GiMusicalNotes } from "react-icons/gi";
import { PiCodeFill } from "react-icons/pi";
import { IoCameraSharp } from "react-icons/io5";
import { PiDogFill } from "react-icons/pi";
import './Section-Style.css'

function Section() {

    return (
        <div className="App-Section">

            <div className="title">
                <h1>Développeur <br /> Web</h1>
            </div>
            <div className="image">
                <img src="/images/LA_logo.png" alt="image" width="210px" height="190px" />
                {/*
                <div className="circle">
                    <div className="circlea"><IoFootball style={{fontSize: '50px', color: 'black'}}/></div>
                    <div className="circleb"><GiRead style={{fontSize: '50px', color: 'black'}}/></div>
                    <div className="circlec"><GiMusicalNotes style={{fontSize: '50px', color: 'black'}}/></div>
                    <div className="circled"><PiCodeFill style={{color : 'black', fontSize: '50px'}}/></div>
                    <div className="circlee"><IoCameraSharp style={{fontSize: '50px', color: 'black'}}/></div>
                    <div className="circlef"><PiDogFill style={{color : 'black', fontSize: '50px'}}/></div>
                </div>
                */}
            </div>
            <div className="Surname">
                <h1>Laspales <br /><span>epalla ndjalla</span></h1>
            </div>

        </div>
    );


}

export default Section;