const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

const app = express()

mongoose.connect('mongodb+srv://<user>:<password>@cluster0-qlj3f.gcp.mongodb.net/week10?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useUnifiedTopology: true
})

app.use(express.json())
app.use(routes)

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de Parêmetros:

// Query Params: request.query (filtros, ordenação, paginação, ...)
// Route Params: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

// MongoDB (Não-relacional)

app.post('/users', (request, response) => {
	console.log(request.body)
	return response.json({ message: 'Hello Omnistack' })
})

app.listen(3333)