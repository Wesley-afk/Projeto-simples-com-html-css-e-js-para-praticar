const express = require('express');
const connection = require('./database.js');
const cors = require('cors');
const treinoRoutes = require('./routes/treinos.js');
const usuarioRoutes = require('./routes/usuario.js');

const app = express();
app.use(express.json());
app.use(cors());

app.use(treinoRoutes);
app.use(usuarioRoutes);

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));