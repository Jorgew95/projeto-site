const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config();  // Carregar variáveis de ambiente

const app = express();
app.use(express.json());
app.use(cors());

// Configuração do banco de dados
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// Conexão ao banco
db.connect(err => {
    if (err) {
        console.error("Erro ao conectar ao banco de dados:", err.message);
        throw err;
    }
    console.log("Conectado ao banco de dados!");
});

// Rota para buscar comentários
app.get('/api/comments', (req, res) => {
    const { anime_id } = req.query;
    if (!anime_id) {
        return res.status(400).json({ error: 'O parâmetro anime_id é obrigatório.' });
    }

    const query = 'SELECT * FROM comments WHERE anime_id = ? ORDER BY timestamp DESC';
    db.query(query, [anime_id], (err, results) => {
        if (err) {
            console.error("Erro ao buscar comentários:", err.message);
            return res.status(500).send('Erro ao buscar comentários');
        }
        res.status(200).json(results);
    });
});

// Rota para adicionar um novo comentário
app.post('/api/comments', (req, res) => {
    const { anime_id, username, comment } = req.body;

    // Validação de dados
    if (!anime_id || !username || !comment) {
        return res.status(400).json({ error: 'Anime_id, username e comment são obrigatórios.' });
    }

    const query = 'INSERT INTO comments (anime_id, username, comment) VALUES (?, ?, ?)';
    db.query(query, [anime_id, username, comment], (err, result) => {
        if (err) {
            console.error("Erro ao adicionar comentário:", err.message);
            return res.status(500).send('Erro ao adicionar comentário');
        }
        res.status(201).json({ message: "Comentário adicionado!", id: result.insertId });
    });
});

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
