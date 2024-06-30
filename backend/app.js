require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mysql = require('mysql');

const Route_Funcionarios = require("./router/Route_Funcionarios")
const Route_Perfil = require("./router/Route_Perfil")

const app = express()
app.use(express.static('js'));
app.use(express.json())
app.use(cors({
    origin: '*'
  }))

const banco = mysql.createPool({
    connectionLimit: 128,
    host: process.env.host,
    user: process.env.user,
    database: process.env.database});


app.get('/helloworld' ,(req,res) => {
    return res.json({
        mensagem: 'Hello World'
    })
})

Route_Funcionarios(app,banco)
Route_Perfil(app,banco)

app.listen(process.env.PORT ||5000, () => {
    console.log('connect')
})