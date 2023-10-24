const database = require('../models')
const { hash } = require('bcryptjs')
const uuid = require('uuid')

class UsuarioService{
    async cadastrar(dto){
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
        } catch(e){
            throw new Error("Erro ao cadastrar usuario")
        }


        return novoUsuario
    }
}

module.exports = UsuarioService