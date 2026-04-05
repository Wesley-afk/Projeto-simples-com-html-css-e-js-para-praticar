const express = require('express');
const router = express.Router();
const connection = require('../database.js')

// Logar o usuario
router.post('/logarUsuario', (req, res) => {
    const {nomeDoUsuario} = req.body;
    const {senhaDoUsuario} = req.body

    const sql = 'SELECT * FROM usuario WHERE nomeDoUsuario = ? AND senhaDoUsuario = ?'

    connection.query(sql, [nomeDoUsuario, senhaDoUsuario], (err, results) => {
        if(err){
            return res.status(500).json({erro: err.message})
        }

        if(results.length > 0){
            return res.status(200).json({ message: 'Usuário encontrado com sucesso'});
        } else{
            return res.status(401).json({ message: 'Usuário ou senha incorretos' })
        }
    })
})

module.exports = router;