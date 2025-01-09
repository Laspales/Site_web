import React from "react";
import './pages-css/Contact-Style.css';
import { BsSend } from "react-icons/bs";

function Contact() {
    return (
        <div className="App-Contact">
            <div className="Contact-Title">
                <h1>Contactez-moi</h1>
            </div>
            <div className="Contact-Form">
                <form method="POST">

                    <label for="name">nom</label>
                    <br />
                    <input id="name" className="ye" type="text"
                        name="name"
                        placeholder="Entrez votre nom"
                        required autofocus autocomplete="name" />
                    <br /><br />
                    <label for="email">email</label>
                    <br />
                    <input id="email" className="ye" type="text"
                        name="email"
                        placeholder="Entrez votre adresse mail"
                        required autofocus autocomplete="name" />
                    <br /><br />
                    <label for="commentaire">Commentaire</label>
                    <br />
                    <textarea id="com" name="commentaire" placeholder="Tapez votre commentaire..."></textarea>
                    <br /><br />
                    <button type="submit" id="send">Envoyez <sub><BsSend /></sub></button>
                </form>
            </div>
        </div>
    );
}

export default Contact;