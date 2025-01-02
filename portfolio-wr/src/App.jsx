import { useState, useEffect } from 'react';
import React from 'react';
import { initializeThemeHandler } from './Components/theme';
import Header from './Components/Header';
import Section from './Components/Section';
import Footer from './Components/Footer';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light'); // Gestion de l'état du thème

  // Initialiser le thème lors du premier rendu
  useEffect(() => {
    initializeThemeHandler(); // Charger le thème initial depuis le localStorage
  }, []);

  // Fonction pour alterner entre les thèmes
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light'; // Inverser le thème
      document.body.classList.remove(prevTheme);
      document.body.classList.add(newTheme);
      localStorage.setItem('old_Theme', newTheme); // Sauvegarder le thème dans localStorage
      return newTheme; // Retourner le nouveau thème
    });
  };

  useEffect(() => {
    document.body.classList.add(theme); // Appliquer le thème au body
  }, [theme]);

  return (
    <body className='light'>
      <Header toggleTheme={toggleTheme} />
      <Section />
      <Footer />
    </body>
  );
}

export default App;
