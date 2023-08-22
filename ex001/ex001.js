const express = require('express');

const app = express();
const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];

app.get('/0', function(req, res) {
    const nomeJogador = jogadores.shift();
    jogadores.push(nomeJogador)
    res.send(`É a vez de ${nomeJogador} jogar!`);
});


app.listen(3000)