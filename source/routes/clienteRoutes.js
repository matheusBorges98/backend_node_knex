const express = require('express')
const routes = express.Router()

const ClienteController = require('../controllers/clienteController')

routes.get('/clientes', ClienteController.index)
routes.post('/clientes', ClienteController.create)
routes.put('/cliente/:id', ClienteController.update)
routes.delete('/cliente/:id', ClienteController.delete)

module.exports = routes
