// Импортируем пакет express, чтобы создать свой сервер
const {
  json
} = require('express')
const express = require('express')

const app = express()

const port = 3000

app.get('/', (req, res) => {
  res.json([
    'Khalid',
    'Ahmad',
    'Adam'
  ])
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


