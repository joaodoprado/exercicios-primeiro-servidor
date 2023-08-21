const express = require('express');

const app = express();
let nomeJogador = ''
const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];

app.get('/0', function(req, res) {
    nomeJogador = jogadores[0];
    res.send(`É a vez de ${nomeJogador} jogar!`);
});

app.get('/1', function(req, res) {
    nomeJogador = jogadores[1]
    res.send(`É a vez de ${nomeJogador} jogar!`)
})

app.listen(3000)