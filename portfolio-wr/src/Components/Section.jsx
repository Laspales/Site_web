import React from "react";
import './Section-Style.css'
import { DiLaravel } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { BsDatabaseFill } from "react-icons/bs";
import { IoLayersSharp } from "react-icons/io5";
function Section() {

    return (
        <div className="App-Section">
            <div className="fili1">
                <DiLaravel />
            </div>
            <div className="fili2">
                <DiReact />
            </div>
            <div className="fili3">
                <DiJavascript1 />
            </div>
            <div className="fili4">
                <BsDatabaseFill />
            </div>
            <div className="fili5">
                <IoLayersSharp />
            </div>
            <div className="title">
                <h1>Développeur <br /> Web</h1>
            </div>
            <div className="image">
                     <img src="./LA_logo.png" alt="image" width="220px" height="200px" />
            </div>
            <div className="Surname">
                <h1>Laspales <br /><span>epalla ndjalla</span></h1>
            </div>
        </div>
    );


}

export default Section;