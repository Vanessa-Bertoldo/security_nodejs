const UsuarioService = require('../services/usuarioService')

const usuarioService = new UsuarioService()

class UsuarioController{
    static async register(req, res){
        const { nome, email, senha } = req.body

        try{
            const usuario = await usuarioService.register({nome, email, senha})

            res.status(201).send(usuario)

        } catch (e) {
            res.status(400).send({message: e.message})
        }

       
    }

    static async searchAllUsers(req, res) {
        const usuarios = await usuarioService.searchAllUsers()
        res.status(200).json(usuarios)
    }

    static async searchUsersById(req, res){
        try{
            const {id} = req.params
            const usuario = await usuarioService.searchUsersById(id)
        } catch(e){
            res.status(400).send({message: e.message})
        }
    }

    static async updateUser(req, res){
        const {id} = req.params
        const {nome, email} = req.body
        try{
            const usuario = await usuarioService.updateUser({id, nome, email})
            res.status(200).json(usuario)
        } catch(e){
            res.status(400).send({message: e.message})
        }
    } 

    static async deleteUser(req, res){
        const {id} = req.params
        try{
            await usuarioService.deleteUser(id)
            res.status(200).send({message: "Usuario deletado com sucesso"})
        } catch(e){
            res.status(400).send({message: e.message})
        }
    }
}

module.exports = UsuarioController