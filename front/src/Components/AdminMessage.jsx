import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AdminMessage-Style.css";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

function AdminMessages() {
    const [messages, setMessages] = useState([]);
    const [error, setError] = useState("");
    const [token, setToken] = useState(localStorage.getItem("token") || "");
    const [loginData, setLoginData] = useState({ username: "", password: "" });
    const [loginError, setLoginError] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    // Charge les messages automatiquement si token existant
    useEffect(() => {
        if (token) {
            console.log("🔑 Token trouvé au chargement :", token);
            fetchMessages(token);
        }
    }, [token]);

    const fetchMessages = async (usedToken) => {
        console.log(" Envoi requête messages avec token :", usedToken);
        try {
            const response = await axios.get("http://localhost:5001/messages", {
                headers: { Authorization: `Bearer ${usedToken}` },
            });
            console.log(" Messages reçus :", response.data);
            setMessages(response.data);
            setError("");
        } catch (err) {
            console.error("Erreur lors de la récupération :", err);
            if (err.response) {
                console.error("Détail erreur serveur :", err.response.status, err.response.data);
            }
            setError("Impossible de récupérer les messages. Vérifiez votre connexion ou les identifiants.");
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5001/login", loginData);
            const accessToken = response.data.accessToken;
            localStorage.setItem("token", accessToken);
            setToken(accessToken);
            setLoginError("");
            await fetchMessages(accessToken);
        } catch (err) {
            console.error(" Erreur de login :", err.response?.data || err.message);
            setLoginError(err.response?.data?.error || "Erreur lors de la connexion.");
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        setToken("");
        setMessages([]);
    };

    return (
        <div className="Admin-Messages">
            {!token ? (
                <div>
                    <h1>Connexion Admin</h1>
                    <form onSubmit={handleLogin}>
                        <input
                            type="text"
                            placeholder="Nom d'utilisateur"
                            value={loginData.username}
                            onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
                            required
                        />
                        <br /><br />
                        <div className="password-container">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Mot de passe"
                                id="mdp"
                                value={loginData.password}
                                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                                required
                            />
                            <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                            </span>
                        </div>
                        <br /><br />
                        <button type="submit">Se connecter</button>
                    </form>
                    {loginError && <p className="error">{loginError}</p>}
                </div>
            ) : (
                <div>
                    <h1>Messages reçus</h1>
                    {error && <p className="error">{error}</p>}
                    <button onClick={() => fetchMessages(token)} id="load">Recharger les messages</button>
                    <button onClick={handleLogout} id="deco">Déconnexion</button>
                    <br /><br />
                    {messages.length > 0 ? (
                        <table>
                            <thead>
                                <tr>
                                    <th>Nom</th>
                                    <th>Email</th>
                                    <th>Message</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {messages.map((msg, index) => (
                                    <tr key={index}>
                                        <td>{msg.name}</td>
                                        <td>{msg.email}</td>
                                        <td>{msg.message}</td>
                                        <td>{new Date(msg.date).toLocaleString()}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p>Aucun message enregistré.</p>
                    )}
                    
                </div>
            )}
        </div>
    );
}

export default AdminMessages;
