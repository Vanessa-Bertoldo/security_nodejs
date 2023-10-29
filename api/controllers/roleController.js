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

    static async searchAllRoles(req, res){
        const roles = await roleService.searchAllRoles()
        res.status(200).json(roles)
    }

    static async searchRoleById(req, res){
        try{
            const {id} = req.params
            const role = await roleService.searchUsersById(id)
        } catch(e){
            res.status(400).send({message: e.message})
        }
    }

    static async updateRoleById(req, res){
        const {id} = req.params
        const {nome, descricao} = req.body
        try{
            const role = await roleService.updateRoleById({id, nome, descricao})
            res.status(200).json(role)
        } catch(e){
            res.status(400).send({message: e.message})
        }
    }  

    static async deleteRoleById(req, res){
        const {id} = req.params
        try{
            await roleService.deleteRoleById(id)
            res.status(200).send({message: 'Deleção feita com sucesso'})
        } catch(e){
            res.status(400).send({message: e.message})
        }
    }

}
module.exports = RoleController