import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AdminMessages() {
    const [messages, setMessages] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const response = await axios.get('http://localhost:5000/messages');
                setMessages(response.data);
            } catch (err) {
                console.error('Erreur lors de la récupération des messages :', err);
                setError('Impossible de récupérer les messages.');
            }
        };

        fetchMessages();
    }, []);

    return (
        <div className="Admin-Messages">
            <h1>Messages reçus (Admin)</h1>
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
        </div>
    );
}

export default AdminMessages;
