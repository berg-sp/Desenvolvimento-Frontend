let http = require('http')
const port = 5000

const produtos = [
    { nome: 'Bolu de murangu', valor: 1000000, imagem: 'https://cdn.awsli.com.br/1597/1597404/produto/150814515/01e778c47e.jpg'},
    { nome: 'Bolu de chocolate', valor: 300, imagem: 'https://vovopalmirinha.com.br/wp-content/uploads/2016/05/bolo-chocolate-simples-1.jpg' },
]
const requestHandler = (req, res) => {
    res.setHeader('Access-Control-Allow')
    res.white(JSON.stringify(produtos))
    return res.end()
}

const server = http.createServer(requestHandler)

server.listen(port, () => {
    console.log('servidor rodando na porta 5000')
})