const userService = require('../services/userService')

module.exports = {

   async index(req, res) {
       
       try{
            res.status(200).json(await userService.get(req.body))
       }catch(err){
           console.log(err.message, err.status)
            res.status(500).send(`Response: ${err.message} ${err.status}`)
       }
      
    },

    async create(req, res, next){
        console.log(req.body)
        try{
            const {username} = req.body
            console.log(username)
            await knex('users').insert({
                username
            })

            return res.status(201).send();
        }catch(error){
            res.status(500).send("Houve uma falha ao inserir os dados, "+ error)
            console.log(error)
            //next(error)
        }
    },

    async update(req, res, next){
        try{
            const {username} = req.body
            const {id} = req.params

            await knex('users')
            .update({username})
            .where({id})

            return res.send()

        }catch(error){
            next(error)
        }
    },

    async delete(req,res,next){
        try{
            const {id} = req.params
            await knex('users')
            .where({id})
            .del()

            return res.send()
            
        }catch(error){
            next(error)
        }
    }


}