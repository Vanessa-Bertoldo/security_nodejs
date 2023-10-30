const { Router } = require('express')

const PermissaoController = require('../controllers/permissaoController')

const router = Router()

router
    .get('/permissao', PermissaoController.buscarTodasPermissoes)
    .get('/permissao/id/:id', PermissaoController.buscarPermissaoporId)
    .post('/permissao', PermissaoController.cadastrarPermission)
    .put('/permissao/id/:id', PermissaoController.atualizarPermissaoPorId)
    .delete('/permissao/id/:id', PermissaoController.deletarPermissaoPorId)

module.exports = router