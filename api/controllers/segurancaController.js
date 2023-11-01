const SegurancaService = require('../services/segurancaService')

const segurancaService = new SegurancaService()

class SegurancaController{
    static async cadastrarAcl(req, res){
        const { roles, permissoes } = req.body
        const { usuarioId } = req

        try{
            const acl = await segurancaService.cadastrarAcl({ 
                roles, 
                permissoes,
                usuarioId
            })
            res.status(201).send(acl)
        } catch(e) {
            res.status(400).send({message: e.message})
        }
    }

    static async cadastrarPermissaoRoles(req, res){
        const { roleId, permissoes } = req.body

        try{
            const permissaoRole = await segurancaService.cadastrarPermissoesRole({
                roleId,
                permissoes
            })

            res.status(201).send(permissaoRole)
        } catch(e){
            res.status(400).send({ message: e.message })
        }
    }
}

module.exports = SegurancaController