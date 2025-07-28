import React, { useState } from "react";
import axios from "axios";
import './pages-css/Contact-Style.css';
import { RiMailSendLine } from "react-icons/ri";
import { motion } from "framer-motion";

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

    // Récupérer l'URL backend depuis la variable d'environnement
    const backendUrl = import.meta.env.VITE_API_URL || 'http://localhost:5001';

    try {
      const response = await axios.post(`${backendUrl}/contact`, formData);
      setStatus(response.data.message);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus("Erreur lors de l'envoi du message.");
      console.error(error);
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
    </div>
  );
}

export default Contact;
