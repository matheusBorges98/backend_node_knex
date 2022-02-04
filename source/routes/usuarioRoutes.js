const express = require('express')
const routes = express.Router()
const auth  = require('../middleware/autenticacao');

const UserController = require('../controllers/UsuariosController')

routes.get('/usuarios',auth, UserController.index)
routes.post('/usuarios', auth, UserController.create)
routes.put('/usuarios/:id', auth, UserController.update)
routes.delete('/usuarios/:id', auth, UserController.delete)


module.exports = routes
