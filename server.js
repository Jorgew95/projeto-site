const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors()); // Permitir requisições do frontend

// Configuração do banco de dados
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Substitua pelo seu usuário do MySQL
    password: 'Jota.will@2024', // Substitua pela sua senha do MySQL
    database: 'anime_comments' // Nome do banco de dados
});

// Conexão ao banco
db.connect(err => {
    if (err) throw err;
    console.log("Conectado ao banco de dados!");
});

// Rota para buscar comentários
app.get('/api/comments', (req, res) => {
    const { anime_id } = req.query;
    const query = 'SELECT * FROM comments WHERE anime_id = ? ORDER BY timestamp DESC';
    db.query(query, [anime_id], (err, results) => {
        if (err) return res.status(500).send(err);
        res.status(200).json(results);
    });
});

// Rota para adicionar um novo comentário
app.post('/api/comments', (req, res) => {
    const { anime_id, username, comment } = req.body;
    const query = 'INSERT INTO comments (anime_id, username, comment) VALUES (?, ?, ?)';
    db.query(query, [anime_id, username, comment], (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(201).send({ message: "Comentário adicionado!", id: result.insertId });
    });
});

// Iniciar o servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
