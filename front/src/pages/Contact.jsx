import React, { useState } from "react";
import axios from "axios";
import { FiTerminal } from "react-icons/fi";
import TypewriterText from '../Components/textman';
import './pages-css/Contact-Style.css';
import { motion } from "framer-motion";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState({ type: '', text: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', text: 'Tous les champs doivent être remplis.' });
      return;
    }

    const backendUrl = window.location.origin;

    try {
      const response = await axios.post(`${backendUrl}/contact`, formData);
      setStatus({ type: 'success', text: response.data.message });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({ type: 'error', text: "Erreur lors de l'envoi du message." });
      console.error(error);
    }
  };
  React.useEffect(() => {
  if (status.text) {
    const timer = setTimeout(() => setStatus({ type: '', text: '' }), 2000);
    return () => clearTimeout(timer);
  }
}, [status]);



  return (
    <div className="App-Contact">
      <div className="Contact-Title">
        <h1 style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <FiTerminal style={{ width: "70px", height: "70px" }} />
          <TypewriterText text={[{ content: "Contact." }]} speed={100} />
        </h1>
        <p>Contactez-moi ou envoyez-moi un email directement sur <b>badepalla09@gmail.com</b></p>
      </div>
      <div className="Contact-Form">
        <form onSubmit={handleSubmit}>
          <br /><br />
          <motion.input
            id="name"
            type="text"
            name="name"
            placeholder="Nom"
            required
            value={formData.name}
            onChange={handleChange}
            initial={{ scale: 1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <br /><br />

          <motion.input
            id="email"
            type="email"
            name="email"
            placeholder="Adresse mail"
            required
            value={formData.email}
            onChange={handleChange}
            initial={{ scale: 1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <br /><br />

          <motion.textarea
            id="message"
            name="message"
            placeholder="Message"
            required
            value={formData.message}
            onChange={handleChange}
            initial={{ scale: 1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <br /><br />

          <motion.button
            type="submit"
            id="send"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Envoyer
          </motion.button>
        </form>
        {status.text && (
          <motion.p
            className={`status-message ${status.type}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {status.text}
          </motion.p>
        )}

      </div>
    </div>
  );
}

export default Contact;