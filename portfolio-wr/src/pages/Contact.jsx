import React from "react";
import './pages-css/Contact-Style.css';
import { BsSend } from "react-icons/bs";

function Contact() {
    return (
        <div className="App-Contact">
            <div className="Contact-Title">
                <h1>Contact.</h1>
                <p>Contactez-moi ou envoyez-moi un email directement sur <b>badepalla09@gmail.com</b></p>
            </div>
            <div className="Contact-Form">
                <form method="POST">
 
                    <input id="name" className="ye" type="text"
                        name="name"
                        placeholder="Nom"
                        required autofocus autocomplete="name" />
                    <br /><br />
                    
                    <input id="email" className="ye" type="text"
                        name="email"
                        placeholder="Adresse mail"
                        required autofocus autocomplete="name" />
                    <br /><br />
                       
                    <textarea id="com" name="message" placeholder="Message"></textarea>
                    <br /><br />
                    <button type="submit" id="send">Envoyer</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;