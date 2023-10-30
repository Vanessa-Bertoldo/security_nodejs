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
            const newPermission= await database.permissoes.create({
                id: uuidv4(),
                nome: dto.nome,
                descricao: dto.descricao
            })
            
            return newPermission
        } catch(e){
            throw new Error('Erro ao cadastrar Permissao')
        }
    }
}

module.exports = PermissaoService