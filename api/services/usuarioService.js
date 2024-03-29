const database = require('../models')
const { hash } = require('bcryptjs')
const uuid = require('uuid')

class UsuarioService{
    async register(dto){
        const usuario = await database.usuarios.findOne({
            where: {
                email: dto.email
            }
        })

        if (usuario) {
            throw new Error('Usuario já cadastrado')
        }

        try{
            //criptografia 
            const senhaHash = await hash(dto.senha, 8)
            const novoUsuario = await database.usuarios.create({
                id: uuid.v4(), //gera um hash no padrão v4
                nome: dto.nome,
                email: dto.email,
                senha: senhaHash
            })

            return novoUsuario
        } catch(e){
            throw new Error("Erro ao cadastrar usuario")
        }
        
    }

    async searchAllUsers() {
        const usuarios = await database.usuarios.findAll({
            include: [
                {
                    model: database.roles,
                    as: 'usuario_roles',
                    attributes: ['id', 'nome', 'descricao'],
                    through: {
                        attributes: [],
                    }
                },
                {
                    model: database.permissoes,
                    as: 'usuario_permissoes',
                    attributes: ['id', 'nome', 'descricao'],
                    through: {
                        attributes: [],
                    }
                }
            ]
        })
        return usuarios
    }

    async searchUsersById(id){
        const usuario = await database.usuarios.findOne({
            include: [
                {
                    model: database.roles,
                    as: 'usuario_roles',
                    attributes: ['id', 'nome', 'descricao'],
                    through: {
                        attributes: [],
                    }
                },
                {
                    model: database.permissoes,
                    as: 'usuario_permissoes',
                    attributes: ['id', 'nome', 'descricao'],
                    through: {
                        attributes: [],
                    }
                }
            ],
            where: {
                id: id
            }
        })
        
        if(!usuario){
            throw new Error('Usuario informadpo não cadastrado')
        }

        return usuario
    }

    async updateUser(dto){
        const usuario = await this.searchUsersById(dto.id)
        try{
            usuario.nome    = dto.nome
            usuario.email   = dto.email
            await usuario.save()
            return usuario
        } catch(e){
            throw new Error('Erro ao editar dados de usuario')
        }
    }

    async deleteUser(id){
        await this.searchUsersById(id)
        try{
            await database.usuarios.destroy({
                where: {
                    id: id
                }
            })
        } catch(e){
            throw new Error('Erro ao excluir usuario')
        }
    }
}

module.exports = UsuarioService