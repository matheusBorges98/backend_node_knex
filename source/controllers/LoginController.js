const loginService = require('../services/loginService')

module.exports = {

   async logar(req, res) {
        let userLogado;

        try{
            const data = req.body        
            userLogado = await loginService.logar(data)
            return res.send(userLogado)

        }catch(error){
            console.log(error)
            return res.status(400).send(`Houve um erro na requisição, por favor tente novamente mais tarde. Erro: ${error}`)
        }
    },

    // async deslogar(req, res, next){
    //     let crt;
    //     try{
    //         const data = req.body        
    //         crt = await userService.create(data)
           
    //     }catch(error){
    //         console.log(error)
    //     }
    //     return res.send(crt)
    // },

    // async update(req, res, next){
    //     try{
    //         const {username} = req.body
    //         const {id} = req.params

    //         await knex('users')
    //         .update({username})
    //         .where({id})

    //         return res.send()

    //     }catch(error){
    //         next(error)
    //     }
    // },

    // async delete(req,res,next){
    //     try{
    //         const {id} = req.params
    //         let dl = await userService.delete(id)
    //         res.sendStatus(res.statusCode)
            
    //     }catch(error){
    //       next(error)
    //     }
    // }


}