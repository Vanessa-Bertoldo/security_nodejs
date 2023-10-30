const bodyParser = require('body-parser')
 
const produto     = require('./produtoRoute')
const usuario     = require('./usuariosRoutes')
const auth        = require('./authRoute')
const role        = require('./roleRoute')
const permissiao  = require('./permissaoRoute')
const seguranca   = require('./seguranca')

module.exports = app => {
  app.use(
    bodyParser.json(),
    auth,
    usuario,
    produto,
    role, 
    permissiao,
    seguranca
  )
}
