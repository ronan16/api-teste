const express = require("express")

const produtos = require("./src/produtos/produtos.json")
const port = process.env.PORT || 3000
const app = express()

app.get("/produtos", (req, res) => {
    return res.json(produtos)
})

app.get("/", (req, res) => {
    return res.send("<h1>Voce é Super pessoinhas</h1>")
})

app.listen(port, ()  =>{
    console.log("Servidor está rodando  ")
})