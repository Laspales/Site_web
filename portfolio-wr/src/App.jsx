import { useState, useEffect } from 'react';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { initializeThemeHandler } from './Components/theme';
import Header from './Components/Header';
import Filigrane from './Components/filigrane';
import Section from './Components/Section';
import Footer from './Components/Footer';
import Projets from './pages/Projets';
import Contact from './pages/Contact';
import APropos from './pages/APropos';
import Cursor from './Components/cursor';
import './App.css';
import AdminMessages from './Components/AdminMessage';

function Accueil() {
  return <Section />;
}

// fonction  APP

function App() {

  //dark theme
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    initializeThemeHandler();
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      document.body.classList.remove(prevTheme);
      document.body.classList.add(newTheme);
      localStorage.setItem('old_Theme', newTheme);
      return newTheme;
    });
  };
   useEffect(() => {
    document.body.classList.add(theme);
  }, [theme]);

  //accès page admin avec code clavier
  useEffect(() => {
    let buffer = "";
    const secretCode = "grint"; 

    const handleKeyPress = (e) => {
      buffer += e.key.toLowerCase();
      if (buffer.length > secretCode.length) {
        buffer = buffer.slice(-secretCode.length);
      }

      if (buffer === secretCode) {
        window.location.href = "/admin";
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

 
  return (
    <Router>

      <div className={`app ${theme}`}>
        <Cursor />
        <Header toggleTheme={toggleTheme} />
        <Filigrane />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/apropos" element={<APropos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<AdminMessages />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
