const { Router } = require('express')
const RoleController = require('../controllers/roleController')

const router = Router()

router
    .post('/role', RoleController.register)
    .get('/roles', RoleController.searchAllRoles)
    .get('/role/:id', RoleController.searchRoleById)
    .put('/role/:id', RoleController.updateRoleById)
    .delete('/role/:id', RoleController.deleteRoleById)

module.exports = router  
