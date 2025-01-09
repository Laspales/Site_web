import React from "react";
import { IoFootball } from "react-icons/io5";
import { FcReading } from "react-icons/fc";
import { FcMusic } from "react-icons/fc";
import { PiCodeFill } from "react-icons/pi";
import { FcOldTimeCamera } from "react-icons/fc";
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
                <div className="circle">
                    <div className="circlea"><IoFootball style={{fontSize: '50px', color: '#111'}}/></div>
                    <div className="circleb"><FcReading style={{fontSize: '50px'}}/></div>
                    <div className="circlec"><FcMusic style={{fontSize: '50px' }}/></div>
                    <div className="circled"><PiCodeFill style={{color : '#333', fontSize: '50px'}}/></div>
                    <div className="circlee"><FcOldTimeCamera style={{fontSize: '50px'}}/></div>
                    <div className="circlef"><PiDogFill style={{color : 'Orange', fontSize: '50px'}}/></div>
                </div>
            </div>
            <div className="Surname">
                <h1>Laspales <br /><span>epalla ndjalla</span></h1>
            </div>

        </div>
    );


}

export default Section;