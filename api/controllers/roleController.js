const RoleService = require('../services/usuarioService')

const roleService = new RoleService()

class RoleController{
    static async register(req, res){
        const { nome, descricao } = req.body

        try{
            const role = await roleService.register({nome, descricao})

            res.status(201).send(role)
        } catch(e){
            res.status(400).send({message: e.message})
        }
    }
}
module.exports = RoleController