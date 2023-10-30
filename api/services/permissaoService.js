const { v4: uuidv4 } = require('uuid')
const database = require('../models')

class PermissaoService{
    async cadastrarPermissao(dto){
        const permissao = await database.permissoes.findOne({
            where: {
                nome: dto.nome
            }
        })

        if(permissao){
            throw new Error('Permissao já cadastrada')
        }

        try{
            const newPermission = await database.permissoes.create({
                id: uuidv4(),
                nome: dto.nome,
                descricao: dto.descricao
            })
            
            return newPermission
        } catch(e){
            throw new Error('Erro ao cadastrar Permissao')
        }
    }

    async buscarTodasPermissoes(){
        const permissoes = await database.permissoes.findAll()
        return permissoes
    }

    async buscarPemissaoPorId(id){
        const permissao = await database.permissoes.findOne({
            where: {
                id: id
            }
        })

        if(!permissao){
            throw new Error('Permissao informada não cadastrada')
        }

       return permissao
    }

    async atualizarPermissaoPorId(dto){
        const permissao = await database.permissoes.findOne({
            where: {
                id: dto.id
            }
        })

        if(!permissao){
            throw new Error('Permissao informada não cadastrada')
        }

        try{
            permissao.nome      = dto.nome
            permissao.descricao = dto.descricao

            await permissao.save()

            return await permissao.reload()
        } catch(e){
            throw new Error('Erro ao atualizar permissao')
        }
    }

    async deletarPermissaoPorId(id){
        const permissao = await database.permissoes.findOne({
            where:{
                id: id
            }
        })

        if(!permissao){
            throw new Error('Permissao informada não cadastrada')
        }

        try{
            await database.permissoes.destroy({
                where: {
                    id: id
                }
            })
        } catch(e){
            throw new Error('Erro ao deletar permissao')
        }
    }
}

module.exports = PermissaoService