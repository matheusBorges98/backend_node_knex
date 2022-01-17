const clientesService = require('../services/clientesService')

module.exports = {

   async index(req, res) {
       
       try{
            res.status(200).json(await clientesService.get(req.body))
       }catch(err){
           console.log(err.message, err.status)
            res.status(500).send(`Response: ${err.message} ${err.status}`)
       }
      
    },

    async create(req, res, next){
        let crt;
        try{
            const data = req.body        
            crt = await clientesService.create(data)
           
        }catch(error){
            console.log(error)
        }
        return res.send(crt)
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
            let dl = await clientesService.delete(id)
            res.sendStatus(res.statusCode)
            
        }catch(error){
          next(error)
        }
    }


}