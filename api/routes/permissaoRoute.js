const { Router } = require('express')

const PermissaoController = require('../controllers/permissaoController')

const router = Router()

router
    .get('/permissao',)
    .get('/permissao/:id', )
    .post('/permissao', PermissaoController.cadastrarPermission)
    .put('/permissao/:id')
    .delete('permissao/:id')

module.exports = router