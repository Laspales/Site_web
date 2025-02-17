const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connexion à MongoDB
mongoose.connect('mongodb://localhost:27017/contactDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Connecté à MongoDB'))
  .catch(err => console.error('Erreur de connexion à MongoDB', err));

// Schéma et modèle pour les messages de contact
const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    date: { type: Date, default: Date.now }
});
const Contact = mongoose.model('Contact', contactSchema);

// Middleware pour vérifier le token
function authenticateToken(req, res, next) {
    const token = req.headers['authorization'];
    if (!token) return res.sendStatus(403);

    jwt.verify(token, 'SECRET_KEY', (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

// Route protégée pour récupérer les messages
app.get('/messages', authenticateToken, async (req, res) => {
    try {
        const messages = await Contact.find();
        res.status(200).json(messages);
    } catch (err) {
        res.status(500).json({ error: 'Erreur lors de la récupération des messages.' });
    }
});

// Route pour l'authentification admin
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Exemple simple : vérifiez les identifiants admin (à améliorer pour production)
    if (username === 'bad' && password === 'ame') {
        const user = { username };
        const accessToken = jwt.sign(user, 'SECRET_KEY');
        res.json({ accessToken });
    } else {
        res.status(401).json({ error: 'Utilisateur ou mot de passe incorrect!' });
    }
});

// Route pour envoyer un message
app.post('/contact', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const newContact = new Contact({ name, email, message });
        await newContact.save();
        res.status(200).json({ message: 'Message envoyé ' });
    } catch (err) {
        res.status(500).json({ error: 'Erreur lors de l\'enregistrement du message.' });
    }
});

// Lancer le serveur
const PORT = 5000;
app.listen(PORT, () => console.log(`Serveur en cours d'exécution sur le port ${PORT}`));
