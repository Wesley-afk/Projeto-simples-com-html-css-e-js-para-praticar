const express = require('express');
const connection = require('./database.js');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));


// Retornando treinos 
app.get('/treinos', (req, res) => {
    connection.query('SELECT * FROM treinos', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message })
        }
        res.json(results);
    })
});

// Cadastrando treinos
app.post('/CadastrarTreinos', (req, res) => {
    const { nome } = req.body;

    const sql = "INSERT INTO treinos (nome) VALUES(?)";

    connection.query(sql, [nome], (err, results) => {
        if (err) {
            return res.status(500).json({ erro: err.message });
        }
        res.status(201).json({
            message: "Treino cadastrado"
        });
    })

});

// Excluir um treino
app.delete('/deletarTreino/:id', (req, res) => {
    const id = req.params.id;

    const sql = 'DELETE FROM treinos WHERE id = ?'

    connection.query(sql, [id], (err, results) => {
        if (err) {
            return res.status(500).json({ erro: err.message })
        }
        res.status(200).json({
            message: 'Treino deletado com sucesso'
        });
    })
})

// Editar um treino
app.put('/editarTreino/:id', (req, res) => {
    const id = req.params.id;
    const {nome} = req.body;
    const sql = 'UPDATE treinos SET nome = ? WHERE id = ?'

    connection.query(sql, [nome, id], (err, results) => {
        if(err){
            return res.status(500).json({ erro: err.message })
        }
        res.status(200).json({
            message: 'Treino atualizado com sucesso'
        })
    })
})