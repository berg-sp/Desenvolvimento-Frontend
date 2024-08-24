const express = require('express')
const app = express()
const porta = 5000

let produtos = [
    {
        nome: 'América Mineiro', 
        valor: 650000000, 
        descricao: "Clube mineiro adquirido por SAF", 
        imagem: "https://lirp.cdn-website.com/05448cb5/dms3rep/multi/opt/Logo-114h.png"
    },
    {
        nome: 'Bahia', 
        valor: 1000000000, 
        descricao: "Clube baiano adquirido por SAF", 
        imagem: "https://ssl.gstatic.com/onebox/media/sports/logos/nIdbR6qIUDyZUBO9vojSPw_64x64.png"
    },
    {
        nome: 'Coritiba', 
        valor: 650000, 
        descricao: "Clube mineiro adquirido por SAF", 
        imagem: "https://lirp.cdn-website.com/05448cb5/dms3rep/multi/opt/Logo-114h.png"
    }
]

app.get('/', function(requisicao, resposta) {
    return resposta.send(produtos)
})

app.get('/produto', function(requisicao, resposta) {
})

app.listen(porta, () => {
    console.log(`https://localhost:${porta}`)   
})