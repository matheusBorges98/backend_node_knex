const knex = require('../database');

module.exports = {

   async getCliente(data){
       try{
            let query = `
                select * from cliente u order by u.updated_at DESC
           `

            const results = await knex.raw(query,data);

            return results[0]
       }catch(err){
           return err
       }
       
   },

   async createCliente(data){
       let result;
       try{
            result = await knex('cliente').insert(data);

            result = {"Status":"Created", "Code":400}

       }catch(err){
           console.log(err)
           return {"Error ":err.detail}
       }

       return result;
   },

   async deleteCliente(id){
       try{
           const result = await knex('cliente')
            .where({id})
            .del()
       }catch(err){
          return {"Error ":err.detail}
       }
   }



}