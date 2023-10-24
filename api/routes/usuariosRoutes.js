const { Router } = require('express')
const UsuarioController = require('../controllers/usuarioController')


const router = Router()

router
    .post('/usuarios', UsuarioController.register)
    .get('/usuarios', UsuarioController.searchAllUsers)
    .get('/usuarios/id/:id', UsuarioController.searchUsersById)
    .put('/usuarios/id/:id', UsuarioController.updateUser)
    .delete('/usuarios/id/:id', UsuarioController.deleteUser)

module.exports = router