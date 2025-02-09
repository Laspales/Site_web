import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminMessage-Style.css";

function AdminMessages() {
    const [messages, setMessages] = useState([]);
    const [error, setError] = useState("");
    const [token, setToken] = useState(localStorage.getItem("token") || "");
    const [loginData, setLoginData] = useState({ username: "", password: "" });
    const [loginError, setLoginError] = useState("");

    useEffect(() => {
        if (token) {
            fetchMessages();
        }
    }, [token]);

    const fetchMessages = async () => {
        try {
            const response = await axios.get("http://localhost:5000/messages", {
                headers: { Authorization: token },
            });
            setMessages(response.data);
        } catch (err) {
            console.error("Erreur lors de la récupération des messages :", err);
            setError("Impossible de récupérer les messages. Vérifiez votre connexion.");
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/login", loginData);
            localStorage.setItem("token", response.data.accessToken);
            setToken(response.data.accessToken);
            setLoginError("");
        } catch (err) {
            setLoginError("Identifiants incorrects.");
        }
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
                        <input
                            type="password"
                            placeholder="Mot de passe"
                            value={loginData.password}
                            onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                            required
                        />
                        <br /> <br />
                        <button type="submit">Se connecter</button>
                    </form>
                    {loginError && <p className="error">{loginError}</p>}
                </div>
            ) : (
                <div>
                    <h1>Messages reçus</h1>
                    {error && <p className="error">{error}</p>}
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
                    <button onClick={() => { localStorage.removeItem("token"); setToken(""); }} id="deco">Déconnexion</button>
                </div>
            )}
        </div>
    );
}

export default AdminMessages;
