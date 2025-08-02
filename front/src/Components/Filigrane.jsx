import React from "react";
import { DiLaravel } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { BsDatabaseFill } from "react-icons/bs";
import { IoLayersSharp } from "react-icons/io5";
import { IoTerminalOutline } from "react-icons/io5";
import './Filigrane-Style.css'

function Filigrane() {
    return (
        <div className="Fili">
            <div className="fili-1">
                <DiLaravel />
            </div>
            <div className="fili-2">
                <DiReact />
            </div>
            <div className="fili-3">
                <DiJavascript1 />
            </div>
            <div className="fili-4">
                <BsDatabaseFill />
            </div>
            <div className="fili-5">
                <IoLayersSharp />
            </div>
            <div className="fili-6">
                <IoTerminalOutline />
            </div>
        </div>
    );
}

export default Filigrane;