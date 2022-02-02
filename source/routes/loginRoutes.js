const express = require('express')
const routes = express.Router()

const LoginController = require('../controllers/loginController')

routes.post('/login', LoginController.logar)
// routes.get('/login', LoginController.deslogar)
// routes.post('/login', LoginController.create)
// routes.put('/login/:id', LoginController.update)
// routes.delete('/login/:id', LoginController.delete)

module.exports = routes
