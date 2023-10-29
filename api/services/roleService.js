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

    static async searchAllRoles(){
        const roles = await database.roles.findAll();
        return roles
    }

    static async searchRoleById(id){
        const role = await database.roles.findOne({
            where: {
                id: id
            }
        })

        if(!role){
            throw new Error('Regra informada não cadastrada')
        }

        return role
    }

    static async updateRoleById(dto){
        const role = await database.roles.findOne({
            where: {
                id: dto.id
            }
        })

        if(!role){
            throw new Error('Regra informada não cadastrada')
        }

        try{
            role.nome       = dto.nome
            role.descricao  = dto.descricao
            await role.save()
            return role
        } catch(e){
            throw  new Error('Erro ao editar dados da regra')
        }
    }

    static async deleteRoleById(id){
        const role = await database.roles.findOne({
            where: {
                id: id
            }
        })

        if(!role){
            throw new Error('Rola informada não encontrada')
        }

        await this.searchRoleById(id)
        try{
            await database.roles.destroy({
                where: {
                    id: id
                }
            })
        } catch(e){
            throw new Error('Erro ao deletar dados')
        }
    }
}
module.exports = RoleService