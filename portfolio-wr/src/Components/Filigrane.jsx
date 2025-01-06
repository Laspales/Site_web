import React from "react";
import { DiLaravel } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { BsDatabaseFill } from "react-icons/bs";
import { IoLayersSharp } from "react-icons/io5";
import './Filigrane-Style.css'

function Filigrane() {
    return (
        <div className="Fili">
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
        </div>
    );
}

export default Filigrane;