const express = require('express')
const routes = express.Router()

const UserController = require('../controllers/UsuariosController')

routes.get('/usuarios', UserController.index)
routes.post('/usuarios', UserController.create)
routes.put('/usuarios/:id', UserController.update)
routes.delete('/usuarios/:id', UserController.delete)


module.exports = routes
