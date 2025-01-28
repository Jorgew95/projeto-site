import { inject } from "@vercel/analytics"
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config();  // Carregar variáveis de ambiente

const app = express();
app.use(express.json());
app.use(cors());

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
