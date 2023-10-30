const PermissaoService = require('../services/permissaoService')

const permissaoService = new PermissaoService()

class PermissaoController{
    static async cadastrarPermission(req, res){
        const { nome, descricao } = req.body

        try{
            const permissao = await permissaoService.cadastrarPermissao({ nome, descricao })
        } catch(e){
            res.status(400).send({ message: e.message })
        }
    }
}

module.exports = PermissaoController