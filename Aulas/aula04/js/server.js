const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 8050
const connectionString = "mongodb+srv://seufuturoprogramando:eXjmVhkBrfI3fIdR@bancodedados.ya3fg.mongodb.net/"
//const connectionString = "mongodb+srv://localhost:27017" //quando for executado de um programa instalado no micro. 
const Usuario = require('./models/usuario')

app.use(express.json()) //informa que o tipo de dado que ira trafegar na rede, é o Json.

//ENDPOINT
app.get('/', async (req, res) => {
    try {
        let usuarios = await Usuario.find()
        return res.status(200).json({ users: usuarios })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Erro interno no servidor" })
    }
})

app.post('/cadastrar-usuario', async (req, res) => {
    try {
        let usuario = {
            nome: req.body.nome,
            email: req.body.email,
            senha: btoa(req.body.senha)
        }

        
        await Usuario.create(usuario)
        return res.status(201).json({ mensagem: "Usurio cadastrado com sucesso!!" })        
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Erro interno no servidor" })
    }
})

app.post('/login', async (req, res) => {
    try {
        let usuario = await Usuario.findOne({ email: req.body.email })
        console.log(usuario)
                
        if (usuario === null)
            {
                return res.status(404).json({ message: "Usuario ou senha invalidos" })
            }
            
            let d = btoa(req.body.senha)
            console.log(d)
            return res.status(200).json({ message: "Login Success", token_acess: Math.floor(Math.random() * 10000000)
         })
    }catch (error) {
        console.log(error)
        return res.status(500).json ({ message: "Erro interno de servidor" })
    }
})

mongoose.connect(connectionString, {
    dbName: "BancoDeDados"
}).then(() => {
    console.log("MongoDB UP!")
    console.log(`http://localhost:${port}`)
    app.listen(port)
}).catch((error) => {
    console.log("Falha ao ser conectar com mongoDB")
    console.log(error)
})