import React from "react";
import './Section-Style.css'

function Section() {

    return (
        <div className="App-Section">
            
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