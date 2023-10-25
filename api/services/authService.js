const database = require('../models')

class AuthService{
    async login(dto){
        const usuario = await database.usuario.findOnde({
            attributes: ['id', 'email', 'senha'],
            where: {
                email: dto.email
            }
        })

        if(!usuario){
            throw new Error('Usuario não cadastrado')
        }
    }
}
module.exports = AuthService