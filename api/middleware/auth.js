const { verify, decode } = require('jsonwebtoken')
const jsonSecret = require("../config/jsonSecret")

module.exports = async(req, res, next) => {
    const token = req.headers.authorization

    if(!token){
        return res.status(401).send('Access token não informado')
    }

    const [, accessToken] = token.split(" ")

    try{
        verify(accessToken, jsonSecret.secret)

        //traduz o token
        const { id, email } = await decode(accessToken)

        req.userId = id
        req.userEmail = email

        return next()
    } catch(e){
        res.status(401).send('Usuario não autorizado')
    }
}