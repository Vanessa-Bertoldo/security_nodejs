const { Router }             = require('express')
const SegurancaController    = require('../controllers/segurancaController')

const router = Router()

router  
    .post('/seguranca/acl', SegurancaController.cadastrarAcl)
    .post('/seguranca/permissao-roles', SegurancaController.cadastrarPermissaoRoles)

module.exports = router