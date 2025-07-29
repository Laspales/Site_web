require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const compression = require('compression'); // pour booster la perf

const app = express();

app.use(cors({ origin: '*' }));
app.use(bodyParser.json());
app.use(compression()); // compression gzip

// Connexion à MongoDB
const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/contactDB';
mongoose.connect(mongoUri)
.then(() => console.log('✅ Connecté à MongoDB'))
.catch(err => console.error('❌ Erreur de connexion à MongoDB', err));

const jwtSecret = process.env.JWT_SECRET || 'lexus';

// Schéma Mongoose
const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    date: { type: Date, default: Date.now }
});
const Contact = mongoose.model('Contact', contactSchema);

// Middleware d'authentification JWT
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.sendStatus(403);

    jwt.verify(token, jwtSecret, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

// Routes API
app.get('/messages', authenticateToken, async (req, res) => {
    try {
        const messages = await Contact.find();
        res.status(200).json(messages);
    } catch (err) {
        res.status(500).json({ error: 'Erreur lors de la récupération des messages.' });
    }
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === 'bad' && password === 'ame') {
        const user = { username };
        const accessToken = jwt.sign(user, jwtSecret, { expiresIn: '1h' });
        res.json({ accessToken });
    } else {
        res.status(401).json({ error: 'Utilisateur ou mot de passe incorrect!' });
    }
});

app.post('/contact', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const newContact = new Contact({ name, email, message });
        await newContact.save();
        res.status(200).json({ message: 'Message envoyé' });
    } catch (err) {
        res.status(500).json({ error: 'Erreur lors de l\'enregistrement du message.' });
    }
});

// 👉 Servir le frontend React (build Vite)
app.use(express.static(path.join(__dirname, '../front/dist')));

// 👉 Rediriger les routes vers index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../front/dist/index.html'));
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`🚀 Serveur en cours d'exécution sur le port ${PORT}`));
