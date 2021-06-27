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

    async create(req, res){
        try{
            const data = req.body        
            res.json(await userService.create(data)).status(201).send("Created")
        }catch(error){
            console.log(error)
            //res.status(500)
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
            
            res.status(204)
                        .json(await userService.delete(id))
            
        }catch(error){
           console.log(error)
        }
    }


}