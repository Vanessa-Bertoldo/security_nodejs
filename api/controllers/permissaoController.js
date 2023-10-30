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

    static async buscarTodasPermissoes(req, res){
        const permissoes = permissaoService.buscarTodasPermissoes()
        res.status(200).json(permissoes)
    }

    static async buscarPermissaoporId(req, res){
        try{
            const { id } = req.params
            const permissao = await permissaoService.buscarPemissaoPorId(id)

            res.status(200).json(permissao)
        } catch(e){
            res.status(400).send({ message: e.message})
        }
    }

    static async atualizarPermissaoPorId(req, res){
        const { id } = req.params
        const { nome, descricao } = req.body

        try{
            const permissao = await permissaoService.atualizarPermissaoPorId({id, nome, descricao})

            res.status(200).json(permissao)
        } catch(e){
            res.status(400).send({message: e.message })
        }
    }

    static async deletarPermissaoPorId(req, res){
        const { id } = req.params

        try{
            await permissaoService.deletarPermissaoPorId(id)
            
            res.status(200).send({ message: 'exclusão realizada com sucesso'})
        } catch(e){
            res.status(400).send({ message: e.message })
        }
    }
}

module.exports = PermissaoController