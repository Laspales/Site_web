import React from 'react';
import './App.css';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section id="home">
          <h2>Page d'accueil</h2>
          <p>Bienvenue sur la page d'accueil de mon site.</p>
        </section>
        <section id="about">
          <h2>À propos</h2>
          <p>Voici un petit texte à propos de moi.</p>
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <p>Contactez-moi à cette adresse : contact@monsite.com</p>
        </section>
      </main>
    </div>
  );
}

export default App;
