const database = require('../models')
const { compare } = require('bcryptjs')
const { sign } = require('jsonwebtoken')
const jsonSecret = require('../config/jsonSecret')

class AuthService{
    async login(dto){
        const user = await database.usuarios.findOne({
            attributes: ['id', 'email', 'senha'],
            where: {
                email: dto.email
            }
        })

        if(!user){
            throw new Error('Usuario não cadastrado')
        }

        const equalPassw = await compare(dto.senha, user.senha)

        if(!equalPassw){
            throw new Error('Usuario ou senha inválido')
        }

        const acessToken = sign({
            id: user.id,
            email: user.email
        }, jsonSecret.secret, {
            expiresIn: 86400
        })

        return {acessToken}
    }
}
module.exports = AuthService