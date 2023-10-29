const database = require('../models')
const { hash } = require('bcryptjs')
const uuid = require('uuid')

class RoleService{
    async register(dto){
        const role = await database.role.findOne({
            where: {
                nome: dto.nome
            }
        })

        if(role){
            throw new Error('Role já cadastrada')
        }

        try{
            const newRole = await database.roles.create({
                id: uuid.v4(),
                nome: dto.nome,
                descricao: dto.descricao
            }) 
            return newRole
        } catch(e){
            throw new Error ('Erro ao cadastrar role')
        }
    }
}
module.exports = RoleService