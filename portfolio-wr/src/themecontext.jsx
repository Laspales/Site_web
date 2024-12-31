import React, { createContext, useState, useContext, useEffect } from 'react';

// Créer un contexte pour le thème
const ThemeContext = createContext();

// Provider pour entourer l'application
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Par défaut en mode clair

  useEffect(() => {
    // Appliquer le thème au corps de la page
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook personnalisé pour utiliser le thème dans n'importe quel composant
export const useTheme = () => {
  return useContext(ThemeContext);
};
