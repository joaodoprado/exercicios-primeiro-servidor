const express = require('express');
const app = express();

let segundos = 0;
let minutos = 0;
function maisUmSegundo() {
    segundos++

    if (segundos > 59) {
        minutos ++;
        segundos = 0;
    }
    
}

app.get('/', function(req, res) {
    res.send(`Tempo atual do cronômetro: ${minutos.toString().padStart(2, '0')} minutos e ${segundos.toString().padStart(2, '0')} segundos`)
})


app.listen(8000);


