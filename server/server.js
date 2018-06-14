const express = require('express')
const app = express()

const apostadores = [{nome:'Alexandre', email:'acm@cin.ufpe.br', senha:'python'}]

app.get('/', function (req, res) {
  res.send(apostadores)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})