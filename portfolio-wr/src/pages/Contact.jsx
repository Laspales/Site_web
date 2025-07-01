import React, { useState } from "react";
import './pages-css/Contact-Style.css';
import { RiMailSendLine } from "react-icons/ri";
import { motion } from "framer-motion";
import axios from "axios";

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5001/contact', formData);
            setStatus(response.data.message);
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            setStatus('Erreur lors de l\'envoi du message.');
        }
    };

    return (
        <div className="App-Contact">
            <div className="Contact-Title">
                <h1>Contact.</h1>
                <p>Contactez-moi ou envoyez-moi un email directement sur <b>badepalla09@gmail.com</b></p>
            </div>
            <div className="Contact-Form">
                <form onSubmit={handleSubmit}>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Nom"
                        required
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <br /><br />

                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Adresse mail"
                        required
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <br /><br />

                    <textarea
                        id="message"
                        name="message"
                        placeholder="Message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                    <br /><br />

                    <button type="submit" id="send">Envoyer</button>
                </form>
                {status && <p>{status}</p>}
            </div>
            {/* <div className="sendmail" style={{  width: "300px" }}>
                <motion.div
                    className="sendmail-icon-wrapper"
                    initial={{opacity: 0}}
                    animate={{ opacity: 1, x: ["-30%", "50%", "130%", "210%"] }} 
                    transition={{
                        duration: 3.5,
                        ease: "linear",
                        repeat: Infinity,
                        repeatType: "loop",
                        delay: 0.5,
                    }}
                    style={{ position: "relative", display: "inline-block" }}
                >
                    <RiMailSendLine
                        className="sendmail-icon"
                        style={{ width: "170px", height: "170px" }}
                    />
                </motion.div>
            </div> */}
        </div>
    );
}

export default Contact;
